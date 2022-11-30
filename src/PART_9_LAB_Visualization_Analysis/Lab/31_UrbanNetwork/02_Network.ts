import { RendererJSAPI } from '../../../lib'

import { getLineSeg, distanceTo, Graph, Node } from 'njscore';

import { Point, Line, InteractivePoint } from './01_Interaction';

export class Solution extends RendererJSAPI {
    network: Network;

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

        this.network = new Network();

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
            return p.render(ctx, this.time);
        });


        this.network.render(ctx);

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

            const obj = (JSON.parse(JSON.stringify(this.lns)));
            
            this.network = new Network();
            this.network.addLine(obj);

            this.path = this.network.getPath(
                    { x: this.ptStart.x, y: this.ptStart.y, z: 0 }, 
                    { x: this.ptEnd.x,   y: this.ptEnd.y,   z: 0
                });

        }

    }
    public mouseMove(x: number, y: number) {
        if (this.captured) {
            this.captured.x = x;
            this.captured.y = y;

            if (this.network.isActivated) {
                this.path = this.network.getPath(
                    { x: this.ptStart.x, y: this.ptStart.y, z: 0 }, 
                    { x: this.ptEnd.x,   y: this.ptEnd.y,   z: 0
                });
        
            }
        }
    }
}

class Network {
    graph: Graph;
    isActivated = false;
    constructor() {
        this.graph = new Graph();
    }
    public addLine(lns: any) {
        const lineSeg = getLineSeg(lns);
        this.graph.initByLines(lineSeg)
        console.log(this.graph);
        this.isActivated = true;
    }
    public render(ctx: CanvasRenderingContext2D): void {
        
        this.graph.edges.map((e, i) => {
            ctx.beginPath();
            ctx.moveTo(e.n0.x, e.n0.y);
            ctx.lineTo(e.n1.x, e.n1.y);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            return undefined;
        });

        this.graph.nodes.map((n) => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            return undefined;
        });

        if (this.graph.nodeOrigin) {
            ctx.beginPath();
            ctx.arc(this.graph.nodeOrigin.x, this.graph.nodeOrigin.y, 7, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = '#f00';
            ctx.fill();
        }

        if (this.graph.nodeTarget) {
            ctx.beginPath();
            ctx.arc(this.graph.nodeTarget.x, this.graph.nodeTarget.y, 7, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = '#f00';
            ctx.fill();
        }
    }
    public getPath(p0, p1) {
        const nodeStart = this.graph.findClosestNode(p0);
        const nodeEnd = this.graph.findClosestNode(p1);

        this.graph.propagationByNode(nodeStart);
        // this.graph.propagationByNode(nodeStart, costFnDistance, 0.1);

        const nodes = this.graph.backpropagation(nodeEnd);
        return nodes;
    }
}
const costFnDistance = (p0: Node, p1: Node, beta: number = 0.0002) => {
    return distanceTo(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
}





