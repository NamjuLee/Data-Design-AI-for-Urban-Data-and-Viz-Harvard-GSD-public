import { RendererJSAPI } from '../../lib'
import { getJSONFromURL, getColorByCelsius } from 'njscore';

export class Solution extends RendererJSAPI {

    data: any = [];
    
    // https://openweathermap.org/api
    API_KEY = process.env.REACT_APP_OPEN_WATHER_MAP_API_KEY; // <== you need to overwrite your API KEY !!!

    
    colorsLegend: number[][] = [];
    
    constructor(view: any) {
        super(view);
        console.log('your key is ',process.env.REACT_APP_OPEN_WATHER_MAP_API_KEY);
        // TODO
        // You code goes here for one time operation

        this.zoom(2);
        this.center(127.024612, 37.532600)

        const min = -45
        const max = 45
    
        for (let i = min; i < max; ++i ) {
            this.colorsLegend.push(getColorByCelsius(i))
        }

        // https://openweathermap.org/api
        const CityName = "Seoul";
        const query = `http://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${this.API_KEY}&units=metric`;

        getJSONFromURL(query).then((d) => {
            console.log(d)
            this.data.push(d)
        });

        // !! you should execute it for rendering
        this.start();
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop

        for (let i = 0 ; i < this.data.length; ++i ) {
            const place = this.data[i];

            const screenPos = this.toScreen(place['coord']['lon'], place['coord']['lat']);

            const temp = place['main']['temp'];
            const tempColor = getColorByCelsius(temp);
            const tempColorString = `rgb(${tempColor[0]}, ${tempColor[1]}, ${tempColor[2]})`;

            renderPoint(ctx, screenPos[0], screenPos[1], this.time, tempColorString);
            renderText(ctx, screenPos[0] + 15, screenPos[1],temp, '#fff');
        }

        renderColorLegend(ctx, this.colorsLegend);

        // !! can stop render after this frame.
        // this.isStatic = true;
    }
    public mouseClick(x: number, y: number): void {
        const mapPos = this.toMap(x, y);

        // https://openweathermap.org/current
        const query = `https://api.openweathermap.org/data/2.5/weather?lat=${mapPos[1]}&lon=${mapPos[0]}&appid=${this.API_KEY}&units=metric`
        getJSONFromURL(query).then((d) => {
            console.log(d)
            this.data.push(d)
        });
    }
}

const renderPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, t: number, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, (Math.sin(t * 0.8) + 4) * 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
};
const renderText = (ctx: CanvasRenderingContext2D, x: number, y: number, name: string, color: string) => {
    ctx.strokeStyle = color;
    ctx.font = '15px Arial';
    ctx.strokeText(name, x, y);
};
const renderColorLegend = (ctx: CanvasRenderingContext2D, colorArray: number[][]) => {
    // https://www.esri.com/arcgis-blog/products/arcgis-pro/mapping/a-meaningful-temperature-palette/
    const xOff = 100;
    const yOff = ctx.canvas.height - 100;
    const w = 5;
    const h = 20;
    for (let i = 0 ; i < colorArray.length; ++i) {
        ctx.beginPath();
        ctx.rect(i * w + xOff, yOff, w, h)
        ctx.closePath();
        ctx.fillStyle = `rgba(${colorArray[i][0]}, ${colorArray[i][1]}, ${colorArray[i][2]}, 1)`;
        ctx.fill();
    }

};