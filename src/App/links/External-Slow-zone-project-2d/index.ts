export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const iframe = document.createElement('iframe');
        iframe.src = 'https://namjulee.github.io/njs-lab-public/lab/project-slow-zone/project-slow-zone-jsapi?ui=0';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.background = '#fff';
        iframe.style.border = 'none';
        div.appendChild(iframe);
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}
