import { SCircle } from './Geometry/SCircle';
import { SRectangle } from './Geometry/SRectangle';

export class SVGCore {
    svgCore: SVGAElement;
    host: HTMLElement;
    ctx: CanvasRenderingContext2D;
    svgns: string = 'http://www.w3.org/2000/svg';
    t: number = 0.0;

    sCircles: SCircle[] = [];

    constructor(id: string) {
        this.InitCanvas(id);
    }
    InitCanvas(id: string) {
        const svgCore = document.createElementNS(this.svgns, 'svg');
        const host = document.getElementById(id);

        if (host) {
            host.setAttribute('hover', 'http://www.w3.org/1999/xlink');
            // host.setAttribute('transition', `fill 3s`);

            host.appendChild(svgCore);
            this.host = host;
        }
        if (svgCore) {
            this.svgCore = svgCore as SVGAElement;
            this.svgCore.style.width = this.host.clientWidth + 'px';
            this.svgCore.style.height = this.host.clientHeight + 'px';
            // this.svgCore.style.left = 0 + 'px';
            this.svgCore.style.position = 'absolute';
            this.svgCore.setAttribute('viewBox', '-200, -200, 500, 500');
            this.svgCore.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            this.svgCore.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
            this.svgCore.setAttribute('transition', `fill 3s `);
            // xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            // this.svgCore.style.background = 'red';
        }
        this.AddShape();
    }

    AddShape() {

        // rect.setAttribute('color', '#00ff00');
        const offset = 18;
        for (let x = -150; x < 350; x += offset) {
            for (let y = -150; y < 150; y += offset) {
                this.sCircles.push(new SCircle(this.svgCore, x, y, offset * 0.5));
            }
        }

        for (let y = -150; y < 150; y += offset) {
            const r = new SRectangle(this.svgCore, -280, y - offset * 0.5, 100, 20);
            console.log(r);
        }

    }
    Resize(e: UIEvent) {
        // this.canvas.width = this.host.clientWidth;
        // this.canvas.height = this.host.clientHeight;
    }
    Render(ctx: CanvasRenderingContext2D) {
        console.log(ctx);
    }
    MouseDown(e: MouseEvent) {
        console.log(e);
    }
    MouseUp(e: MouseEvent) {
        console.log(e);
    }
    MouseMove(e: MouseEvent) {
        console.log(e);
    }
    public destroy() {
        while(this.host.lastChild) {
            this.host.removeChild(this.host.lastChild);
        }
    }
}