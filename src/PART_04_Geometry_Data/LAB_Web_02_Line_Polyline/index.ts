import { RendererCanvas } from '../../lib';

export class Solution extends RendererCanvas {

    constructor(div: HTMLDivElement) {
        super(div);

        this.canvas.style.background = '#fff';
        // this.ctx.translate(this.ctx.canvas.width * 0.5, this.ctx.canvas.height * 0.5);
        // this.ctx.scale(2, 2);
        this.init();
    }
    public init() {
        const ctx = this.ctx;

        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, 3.14 * 2)
        ctx.closePath();

        ctx.fillStyle = '#ff0000'
        ctx.fill();

        // TODO
        // You code goes here for one time operation
        // Reference: https://codepen.io/NJStudio/pen/bGVzvMP?editors=1010

        console.log('workshop-canvas 02 Line & Polyline');



        const drawPoint = (x: number, y: number, color: string = '#121212', r: number = 5) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 3.14 * 2)
            ctx.closePath()
            ctx.fillStyle = color;
            ctx.fill()
        }
        const drawLine = (pts: number[][]) => {
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (let i = 1; i < pts.length; ++i) {
                ctx.lineTo(pts[i][0], pts[i][1]);
            }
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#00ff00';
            ctx.stroke();
        }


        /////////////////////////////////////////////////////////////
        // ......................................your code goes here
        /////////////////////////////////////////////////////////////

        // (1)
        const p0 = [10, 100];
        const p1 = [100, 10];

        ctx.beginPath();
        ctx.moveTo(p0[0], p0[1]);
        ctx.lineTo(p1[0], p1[1]);
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.stroke();

        // (2)
        // const pline = [ 50, 50, 50, 100, 100, 50, 100, 100 ]

        // (3) convert the python code and draw polyline 
        // lns = []
        // for y in range(10, 200, 10):
        //     for x in range(10, 200, 10):
        //         if (x + y) % 2 == 0:
        //             lns.append([x, y] )
        // renderLineSeg(lns)


    }
}
