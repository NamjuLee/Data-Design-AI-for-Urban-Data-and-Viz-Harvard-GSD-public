import { RendererJSAPI, getLineSeg, AStart, NodeAStar, buildNetwork, distanceTo } from 'njscore';
import { Point, Line, InteractivePoint } from './01_Interaction';

export class Solution extends RendererJSAPI {

    pts: Point[] = [];
    lns: Line[] = [];

    path: any;

    previousPt: Point | undefined = undefined;

    ptStart: InteractivePoint;
    ptEnd: InteractivePoint;
    captured: InteractivePoint | undefined = undefined;

    nodeAStar: NodeAStar[] = [];
    nodeStart: NodeAStar;
    nodeEnd: NodeAStar;

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
        this.ptEnd = new InteractivePoint(868, 820);

        // !! you should execute it for rendering
        this.start();
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop

        this.lns.map((l: Line) => {
            return l.render(ctx, this.time);
        });
        this.pts.map((p: Point) => {
            return p.render(ctx, this.time);
        });

        // console.log(this.path)
        if (this.path) {

            ctx.beginPath();
            ctx.moveTo(this.path[0].x, this.path[0].y);
            for (let i = 1; i < this.path.length; ++i) {

                if (this.path[i] !== undefined) {
                    ctx.lineTo(this.path[i].x, this.path[i].y);
                }

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
        if (this.ptStart.inInside(x, y)) {
            this.captured = this.ptStart;
            return;
        }
        if (this.ptEnd.inInside(x, y)) {
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

            const obj = (JSON.parse(JSON.stringify(this.lns)));
            console.log(getLineSeg(obj))

            this.nodeAStar = buildNetwork(getLineSeg(obj));

            this.nodeStart =  getCloseNode(this.ptStart.x, this.ptStart.y, 0, this.nodeAStar);
            this.nodeEnd = getCloseNode(this.ptEnd.x, this.ptEnd.y, 0, this.nodeAStar);

            this.path = AStart.gePath(this.nodeStart, this.nodeEnd);

        }

    }
    public mouseMove(x: number, y: number) {
        if (this.captured) {
            this.captured.x = x;
            this.captured.y = y;

            this.nodeStart =  getCloseNode(this.ptStart.x, this.ptStart.y, 0, this.nodeAStar);
            this.nodeEnd = getCloseNode(this.ptEnd.x, this.ptEnd.y, 0, this.nodeAStar);

            this.path = AStart.gePath(this.nodeStart, this.nodeEnd);
        }
    }
}
const getCloseNode = (x: number, y: number, z: number, nodes: NodeAStar[] ) => {
    let dis = 100000;
    let id = -1;
    for(let i = 0 ; i < nodes.length; ++i) {
        let theDis = distanceTo(x, y, z, nodes[i].x, nodes[i].y, nodes[i].z);
        if (theDis < dis) {
            dis = theDis;
            id = i;
        }
    }
    return nodes[id];
};