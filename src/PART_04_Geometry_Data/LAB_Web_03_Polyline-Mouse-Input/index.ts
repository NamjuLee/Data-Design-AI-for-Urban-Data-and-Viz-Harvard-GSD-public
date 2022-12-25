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
        ctx.arc(0, 0, 2, 0, 3.14 * 2)
        ctx.closePath();

        ctx.fillStyle = '#ff0000'
        ctx.fill();

        // TODO
        // You code goes here for one time operation
        // Reference: https://codepen.io/NJStudio/pen/KKdJRRv?editors=0110

        console.log('workshop-canvas 03 Polyline Mouse Interaction');

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


        // (1) .................... interactive drawing point and line

        const listPoint2 = []

        this.divHost.addEventListener('click', (e: MouseEvent) => {
            ctx.clearRect(-200, -200, 400, 400);
            
            console.log(`mouse x: ${e.offsetX}, y: ${e.offsetY}`);
            // add a position to the list
            listPoint2.push([e.offsetX - 0, e.offsetY - 0]);

            // draw lines by the array
            drawLine(listPoint2);

            // loop for draw points by the array
            for (let i = 0; i < listPoint2.length; ++i) {
                drawPoint(listPoint2[i][0], listPoint2[i][1]);
            }

        });

        // (2) .................... interactive drawing point and line
        // const listPoint = []

        // div.addEventListener('click', (e: MouseEvent) =>{
        //   ctx.clearRect(-200, -200, 400, 400);
        //   console.log(`mouse x: ${e.x}, y: ${e.y}` );

        //   // if the length of the list is begger tahn 5, we remove the iteam in the first index.
        //   if(listPoint.length > 5) {
        //     listPoint.shift();
        //   }

        //   // add a position to the list
        //   listPoint.push([e.x - 210, e.y - 210]);

        //   // draw lines by the array
        //   drawLine(listPoint);

        //   // loop for draw points by the array
        //   for(let i = 0; i < listPoint.length; ++i) {
        //     drawPoint(listPoint[i][0], listPoint[i][1]);
        //   }

        // });


    }
    public mouseClick(x: number, y: number): void {
        
    }
}
