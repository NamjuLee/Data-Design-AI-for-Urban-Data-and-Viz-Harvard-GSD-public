import { RendererJSAPI } from '../../../lib'
import { getJSONFromURL } from 'njscore';

// https://en.wikipedia.org/wiki/Thematic_map
// https://en.wikipedia.org/wiki/Choropleth_map


export class Solution extends RendererJSAPI {

    colors: string[] = [];
    polygonsGeo: number [][] = [];
    polygonsScreenPath2D: Path2D [] = [];
    centersScreen: number[][] = [];

    constructor(view: any) {
        super(view);

        // disable interaction with a base map
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
        this.mView.on("drag", (event) => {
            event.stopPropagation();
        });
        this.mView.navigation.mouseWheelZoomEnabled = false;


        // reposition the center of the basemap
        this.center(-97.893669, 39.176304);
        this.zoom(4);


        const canvas = document.createElement('canvas');
        canvas.id = 'layer';
        canvas.width = this.mView.container.clientWidth;
        canvas.height = this.mView.container.clientHeight;
        canvas.style.background= 'rgba(0, 32, 0, 0.6)';
        canvas.style.position = 'absolute';
        canvas.style.pointerEvents = 'none';
        this.mView.container.appendChild(canvas);

        
        // https://eric.clst.org/tech/usgeojson/
        getJSONFromURL(process.env.PUBLIC_URL + '/static/data/gz_2010_us_050_00_20m.json').then((d) => {

            const features = d['features'];

            for(let i = 0 ; i < features.length; ++i) {
                const geometry = features[i]['geometry'];
                // console.log(geometry)
                
                if(geometry['type'] === 'Polygon') {
                    // console.log(geometry['coordinates'].length)

                    let x = geometry['coordinates'][0][0][0];
                    let y = geometry['coordinates'][0][0][1];
                    const polygon = [];
                    polygon.push(x, y);


                    for(let j = 1 ; j < geometry['coordinates'][0].length; ++j) {
                        x = geometry['coordinates'][0][j][0];
                        y = geometry['coordinates'][0][j][1];
                        polygon.push(x, y);
                    }

                    this.colors.push(`rgba(0, 255, 0, ${Math.random() * 0.2 + 0.3})`);
                    this.polygonsGeo.push(polygon);

                }
            }

            this.start();
        });
    }
    render(ctx: CanvasRenderingContext2D) {

        for (let i = 0; i < this.polygonsGeo.length; ++i) { 

            let x = this.polygonsGeo[i][0];
            let y = this.polygonsGeo[i][1];
            let projectedScreen = this.toScreen(x, y);
            ctx.beginPath();
            ctx.moveTo(projectedScreen[0], projectedScreen[1]);

            let polygonScreenPath = new Path2D();
            polygonScreenPath.moveTo(projectedScreen[0], projectedScreen[1]);

            let cx = projectedScreen[0];
            let cy = projectedScreen[1];

            let count = 1;

            for (let j = 2; j < this.polygonsGeo[i].length; j += 2) { 
                x = this.polygonsGeo[i][j];
                y = this.polygonsGeo[i][j+1];
                projectedScreen = this.toScreen(x, y);
                ctx.lineTo(projectedScreen[0], projectedScreen[1]);
                
                polygonScreenPath.lineTo(projectedScreen[0], projectedScreen[1]);

                cx += projectedScreen[0];
                cy += projectedScreen[1];

                count++;
            }
            ctx.closePath()
            ctx.fillStyle = this.colors[i];
            ctx.fill();

            
            renderPoint(ctx, cx / count, cy / count, 1, '#0fff0f');

            this.centersScreen.push([cx / count, cy / count, count]);

            polygonScreenPath.closePath();
            this.polygonsScreenPath2D.push(polygonScreenPath);

        }

        console.log('done!');
        this.isStatic = true;
    }
    public mouseMove(x: number, y: number) {
        this.ctx.lineWidth = 0;

        let closestPtID = -1;
        let maxDis = 100000;
        for(let i = 0; i < this.centersScreen.length; ++i) {
            const centroidScreen = this.centersScreen[i];
            // console.log(centroidScreen)
            const theDis = getDistance(x, y, centroidScreen[0], centroidScreen[1]);
            if (theDis < maxDis) {
                maxDis = theDis;
                closestPtID = i;
                
            }
        }

        console.log('id:', closestPtID);
        this.ctx.lineWidth = 0.2;
        if (closestPtID !== -1 && closestPtID <= this.polygonsScreenPath2D.length) {
            
            const polygonScreen = this.polygonsScreenPath2D[closestPtID];
            this.ctx.strokeStyle = '#0f0';
            this.ctx.stroke(polygonScreen);
        }
    }
}

const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, s: number, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

const getDistance = (x0: number, y0: number, x1:number, y1:number): number => {
    return Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
}