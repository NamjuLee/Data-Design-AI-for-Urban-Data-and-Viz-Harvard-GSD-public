
export class SRectangle {
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    svgCore: SVGAElement;
    svg: SVGRectElement;
    constructor(svgCore: SVGAElement, x: number, y: number, width: number = 10, height: number = 10) {
        this.svgCore = svgCore;
        this.x = x;
        this.y = y;
        this.width = width * 2;
        this.height = height;

        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.svg.setAttributeNS(null, 'fill', '#ffff00');
        this.svg.setAttributeNS(null, 'x', `${this.x}`);
        this.svg.setAttributeNS(null, 'y', `${this.y}`);
        this.svg.setAttributeNS(null, 'width', `${this.width}`);
        this.svg.setAttributeNS(null, 'height', `${this.height}`);

        this.svgCore.appendChild(this.svg);
        this.BindEvent();
    }
    public BindEvent() {
        this.svg.onmouseenter = () => {
            this.svg.animate(
                [
                    { width: `${this.width}px`, fill: '#0ff000', opacity: 1, },
                    { width: `${this.width * 0.5}px`, fill: '#00ff0', opacity: 1, },
                    { width: `${this.width * 0.1}px`, fill: '#000fff', opacity: 0.1, }
                ],
                {
                    // timing options
                    // direction: 'reverse',
                    duration: 1000,
                    easing: 'ease-out', // 'ease-out'
                    // endDelay: 100000,
                    iterations: 1 // Infinity

                });

        };
        this.svg.onmouseleave = () => {
            this.svg.animate(
                [
                    { width: `${this.width}px`, fill: '#0ff000', opacity: 1, },
                    { width: `${this.width * 0.5}px`, fill: '#00ff0', opacity: 1, },
                    { width: `${this.width * 0.1}px`, fill: '#000fff', opacity: 0.1, }
                ],
                {
                    // timing options
                    direction: 'reverse',
                    duration: 1000,
                    easing: 'ease-in', // 'ease-out'
                    // endDelay: 100000,
                    iterations: 1 // Infinity

                });

        };
    }
}