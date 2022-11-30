import { RendererJSAPI } from '../../../../lib'

export class Solution extends RendererJSAPI {

    pts: number[][] = [];
    constructor(view: any) {
        super(view);
        
        this.pts.push([-71.093161, 42.358871]);
        
        this.start();
    }
    public render(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.pts.length; ++i) { 
            const projected = this.toScreen(this.pts[i][0], this.pts[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time);
        }
    }
    public mouseDown(x: number, y: number): void {
        console.log('mouse down', x, y)
    }
    public mouseUp(x: number, y: number): void {
        console.log('mouse up', x, y)
    }
    public mouseDrag(x: number, y: number): void {
        console.log('mouse drag', x, y)
    }
    public mouseClick(x: number, y: number): void {
        console.log('mouse click', x, y)
        const mapProjected = this.toMap(x, y);
        this.pts.push(mapProjected);
        console.log(mapProjected)
    }
    public mouseMove(x: number, y: number) {
        console.log('mouse move', x, y)
    }
    public keyDown(k: KeyboardEvent): void {
        console.log('key down', k);
    }
}

const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, t: number) => {
    ctx.fillStyle = 'rgba(0,255,45,0.753)';
    ctx.beginPath();
    ctx.arc(x, y, (Math.sin(t * 0.8) + 4) * 4, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}