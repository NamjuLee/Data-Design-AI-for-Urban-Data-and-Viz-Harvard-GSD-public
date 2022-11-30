
export class SCircle {
    x: number = 0;
    y: number = 0;
    r: number = 0;
    svgCore: SVGAElement;
    svg: SVGCircleElement;
    constructor(svgCore: SVGAElement, x: number, y: number, r: number = 5) {
        this.svgCore = svgCore;
        this.x = x;
        this.y = y;
        this.r = r;
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        this.svg.setAttributeNS(null, 'className', `circle`);
        this.svg.setAttributeNS(null, 'cx', `${x}`);
        this.svg.setAttributeNS(null, 'cy', `${y}`);
        this.svg.setAttributeNS(null, 'r', `${this.r}`);
        this.svg.setAttributeNS(null, 'fill', `#dddddd`);
        this.svg.animate([
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-3px)' },
            { transform: 'translateY(0px)' },
        ], {
            delay: Math.random() * 1000,
            duration: 1000,
            iterations: Infinity
        });
        this.svgCore.appendChild(this.svg);
        this.BindEvent();
    }
    public BindEvent() {
        this.svg.ontransitionstart = () => {
            console.log(this.svg);
            // circle.setAttributeNS(null, 'fill', `yellow`);
        };
        this.svg.ontransitionrun = () => {
            console.log(this.svg);
            // circle.setAttributeNS(null, 'fill', `yellow`);
        };
        this.svg.onmouseenter = () => {
            this.svg.animate([
                // keyframes
                { opacity: 1, fill: '#ff0000', r: this.r * 2, easing: 'ease-in' },
                { opacity: 0.5, fill: '#00ff', r: this.r * 3, easing: 'ease-out' },
                { opacity: 0, fill: '#0000ff', r: this.r * 1, easing: 'ease-out' }
            ], {
                duration: 1000,
                iterations: 1
            });
        };
        this.svg.onmouseleave = () => {
            this.svg.animate([
                // keyframes
                { opacity: 1, fill: '#ff0000', easing: 'ease-in' },
                { opacity: 0, fill: '#0000ff', easing: 'ease-out' }
            ], {
                direction: 'reverse',
                duration: 1000,
                iterations: 1
            });
        };
        this.svg.onmousedown = () => {
            this.svg.setAttributeNS(null, 'stroke', `blue`);
            this.svg.setAttributeNS(null, 'stroke-width', `${5}px`);
            console.log(this);
        };

    }
}