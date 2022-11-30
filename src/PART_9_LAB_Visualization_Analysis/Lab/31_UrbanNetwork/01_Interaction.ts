import { RendererJSAPI } from '../../../lib'

import { distanceTo } from 'njscore';

export class Solution extends RendererJSAPI {

    pts: Point[] = [];
    lns: Line[] = [];

    path: any;

    previousPt: Point | undefined = undefined;

    ptStart: InteractivePoint;
    ptEnd: InteractivePoint;
    captured: InteractivePoint | undefined = undefined;

    constructor(view: any) {
        super(view);
        // TODO
        // You code goes here for one time operation

        // disable interaction with a base map
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
        this.mView.on("drag", (event) => {
            event.stopPropagation();
        });
        this.mView.navigation.mouseWheelZoomEnabled = false;
        this.center(-71.102761, 42.366946);
        this.zoom(15)


        this.ptStart = new InteractivePoint(315, 90);
        this.ptEnd = new InteractivePoint(1268, 1120);

        // !! you should execute it for rendering
        this.start();
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop


        this.lns.map( (l: Line) => {
            return l.render(ctx, this.time);
        });
        this.pts.map( (p: Point) => {
            return  p.render(ctx, this.time);
        });


        if (this.path) {

            ctx.beginPath();
            ctx.moveTo(this.path[0].x, this.path[0].y);
            for(let i = 1; i < this.path.length; ++i) {
                ctx.lineTo(this.path[i].x, this.path[i].y);
            }
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#f00';
            ctx.stroke();

        }

        this.ptStart.Render(ctx, this.time);
        this.ptEnd.Render(ctx, this.time);

        // !! can stop render after this frame.
        // this.isStatic = true;
    }
    public mouseDown(x: number, y: number): void {
        if (this.ptStart.inInside(x,y)) {
            this.captured = this.ptStart;
            return;
        }
        if (this.ptEnd.inInside(x,y)) {
            this.captured = this.ptEnd;
            return;
        }
       
    }
    public mouseUp(x: number, y: number): void {
        this.captured = undefined;
    }
    public mouseDrag(x: number, y: number): void {
        // TODO
    }
    public mouseClick(x: number, y: number): void {

        if (this.previousPt === undefined) {
            const p = new Point(x, y);
            this.previousPt = p
            this.pts.push(p);
        } else {
            const p = new Point(x, y);
            this.pts.push(p);
            
            this.lns.push(new Line(this.previousPt, p));
            this.previousPt = undefined;


       }


    }
    public mouseMove(x: number, y: number) {
        if (this.captured) {
            console.log(x, y)
            this.captured.x = x;
            this.captured.y = y;
        }    
    }
}


export class InteractivePoint {
    x: number;
    y: number;
    r: number = 10;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public Render(ctx: CanvasRenderingContext2D, t: number) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.sin(t) + this.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = '#00f'
        ctx.fill();

        ctx.strokeStyle = '#fff'
        ctx.stroke();
    }
    public inInside(x: number, y: number) {
        if (distanceTo(x, y, 0, this.x, this.y, 0) < this.r + 2){
            return true;
        } else {
            return false;
        }
    }
}

export class Line {
    public p0: Point;
    public p1: Point;
    public lineWidth = 2;
    constructor(p0: Point, p1: Point) {
        this.p0 = p0;
        this.p1 = p1;
    }
    render(ctx: CanvasRenderingContext2D, t: number) {
        ctx.beginPath();
        ctx.moveTo(this.p0.x, this.p0.y);
        ctx.lineTo(this.p1.x, this.p1.y);
        ctx.closePath();

        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = '#fff';
        ctx.stroke();

    }
}
export class Point {
    x: number;
    y: number;
    z: number = 0;
    r: number = 6;
    constructor(x: number, y: number)  {
        this.x = x;
        this.y = y;
    }
    render(ctx: CanvasRenderingContext2D, t: number) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.sin(t) + this.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = '#0f0'
        ctx.fill();
        ctx.strokeStyle = '#fff'
        ctx.stroke();
    }
}