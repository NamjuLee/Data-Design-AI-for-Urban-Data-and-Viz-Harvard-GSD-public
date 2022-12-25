import { RendererCanvas } from '../../lib';

export class Solution extends RendererCanvas {

    constructor(div: HTMLDivElement) {
        super(div);

        this.canvas.style.background = '#fff';
        this.ctx.translate(this.ctx.canvas.width * 0.5, this.ctx.canvas.height * 0.5);
        this.ctx.scale(2, 2);
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
        // Reference: https://codepen.io/NJStudio/pen/jObdYOr?editors=1010

        console.log('workshop-canvas 04 Polygon');

        const p0 = [50, 50];
        const p1 = [-50, 50];
        const p2 = [-50, -50];
        const p3 = [50, -50];

        ctx.beginPath();
        ctx.moveTo(p0[0], p0[1]);
        ctx.lineTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.lineTo(p3[0], p3[1]);
        
        ctx.closePath();
        
        ctx.fillStyle = '#00ff00';
        ctx.fill();

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();



        // rectangle: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect
        ctx.beginPath();
        ctx.rect(-200, -200, 400, 400)
        ctx.rect(-100, -100, 200, 200)
        ctx.stroke();
        ctx.fill('evenodd');
    
    }
}
