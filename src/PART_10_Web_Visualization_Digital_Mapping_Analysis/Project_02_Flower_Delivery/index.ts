import { RendererJSAPI } from '../../lib';
import { getCSVFromURL } from 'njscore';

export class Solution extends RendererJSAPI {

    pts: number[][] = [];
    constructor(view: any) {
        super(view);

        // console.log(window.location)
        // console.log(process.env.PUBLIC_URL)

        console.log(process.env.PUBLIC_URL + '/static/data/EN_flower_dataset_clean.csv');
        getCSVFromURL(process.env.PUBLIC_URL + '/static/data/EN_flower_dataset_clean.csv').then((d) => {
            let count = 0;
            let latSum = 0;
            
            let lonSum = 0;

            const line = d.split(/\r\n|\r|\n/g);
            for (let i = 1; i < line.length; ++i) {
                const values = line[i].split(',');
                const lon = +values[4];
                const lat = +values[5];
                if (lon !== 0 || lat !== 0) {
                    
                    this.pts.push([lon, lat]);
                    lonSum += lon;
                    latSum += lat;

                    count++;
                }
            }

            this.center(lonSum / count, latSum / count);
            this.zoom(11);
        });

        this.start();
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.globalCompositeOperation = 'screen' ; //'lighten';

        for (let i = 0; i < this.pts.length; ++i) { 
            const projected = this.toScreen(this.pts[i][0], this.pts[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time + 3, 'rgba(255, 0, 0, 0.85)' );
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
        console.log(x,y)
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
