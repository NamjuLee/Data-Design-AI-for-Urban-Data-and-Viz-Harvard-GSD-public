import { RendererJSAPI } from '../../../lib'

export class Solution extends RendererJSAPI {

    constructor(view: any) {
        super(view);
        // TODO
        // You code goes here for one time operation


        // !! you should execute it for rendering
        this.start();
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop


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
