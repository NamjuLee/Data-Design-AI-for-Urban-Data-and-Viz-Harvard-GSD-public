import { RendererJSAPI } from '../../../lib'
import { getCSVFromURL, Vector3, isInsideOfVecs } from 'njscore';

export class Solution extends RendererJSAPI {
    pts: number[][] = [];

    captureVec: Vector3

    pixelMap: CustomDynamicBinSystem;

    constructor(view: any) {
        super(view);
        // TODO
        // You code goes here for one time operation

        this.mView.on("drag", (event) => {
            event.stopPropagation();
        });
        this.mView.navigation.mouseWheelZoomEnabled = false;

        // https://data.boston.gov/dataset/blue-bike-stations
        getCSVFromURL(process.env.PUBLIC_URL + '/static/data/Primary_Street_Trees_Public.csv').then((d) => {
            let count = 0;
            let latSum = 0;
            let lonSum = 0;
            const line = d.split(/\r\n|\r|\n/g);
            for (let i = 1; i < line.length; ++i) {
                const values = line[i].split(',');
                const lon = +values[13];
                const lat = +values[14];
                if ((!isNaN(lon) && !isNaN(lat) && ((lon !== 0)&& (lat !== 0)))) {
                    console.log(lon, lat);
                    
                    this.pts.push([lon, lat]);
                    count++;
                    latSum += lat;
                    lonSum += lon;
                }
            }
            // console.log(count)
            this.center(lonSum / count, latSum / count);
            this.zoom(12);



            this.pixelMap = new CustomDynamicBinSystem(
                new Vector3(100, 100, 0),
                new Vector3(500, 500, 0),
            );
            this.pixelMap.mode = 2;
            this.pixelMap.Init();

            this.start();
        });

    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop

        ctx.globalCompositeOperation = 'color-dodge';

        for (let i = 0; i < this.pts.length; ++i) { 
            // const projected = this.toScreen(this.pts[i][0], this.pts[i][1]); 
            // renderPoint(ctx, projected[0], projected[1], this.time + 3, 'rgba(10, 255, 10, 0.2)' );
        }

        this.pixelMap.RenderPixel(ctx);
        this.pixelMap.RenderCorner(ctx);
        this.pixelMap.RenderSelPixel(ctx);


        // this.pixelMap.RenderPixel(ctx);
        // this.pixelMap.RenderCorner(ctx);
        // this.pixelMap.RenderSelPixel(ctx);

        // !! can stop render after this frame.
        // this.isStatic = true;
    }
    public mouseDown(x: number, y: number): void {
        this.captureVec = this.pixelMap.IsHover(x, y);
    }
    public mouseMove(x: number, y: number): void {
        this.pixelMap.MoveInspection(x, y);
        if (this.pixelMap.selPixel) {
            // const d = (this.pixelMap.selPixel.data['num'] as number).toFixed(4);
            // const text = 'data: ' + d;
            // console.log(text);
            return;
        }
        if (this.captureVec) {
            this.pixelMap.DragControlPoint(x, y);

        }
    }
    public mouseUp(x: number, y: number): void {
        this.captureVec = undefined;
    }
}
const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, t: number, color: string) => {
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, (Math.sin(t * 0.8) + 6) * 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
};







export class CustomDynamicBinSystem {
    v0: Vector3;
    v1: Vector3;
    rx: number;
    ry: number;
    ddx: number;
    ddy: number;
    pts: Vector3[][] = [];
    ptList: Vector3[] = [];
    listPixels: Pixel[] = [];
    m: Vector3;
    t: number = 0.0;
    mode: number = 0;
    selPixel: Pixel | undefined = undefined;
    constructor(v0: Vector3, v1: Vector3) {
        this.v0 = v0;
        this.v1 = v1;
        this.rx = 10;
        this.ry = 10;
        this.ddx = 0.0;
        this.ddy = 0.0;
        this.m = new Vector3(0, 0);
        this.Init();
    }
    public IsHover(x: number, y: number) {
        this.m.x = x; this.m.y = y;
        let p = this.pts[0][0];
        if (Vector3.distanceTo(this.m, p) < 8) { return p; }
        p = this.pts[0][this.pts[0].length - 1];
        if (Vector3.distanceTo(this.m, p) < 8) { return p; }
        p = this.pts[this.pts.length - 1][this.pts[0].length - 1];
        if (Vector3.distanceTo(this.m, p) < 8) { return p; }
        p = this.pts[this.pts.length - 1][0];
        if (Vector3.distanceTo(this.m, p) < 8) { return p; }
        return undefined;
    }
    public Move(x: number, y: number) {
        this.MoveInspection(x, y);
    }
    public MoveInspection(x: number, y: number) {
        this.m.x = x;
        this.m.y = y;
        for (let j = 0; j < this.listPixels.length; ++j) {
            // console.log('ddd');
            if (isInsideOfVecs(this.m, this.listPixels[j].recVec)) {
                this.selPixel = this.listPixels[j];
                return;
            } else {
                this.selPixel = undefined;
                // console.log('out');
            }
        }
    }
    public DragControlPoint(x: number, y: number) {
        this.m.x = x; this.m.y = y;
        let p = this.pts[0][0];
        if (Vector3.distanceTo(this.m, p) < 60) {
            this.v0.x = x;
            this.v0.y = y;
        }
        p = this.pts[0][this.pts[0].length - 1];
        if (Vector3.distanceTo(this.m, p) < 60) {
            this.v1.x = x;
            this.v0.y = y;
        }
        p = this.pts[this.pts.length - 1][this.pts[0].length - 1];
        if (Vector3.distanceTo(this.m, p) < 60) {
            this.v1.x = x;
            this.v1.y = y;
        }
        p = this.pts[this.pts.length - 1][0];
        if (Vector3.distanceTo(this.m, p) < 60) {
            this.v0.x = x;
            this.v1.y = y;
        }
        this.Init();
    }
    public Init() {
        this.ddx = (this.v1.x - this.v0.x) / (this.rx - 1.0);
        this.ddy = (this.v1.y - this.v0.y) / (this.ry - 1.0);
        // console.log('ddx is ' + this.ddx + '. ddy is ' + this.ddx);
        // console.log('Pixe Map was executed...');
        this.pts = [];
        this.ptList = [];
        this.listPixels = [];

        this.InitGrid();
        // this.ComputeAtt();

        switch (this.mode) {
            case 0: this.ComputeRec(); break;
            case 1: this.ComputeTriA(); break;
            case 2: this.ComputeTriB(); break;
            case 3: this.ComputeDia(); break;
            case 4: this.ComputeLShape(); break;
            default: this.ComputeHex(); break;
        }

    }
    public UpdateData(vs: Vector3[]) {
        for (let j = 0; j < this.listPixels.length; ++j) {
            this.listPixels[j].data['num'] = 0;
        }
        for (let i = 0; i < vs.length; ++i) {
            const p = vs[i];
            for (let j = 0; j < this.listPixels.length; ++j) {
                if (isInsideOfVecs(p, this.listPixels[j].recVec)) {
                    this.listPixels[j].data['num'] += p.z;
                }
            }
        }
    }
    public InitGrid() {
        this.pts = [];
        for (let j = 0; j < this.ry; ++j) {
            let y = this.v0.y + j * this.ddy;
            let xArray: Vector3[] = [];
            for (let i = 0; i < this.rx; ++i) {
                let x = this.v0.x + i * this.ddx;
                const v = new Vector3(x, y, 0);
                xArray.push(v);
                this.ptList.push(v);
            }
            this.pts.push(xArray);
        }
    }
    public ComputeRec() {
        this.listPixels = [];
        for (let j = 0; j < this.ry; j += 1) {
            for (let i = 0; i < this.rx; i += 1) {
                if (i < this.rx - 1 && j < this.ry - 1) {
                    let p = new Pixel(this);
                    p.recVec.push(this.pts[j][i]);
                    p.recVec.push(this.pts[j][i + 1]);
                    p.recVec.push(this.pts[j + 1][i + 1]);
                    p.recVec.push(this.pts[j + 1][i]);
                    this.listPixels.push(p);
                }
            }
        }
    }
    public ComputeTriA() {
        this.listPixels = [];
        for (let j = 0; j < this.ry; j += 1) {
            for (let i = 0; i < this.rx; i += 1) {
                if (i < this.rx - 1 && j < this.ry - 1) {
                    let p = new Pixel(this);
                    p.recVec.push(this.pts[j][i]);
                    p.recVec.push(this.pts[j][i + 1]);
                    p.recVec.push(this.pts[j + 1][i]);
                    this.listPixels.push(p);

                    p = new Pixel(this);
                    p.recVec.push(this.pts[j][i + 1]);
                    p.recVec.push(this.pts[j + 1][i + 1]);
                    p.recVec.push(this.pts[j + 1][i]);
                    this.listPixels.push(p);
                }
            }
        }
    }
    public ComputeDia() {
        this.listPixels = [];
        for (let j = 0; j < this.ry; j += 1) {
            for (let i = 0; i < this.rx; i += 1) {
                if (i < this.rx - 2 && j < this.ry - 1) {
                    let p = new Pixel(this);
                    p.recVec.push(this.pts[j][i]);
                    p.recVec.push(this.pts[j][i + 1]);
                    p.recVec.push(this.pts[j + 1][i + 2]);
                    p.recVec.push(this.pts[j + 1][i + 1]);

                    this.listPixels.push(p);
                }
            }
        }
    }
    public ComputeLShape() {
        this.listPixels = [];
        for (let j = 0; j < this.ry; j += 3) {
            for (let i = 0; i < this.rx; i += 2) {
                if (i < this.rx - 2 && j < this.ry - 2) {
                    let p = new Pixel(this);
                    p.recVec.push(this.pts[j][i]);
                    p.recVec.push(this.pts[j][i + 2]);
                    p.recVec.push(this.pts[j + 1][i + 2]);
                    p.recVec.push(this.pts[j + 1][i + 1]);
                    p.recVec.push(this.pts[j + 2][i + 1]);
                    p.recVec.push(this.pts[j + 2][i]);
                    this.listPixels.push(p);

                    p = new Pixel(this);
                    p.recVec.push(this.pts[j + 2][i]);
                    p.recVec.push(this.pts[j + 3][i]);
                    p.recVec.push(this.pts[j + 3][i + 2]);
                    p.recVec.push(this.pts[j + 1][i + 2]);
                    p.recVec.push(this.pts[j + 1][i + 1]);
                    p.recVec.push(this.pts[j + 2][i + 1]);
                    // p.recVec.push(this.pts[j + 1][i + 2]);
                    // p.recVec.push(this.pts[j + 1][i + 1]);
                    // p.recVec.push(this.pts[j + 2][i + 1]);
                    // p.recVec.push(this.pts[j + 2][i]);
                    this.listPixels.push(p);
                }
            }
        }
    }
    public ComputeTriB() {
        this.listPixels = [];
        for (let j = 0; j < this.ry; j += 1) {
            for (let i = 0; i < this.rx; i += 1) {
                if (i < this.rx - 1 && j < this.ry - 1) {
                    let p = new Pixel(this);
                    p.recVec.push(this.pts[j][i]);
                    p.recVec.push(this.pts[j][i + 1]);
                    p.recVec.push(this.pts[j + 1][i + 1]);
                    this.listPixels.push(p);

                    p = new Pixel(this);
                    p.recVec.push(this.pts[j][i]);
                    p.recVec.push(this.pts[j + 1][i + 1]);
                    p.recVec.push(this.pts[j + 1][i]);
                    this.listPixels.push(p);
                }
            }
        }
    }
    public ComputeHex() {
        this.listPixels = [];
        let alter = true;
        for (let j = 0; j < this.ry; j += 2) {
            for (let i = 0; i < this.rx; i += 2) {
                if (alter) {
                    if (i % 2 === 0 && i < this.rx - 2 && j % 2 === 0 && j < this.ry - 2) {
                        let p = new Pixel(this);
                        p.recVec.push(this.pts[j][i + 1]);
                        p.recVec.push(this.pts[j + 1][i + 2]);
                        p.recVec.push(this.pts[j + 2][i + 2]);
                        p.recVec.push(this.pts[j + 3][i + 1]);
                        p.recVec.push(this.pts[j + 2][i]);
                        p.recVec.push(this.pts[j + 1][i]);
                        // p.recVec.push(this.pts[j][i+1]);
                        this.listPixels.push(p);
                    }
                } else {
                    if (i % 2 === 0 && i < this.rx - 2 && j % 2 === 0 && j < this.ry - 2) {
                        let p = new Pixel(this);
                        p.recVec.push(this.pts[j][i + 2]);
                        p.recVec.push(this.pts[j + 1][i + 3]);
                        p.recVec.push(this.pts[j + 2][i + 3]);
                        p.recVec.push(this.pts[j + 3][i + 2]);
                        p.recVec.push(this.pts[j + 2][i + 1]);
                        p.recVec.push(this.pts[j + 1][i + 1]);
                        // p.vecs.push(this.pts[j][i+2]);
                        this.listPixels.push(p);
                    }
                }
            }
            alter = !alter;
        }
        // console.log('done for grid');
        // this.InitGridNeighbor();
    }
    RenderPixel(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.listPixels.length; ++i) {
            this.listPixels[i].Render(ctx);
        }
    }
    RenderCorner(ctx: CanvasRenderingContext2D) {
        let p = this.pts[0][0];
        CanvasDrawing.PointByNVecAni(ctx, p, 7, this.t, 'rgba(255, 0, 0, 1)');
        ctx.stroke();
        p = this.pts[0][this.pts[0].length - 1];
        CanvasDrawing.PointByNVecAni(ctx, p, 7, this.t, 'rgba(255, 0, 0, 1)');
        ctx.stroke();
        p = this.pts[this.pts.length - 1][this.pts[0].length - 1];
        CanvasDrawing.PointByNVecAni(ctx, p, 7, this.t, 'rgba(255, 0, 0, 1)');
        ctx.stroke();
        p = this.pts[this.pts.length - 1][0];
        CanvasDrawing.PointByNVecAni(ctx, p, 7, this.t, 'rgba(255, 0, 0, 1)');
        ctx.stroke();
        this.t += 0.07;
    }
    public RenderSelPixel(ctx: CanvasRenderingContext2D) {
        if (this.selPixel) {
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#ffffff';
            // ctx.fillStyle = `rgba(255, 0, 255, ${this.data['num'] * 0.05} )`;
            ctx.beginPath();
            ctx.moveTo(this.selPixel.recVec[0].x, this.selPixel.recVec[0].y);
            for (let i = 1; i < this.selPixel.recVec.length; ++i) {
                ctx.lineTo(this.selPixel.recVec[i].x, this.selPixel.recVec[i].y);
            }
            ctx.closePath();

            ctx.stroke();
        }
    }
}


export class Pixel {
    static ID = 0;

    map: CustomDynamicBinSystem;
    vec: Vector3;
    norV: Vector3;
    nPix: Pixel[] = [];
    recVec: Vector3[];
    i: number = -1;
    j: number = -1;
    k: number = -1;
    u: number = -1;
    v: number = -1;
    id: number;
    color: number[] = [];
    data: {};

    static GetID() { return Pixel.ID++; }

    constructor(map: CustomDynamicBinSystem, v: Vector3 = new Vector3(0, 0, 0)) {
        this.map = map;
        this.vec = v;
        this.nPix = [];
        this.recVec = [];
        this.i = -1;
        this.j = -1;
        this.k = -1;
        this.id = Pixel.GetID();
        this.data = {};
    }
    ToString() {
        let temp = 'Pixel' + this.id;
        // console.log(temp);
        return temp;
    }
    Update() {
        /* */
    }
    Render(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = `rgba(255, 0, 255, ${this.data['num'] * 0.05} )`;
        ctx.beginPath();
        ctx.moveTo(this.recVec[0].x, this.recVec[0].y);
        for (let i = 1; i < this.recVec.length; ++i) {
            ctx.lineTo(this.recVec[i].x, this.recVec[i].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // }

    }
}


export class CanvasDrawing {
    public static LineByVecs(ctx: CanvasRenderingContext2D, v0: Vector3, v1: Vector3, width: number = 1, fill: string = '#ff0000') {
        ctx.strokeStyle = fill;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(v0.x, v0.y);
        ctx.lineTo(v1.x, v1.y);
        ctx.closePath();
        ctx.stroke();
    }
    public static Line(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, width: number = 1, fill: string = '#ff0000') {
        ctx.strokeStyle = fill;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.closePath();
        ctx.stroke();
    }
    public static Point(ctx: CanvasRenderingContext2D, x: number, y: number, r: number = 5, fill: string = '#ff0000') {
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    public static PointByNVec(ctx: CanvasRenderingContext2D, v: Vector3, r: number = 5, fill: string = '#ff0000') {
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(v.x, v.y, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    public static PointByNVecAni(ctx: CanvasRenderingContext2D, v: Vector3, r: number = 5, t: number, fill: string = '#ff0000') {
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(v.x, v.y, r + (1 + Math.sin(t)) * 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    // .....................................................
    public static GridLineOrigin(ctx: CanvasRenderingContext2D, xNum: number = 10, yNum: number = 10, xOff: number = 20, yOff: number = 20) {
        const xStart = - ((xNum * xOff) * 0.5);
        const yStart = - ((yNum * yOff) * 0.5);

        ctx.lineWidth = 0.1;

        for (let y = 0; y <= yNum; ++y) {
            // for (let x = 0; x <= xNum; ++x) {
            //     ctx.beginPath();
            //     ctx.arc(xStart + (xOff * x), yStart + (yOff * y), 1, 0, Math.PI * 2);
            //     ctx.closePath();
            //     ctx.fill();
            // }
            ctx.beginPath();
            ctx.moveTo(xStart, yStart + (yOff * y));
            ctx.lineTo((xNum * xOff) * 0.5, yStart + (yOff * y));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(xStart + (xOff * y), yStart);
            ctx.lineTo(yStart + (yOff * y), (yNum * yOff) * 0.5);
            ctx.closePath();
            ctx.stroke();
        }

    }
    public static GridPointOrigin(ctx: CanvasRenderingContext2D, xNum: number = 10, yNum: number = 10, xOff: number = 20, yOff: number = 20) {
        const xStart = - ((xNum * xOff) * 0.5);
        const yStart = - ((yNum * yOff) * 0.5);
        // console.log(xStart, yStart);
        ctx.lineWidth = 0.1;

        for (let y = 0; y <= yNum; ++y) {
            for (let x = 0; x <= xNum; ++x) {
                ctx.beginPath();
                ctx.arc(xStart + (xOff * x), yStart + (yOff * y), 1, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

        }

    }

    constructor() {
        //
    }
}