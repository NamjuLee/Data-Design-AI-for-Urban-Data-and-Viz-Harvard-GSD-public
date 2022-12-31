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
        // TODO
        // You code goes here for one time operation
        // Reference: https://codepen.io/NJStudio/pen/jObdYOr?editors=1010
        
        console.log('workshop-canvas 01 Point & Circle');

        // Render a center point
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, 3.14 * 2)
        ctx.closePath();
        ctx.fillStyle = '#ff0000';
        ctx.fill();


        // Render a half circle 
        ctx.beginPath();
        ctx.arc(0, -100, 10, 0, 3.14)
        ctx.closePath();
        ctx.fillStyle = '#ff0000';
        ctx.fill();
    
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.85)';
        ctx.stroke();


        const drawPoint = (x: number, y: number, color: string = '#121212', r: number = 5) => {
            if (r < 0.1) { r = 0.1; }
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2)
            ctx.closePath()
            ctx.fillStyle = color;
            ctx.fill()
        }

        function drawPointSecond(x: number, y: number, color: string = '#121212', r: number = 5) {
            if (r < 0.1) { r = 0.1; }
            // https://www.w3schools.com/js/js_functions.asp
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2)
            ctx.closePath()
            ctx.fillStyle = color;
            ctx.fill()
        }

        // /////////////////////////////////////////////////////////////
        // // ......................................your code goes here
        // /////////////////////////////////////////////////////////////

        // (1) .................... variable
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
        let x: number = 10;
        x = -90;
        console.log('x is', x);

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
        const y = -90;
        const b = 20;
        console.log('b is', b );
        drawPoint(x, y, "#000000", 7)


        // (2) .................... make a list
        const list = [];
        const min = 0;
        const max = 5
        const step = 2
        for (let i = min; i < max; ++i) {
            list.push(i * step);
        }
        console.log(list);


        // (3) .................... draw points with the list
        list.forEach((i) => {
            drawPoint(i * 10, -50);
        });

        // (4) .................... make a range
        const range = []
        const minRange = - 8
        const maxRange = 8
        const numberOfdata = 12
        const interval = (maxRange - minRange) / (numberOfdata - 1);
        for (let i = 0; i < numberOfdata; i++) {
            range.push(minRange + i * interval);
        }
        console.log(range)

        // (5) .................... draw points with the range
        range.forEach((i) => {
            // drawPoint(i * 10, -25, '#ff0000', 2.57)
            drawPointSecond(i * 10, -25, '#ff0000', 2.57)
        });


        // (6) .................... draw a point grid by the range and list
        const xOff = 7;
        const yOff = 7;

        for (let j = 0; j < list.length; ++j) {
            const y = list[j]
            for (let i = 0; i < range.length; ++i) {
                const x = range[i]
                drawPoint(x * xOff, y * yOff, '#0000ff', (Math.sin(i * j * 0.1) + 0.5) * 5);
            }
        }

    }
}
