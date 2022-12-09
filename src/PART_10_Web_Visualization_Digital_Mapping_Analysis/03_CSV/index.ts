import { RendererJSAPI } from '../../lib'
import { getCSVFromURL } from 'njscore';

export class Solution extends RendererJSAPI {
    pts: number[][] = [];
    constructor(view: any) {
        super(view);
        // TODO
        // You code goes here for one time operation

        (this.mView.map.basemap as any) = 'streets';

        // https://data.boston.gov/dataset/blue-bike-stations
        getCSVFromURL(process.env.PUBLIC_URL + '/static/data/Blue_Bike_Stations.csv').then((d) => {
            let count = 0;
            let latSum = 0;
            let lonSum = 0;
            const line = d.split(/\r\n|\r|\n/g);
            for (let i = 1; i < line.length; ++i) {
                const values = line[i].split(',');
                const lon = +values[5];
                const lat = +values[4];
                if (!isNaN(lon) && !isNaN(lat)) {
                    console.log(lon, lat);
                    
                    this.pts.push([lon, lat]);
                    count++;
                    latSum += lat;
                    lonSum += lon;
                }
            }
            // console.log(count)
            this.center(lonSum / count, latSum / count);
            this.zoom(11);
            this.start();
        });

    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop

        for (let i = 0; i < this.pts.length; ++i) { 
            const projected = this.toScreen(this.pts[i][0], this.pts[i][1]); 
            renderPoint(ctx, projected[0], projected[1], this.time + 3, 'rgba(10, 8, 255, 0.85)' );
        }

        // !! can stop render after this frame.
        // this.isStatic = true;
    }
}
const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, t: number, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, (Math.sin(t * 0.8) + 4) * 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
};
