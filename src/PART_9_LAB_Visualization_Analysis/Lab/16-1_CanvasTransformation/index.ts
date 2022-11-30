import { RendererCanvas, getImgFromURL } from '../../../lib'

export class Solution {
    public divHost: HTMLElement;
    public renderer: Renderer;
    constructor(divHost: any) {
        this.divHost = divHost; 

        // Center align
        this.divHost.style.display = 'flex';
        this.divHost.style.alignItems = 'center';

        const div = document.createElement('div');
        div.style.marginLeft = 'auto';
        div.style.marginRight = 'auto';
        div.style.backgroundColor = '#555';
        div.style.width = '600px';
        div.style.height = '350px';

        this.divHost.appendChild(div);

        // TODO
        // You code goes here for one time operation

        this.renderer = new Renderer(div);

        // !! you should execute it for rendering
        // this.start();
    }
    public destroy() {
        this.renderer.destroy();
        while (this.divHost.lastElementChild) {
            this.divHost.removeChild(this.divHost.lastElementChild);
        }
    }
}

export class Renderer extends RendererCanvas {
    img: HTMLImageElement | undefined = undefined
    rotation = 0.0;
    constructor(div: any) {
        super(div);
        // TODO
        // You code goes here for one time operation

        getImgFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/img/bg/zoom-James-River-Kayaking.jpg').then( (img: HTMLImageElement) => {
            console.log(img)
            this.img = img;
            // this.hostDiv.style.width = img.width + 'px';
            // this.hostDiv.style.height = img.height + 'px';

            // this.ctx.canvas.width = img.width;
            // this.ctx.canvas.height = img.height;
            // this.ctx.beginPath();
            // this.ctx.arc(100, 100, 150, 0, Math.PI * 2);
            // this.ctx.closePath();
            // this.ctx.fill()
            // this.ctx.drawImage(img, 0, 0);
            // this.hostDiv.appendChild(img)
        });

        const divRotate = document.createElement('div');
        divRotate.textContent = 'rotate';

        divRotate.onclick = () => {
            console.log('ro');

            const max = this.hostDiv.clientWidth > this.hostDiv.clientHeight ? this.hostDiv.clientWidth : this.hostDiv.clientHeight;

            const width = this.hostDiv.style.width;
            this.hostDiv.style.width = this.hostDiv.style.height
            this.hostDiv.style.height = width;

            this.canvas.width = this.hostDiv.clientWidth;
            this.canvas.height = this.hostDiv.clientHeight;

            this.rotation += Math.PI * 0.5;
        }

        

        this.hostDiv.appendChild(divRotate);


    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop
        this.ctx.save();
        this.ctx.translate(this.canvas.width * 0.5, this.canvas.height * 0.5)
        this.ctx.rotate(this.rotation)
        if(this.img) {
            this.ctx.drawImage(this.img, -this.img.width * 0.5, -this.img.height * 0.5);
        }


        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()

        console.log(ctx)

        this.ctx.restore();
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