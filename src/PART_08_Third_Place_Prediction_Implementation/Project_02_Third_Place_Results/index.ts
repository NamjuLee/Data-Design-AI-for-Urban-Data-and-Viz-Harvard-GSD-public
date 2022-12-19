import { RendererJSAPI } from '../../lib'
import { getCSVFromURL } from 'njscore';

export class Solution extends RendererJSAPI {

    boston_scale_a: string[] = [];
    boston_scale_b: string[] = [];

    redlands_scale_a: string[] = [];
    redlands_scale_b: string[] = [];

    la_scale_a: string[] = [];
    la_scale_b: string[] = [];

    bostonSliderA: HTMLInputElement;
    laSliderA: HTMLInputElement;
    redlandSliderA: HTMLInputElement;
    
    bostonSliderB: HTMLInputElement;
    laSliderB: HTMLInputElement;
    redlandSliderB: HTMLInputElement;

    constructor(view: any) {
        super(view);

        this.center(-71.08760751966068, 42.310376551150675)
        this.zoom(13)

        getCSVFromURL(process.env.PUBLIC_URL + '/static/dataThirdPlace/from_boston_scale_a.csv').then((d) => {
            this.boston_scale_a = d.split(/\r\n|\r|\n/g);
        });
        getCSVFromURL(process.env.PUBLIC_URL + '/static/dataThirdPlace/from_los_angeles_scale_a.csv').then((d) => {
            this.la_scale_a = d.split(/\r\n|\r|\n/g);
        });
        getCSVFromURL(process.env.PUBLIC_URL + '/static/dataThirdPlace/from_redlands_scale_a.csv').then((d) => {
            this.redlands_scale_a = d.split(/\r\n|\r|\n/g);
        });

        getCSVFromURL(process.env.PUBLIC_URL + '/static/dataThirdPlace/from_boston_scale_b.csv').then((d) => {
            this.boston_scale_b = d.split(/\r\n|\r|\n/g);
        });
        getCSVFromURL(process.env.PUBLIC_URL + '/static/dataThirdPlace/from_los_angeles_scale_b.csv').then((d) => {
            this.la_scale_b = d.split(/\r\n|\r|\n/g);
        });
        getCSVFromURL(process.env.PUBLIC_URL + '/static/dataThirdPlace/from_redlands_scale_b.csv').then((d) => {
            this.redlands_scale_b = d.split(/\r\n|\r|\n/g);
        });

        this.initUI();
        this.start();
    }
    initUI() {
        const controller = document.createElement('div');
        controller.style.position = 'absolute';
        controller.style.margin = '10px';
        this.hostDiv.append(controller);

        // ..................................... scale a
        let slider = getSlider('Boston');
        slider.slider.defaultValue = '100';
        slider.div.style.marginTop = '25px';
        slider.text.textContent = 'Boston Scale A'
        this.bostonSliderA = slider.slider;
        controller.append(slider.div);

        slider = getSlider('LA');
        slider.div.style.marginTop = '25px';
        slider.slider.defaultValue = '0';
        slider.text.textContent = 'LA Scale A'
        this.laSliderA = slider.slider;
        controller.append(slider.div);

        slider = getSlider('Redland');
        slider.div.style.marginTop = '25px';
        slider.slider.defaultValue = '0';
        slider.text.textContent = 'Redland Scale A'
        this.redlandSliderA = slider.slider;
        controller.append(slider.div);

        // ..................................... scale b
        slider = getSlider('Boston');
        slider.slider.defaultValue = '0';
        slider.div.style.marginTop = '25px';
        slider.text.textContent = 'Boston Scale A'
        this.bostonSliderB = slider.slider;
        controller.append(slider.div);

        slider = getSlider('LA');
        slider.div.style.marginTop = '25px';
        slider.slider.defaultValue = '0';
        slider.text.textContent = 'LA Scale A'
        this.laSliderB = slider.slider;
        controller.append(slider.div);

        slider = getSlider('Redland');
        slider.div.style.marginTop = '25px';
        slider.slider.defaultValue = '0';
        slider.text.textContent = 'Redland Scale A'
        this.redlandSliderB = slider.slider;
        controller.append(slider.div);

        let div = document.createElement('div');
        div.textContent = 'Food'
        div.style.width = '130px';
        div.style.height = '30px';
        div.style.background = '#f00';
        div.style.paddingLeft = '6px';
        div.style.color = '#fff'
        div.style.fontWeight = 'bold';
        controller.append(div);

        div = document.createElement('div');
        div.textContent = 'Transportation'
        div.style.width = '130px';
        div.style.height = '30px';
        div.style.paddingLeft = '6px';
        div.style.background = '#0f0';
        div.style.color = '#fff'
        div.style.fontWeight = 'bold';
        controller.append(div);

        div = document.createElement('div');
        div.textContent = 'Utility'
        div.style.width = '130px';
        div.style.height = '30px';
        div.style.paddingLeft = '6px';
        div.style.background = '#00f';
        div.style.color = '#fff'
        div.style.fontWeight = 'bold';
        controller.append(div);
    }
    render(ctx: CanvasRenderingContext2D) {

        if (+this.bostonSliderA.value > 5) {
            renderPoint(ctx, this.boston_scale_a, this.toScreen, +this.bostonSliderA.value * 0.01, this.time);
        }
        if (+this.laSliderA.value > 5) {
            renderPoint(ctx, this.la_scale_a, this.toScreen, +this.laSliderA.value * 0.01, this.time);
        }
        if (+this.redlandSliderA.value > 5) {
            renderPoint(ctx, this.redlands_scale_a, this.toScreen, +this.redlandSliderA.value * 0.01, this.time);
        }


        if (+this.bostonSliderB.value > 5) {
            renderPoint(ctx, this.boston_scale_b, this.toScreen, +this.bostonSliderB.value * 0.01, this.time);
        }
        if (+this.laSliderB.value > 5) {
            renderPoint(ctx, this.la_scale_b, this.toScreen, +this.laSliderB.value * 0.01, this.time);
        }
        if (+this.redlandSliderB.value > 5) {
            renderPoint(ctx, this.redlands_scale_b, this.toScreen, +this.redlandSliderB.value * 0.01, this.time);
        }

        const startX = 400;
        const startY = 100;
        const width = 50;
        const height = 50;
        
        for(let y = 0 ; y < 15; ++y) {
            for(let x = 0 ; x < 15; ++x) {
                ctx.beginPath();
                ctx.rect(startX + x * width, startY + y * height, width, height)
                ctx.closePath();
                ctx.fillStyle = '#f00';
                // ctx.fill();
                ctx.stroke();
            }
        }

    }
    keyDown(k: KeyboardEvent): void {
        // console.log('key pressed', k);
    }
    mouseDown(x: number, y: number): void {
        // console.log('mouse down')
    }
    mouseUp(x: number, y: number): void {
        // console.log('mouse up')
        console.log(this.toMap(x, y))
    }
    mouseClick(x: number, y: number): void {
        const mapProjected = this.toMap(x, y);

    }
    mouseMove(x: number, y: number) {

    }
}

const renderPoint = (ctx: CanvasRenderingContext2D, data: string[], projection: (lon: number, lat: number) => number[], opacity: number, t: number) => {
    data.forEach((d) => {
        const line = d.split(',')
        const projected = projection(+line[1], +line[0]);
        // console.log(+line[1], +line[0])
        ctx.fillStyle = `rgba(${+line[2] * 255}, ${+line[3] * 255}, ${+line[4] * 255}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(projected[0], projected[1], (Math.sin(t * 0.8) + 4) * 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    });

}
const getSlider = (title: string, min: string = '0.0', max: string = '100') => {
    // <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    const div = document.createElement('div');
    div.style.display = 'flex';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;

    const text = document.createElement('div');
    text.textContent = title;
    text.style.color = '#aaa';
    div.appendChild(slider);
    div.appendChild(text);

    return {
        div, slider, text
    }
};