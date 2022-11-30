import { RendererJSAPI } from '../../../lib'
import { getFalseColor, getJSONFromURL } from 'njscore';

export class Solution extends RendererJSAPI {

    pts: number[][] = [];

    ptsUni: number[][] = [];
    ptsBook: number[][] = [];
    ptsLib: number[][] = [];

    colorArray: number[][] = [];

    constructor(view: any) {
        super(view);

        getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Boston/thrid-place/ThridPlaceBoston.json').then((d) => {
            for (let i = 0 ; i < d['dataset'].length; ++i) {
                console.log(d['dataset'][i]['id'])
                if (d['dataset'][i]['id'] === 'university') {
                  d['dataset'][i].data.forEach( (pos: any) => {
                        this.ptsUni.push([pos['lon'], pos['lat']]);
                  });
                } else if (d['dataset'][i]['id'] === 'book_store') {
                    d['dataset'][i].data.forEach( (pos: any) => {
                          this.ptsBook.push([pos['lon'], pos['lat']]);
                    });
                } else if (d['dataset'][i]['id'] === 'library') {
                    d['dataset'][i].data.forEach( (pos: any) => {
                          this.ptsLib.push([pos['lon'], pos['lat']]);
                    });
                } 

            }
        });
        
        this.colorArray = [];
        for (let i = 0 ; i < 255; ++i) {
            const result = getFalseColor(i / 255);
            this.colorArray.push(result);
        }
        console.log(this.colorArray.length);

        this.start();
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.globalCompositeOperation = 'screen' ; //'lighten';
        for (let i = 0; i < this.ptsUni.length; ++i) { 
            const projected = this.toScreen(this.ptsUni[i][0], this.ptsUni[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time, 'rgba(0, 255, 0, 0.6)' );
        }
        for (let i = 0; i < this.ptsBook.length; ++i) { 
            const projected = this.toScreen(this.ptsBook[i][0], this.ptsBook[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time + 1, 'rgba(0, 0, 255, 0.6)' );
        }
        for (let i = 0; i < this.ptsLib.length; ++i) { 
            const projected = this.toScreen(this.ptsLib[i][0], this.ptsLib[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time + 2, 'rgba(255, 0, 0, 0.6)' );
        }
        for (let i = 0; i < this.pts.length; ++i) { 
            const projected = this.toScreen(this.pts[i][0], this.pts[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time + 3, 'rgba(255, 255, 255, 0.6)' );
        }


        const xOff = 100;
        const yOff = ctx.canvas.height - 100;
        const w = 2;
        const h = 20;
        for (let i = 0 ; i < this.colorArray.length; ++i) {
            ctx.beginPath();
            ctx.rect(i * w + xOff, yOff, w, h)
            ctx.closePath();
            ctx.fillStyle = `rgba(${this.colorArray[i][0]}, ${this.colorArray[i][1]}, ${this.colorArray[i][2]}, 1)`;
            ctx.fill();
        }
    }
    keyDown(k: KeyboardEvent): void {
        console.log('key pressed', k);
    }
    mouseDown(x: number, y: number): void {
        console.log('mouse down')
    }
    mouseUp(x: number, y: number): void {
        console.log('mouse up')
    }
    mouseClick(x: number, y: number): void {
        const mapProjected = this.toMap(x, y);
        this.pts.push(mapProjected);
    }
    mouseMove(x: number, y: number) {

    }
}

const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, t: number, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, (Math.sin(t * 0.8) + 4) * 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}
