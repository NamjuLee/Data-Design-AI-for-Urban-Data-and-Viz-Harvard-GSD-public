// import { RendererJSAPI } from '../../lib';
// import { RendererJSAPI } from '../../lib';
import { RendererJSAPI  } from 'njscore';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

export class App {
    constructor(id: string) {
        console.log('third place app ',id);

        const map = new Map({
            basemap: "dark-gray-vector" // topo, dark-gray-vector, streets, streets-night-vector
          });
        
          const view = new MapView({
            container: id,
            map,
            zoom: 15,
            center: [-71.0933575, 42.3591654]
          });
          view.when(() => {
            new Solution(view);
          });

    }
}
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
