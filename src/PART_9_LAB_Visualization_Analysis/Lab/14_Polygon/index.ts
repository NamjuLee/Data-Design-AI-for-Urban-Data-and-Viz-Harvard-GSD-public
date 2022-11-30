import { RendererJSAPI } from '../../../lib'
import { getJSONFromURL } from 'njscore';

// https://en.wikipedia.org/wiki/Thematic_map
// https://en.wikipedia.org/wiki/Choropleth_map


export class Solution extends RendererJSAPI {

    polygons: number [][] = [];
    colors: string[] = [];
    centers: [][] = [];

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
                
                if(geometry['type'] === 'Polygon'){
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
                    this.polygons.push(polygon);

                }
            }

            this.start();
        });
    }
    render(ctx: CanvasRenderingContext2D) {

        for (let i = 0; i < this.polygons.length; ++i) { 

            let x = this.polygons[i][0];
            let y = this.polygons[i][1];
            let projected = this.toScreen(x, y);

            ctx.beginPath();
            ctx.moveTo(projected[0], projected[1]);

            for (let j = 2; j < this.polygons[i].length; j += 2) { 
                x = this.polygons[i][j];
                y = this.polygons[i][j+1];
                projected = this.toScreen(x, y);
            
                ctx.lineTo(projected[0], projected[1]);
            }

            ctx.closePath()
            ctx.fillStyle = this.colors[i];

            ctx.fill();

        }
        console.log('done!');
        this.isStatic = true;
    }
    public mouseMove(x: number, y: number) {
        console.log('inspecting', x,y);
        console.log(this.ctx.isPointInPath(x, y))

    }
}
