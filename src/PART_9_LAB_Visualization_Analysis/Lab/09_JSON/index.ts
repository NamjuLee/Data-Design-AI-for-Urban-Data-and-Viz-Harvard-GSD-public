import { RendererJSAPI } from '../../../lib'
import { getJSONFromURL } from 'njscore';

export class Solution extends RendererJSAPI {

    locations: number[][] = [];
    colors: string[] = [];
    names: string[] = [];

    constructor(view: any) {
        super(view);
        // TODO
        // You code goes here for one time operation

        const colorsTempate = {
            'blue' : "#0683d2",
            'red' : "#ec2f3d",
            'orange' : "#ff961e",
            'green' : "#049564",
            'silver' : "#959597",
        }

        
        getJSONFromURL(process.env.PUBLIC_URL + '/static/data/MBTA_stop.geojson').then((d) => {
            let lonSum = 0;
            let latSum = 0;
            let count = 0;

            for (let i = 0 ; i < d['features'].length; ++i) {
                const loc = d['features'][i]['geometry']['coordinates'];

                this.locations.push(loc);
                lonSum += loc[0];
                latSum += loc[1];
                count++;

                this.names.push(d['features'][i]['properties']['name']);

                const line: string[] = d['features'][i]['properties']['lines'];

                if (line.includes('blue')) {
                    this.colors.push(colorsTempate['blue']);
                } else if (line.includes('red')) {
                    this.colors.push(colorsTempate['red']); continue;
                } else if (line.includes('orange')) {
                    this.colors.push(colorsTempate['orange']); continue;
                } else if (line.includes('green')) {
                    this.colors.push(colorsTempate['green']); continue;
                } else {
                    this.colors.push(colorsTempate['silver']);
                }

            }
            this.center(lonSum / count, latSum / count);

            this.start();
        });
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop

        for (let i = 0; i < this.locations.length; ++i) { 
            const projected = this.toScreen(this.locations[i][0], this.locations[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time, this.colors[i]);
            renderText(ctx, projected[0], projected[1], this.names[i], this.colors[i]);
        }

        // // !! can stop render after this frame.
        // this.isStatic = true;
    }
}
const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, t: number, color: string) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    ctx.arc(x, y, (Math.sin(t * 0.8) + 4) * 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
};
const renderText = (ctx: CanvasRenderingContext2D, x: number, y: number, name: string, color: string) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;
    ctx.strokeText(name, x + 13, y);
};


