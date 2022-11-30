import { SVGCore } from './SVGCore';
import { Core } from './Core';
export class AppSVG {
    svgCore: SVGCore;
    core: Core;
    static Init(id: string = 'SandBox') {
        const app = new AppSVG(id);
        app.Dummy();
    }
    constructor(id: string = 'SandBox') {
        this.core = new Core();
        this.svgCore = new SVGCore(id);
        // this.BindEvent();

    }
    public Dummy() {
        //
    }
    public BindEvent() {
        // this.svgCore.MouseDown = (e: MouseEvent) => this.core.MouseDown(e);
        // this.svgCore.MouseMove = (e: MouseEvent) => this.core.MouseMove(e);
        // this.svgCore.MouseUp = (e: MouseEvent) => this.core.MouseUp(e);
    }
    public destroy() {
        this.svgCore.destroy();
    }
}
