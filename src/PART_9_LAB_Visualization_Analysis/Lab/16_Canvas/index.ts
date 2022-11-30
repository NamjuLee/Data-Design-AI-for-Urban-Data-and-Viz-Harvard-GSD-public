import { RendererCanvas } from '../../../lib'

export class Solution extends RendererCanvas {

    constructor(view: any) {
        super(view);
        // TODO
        // You code goes here for one time operation

        // !! you should execute it for rendering
        // this.start();
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop

        ctx.beginPath();
        ctx.arc(ctx.canvas.width * 0.5, ctx.canvas.height * 0.5, 300, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()

        // !! can stop render after this frame.
        // this.isStatic = true;
    }
    public mouseDown(x: number, y: number): void {
        // TODO
    }
    public mouseUp(x: number, y: number): void {
        // TODO
    }
    public mouseDrag(x: number, y: number): void {
        // TODO
    }
    public mouseClick(x: number, y: number): void {
        // TODO
    }
    public mouseMove(x: number, y: number) {
        // TODO
    }
    public keyDown(k: KeyboardEvent): void {
        // TODO
    }
}
