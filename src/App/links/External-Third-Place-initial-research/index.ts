import { RendererCanvas } from '../../../lib';

export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const iframe = document.createElement('iframe');
        iframe.src = 'http://www.njstudio.co.kr/main/project/2016_MobilityEnergyConsumptionMITMediaLab/index.html';
        iframe.width = '100%'
        iframe.height = '100%'
        iframe.style.background = '#fff';
        div.appendChild(iframe);
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}

