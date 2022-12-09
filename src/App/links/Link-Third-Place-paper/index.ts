import { RendererCanvas } from '../../../lib';

export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const url = 'https://link.springer.com/chapter/10.1007/978-981-33-4400-6_11'
        window.open(url, '_blank');
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}

