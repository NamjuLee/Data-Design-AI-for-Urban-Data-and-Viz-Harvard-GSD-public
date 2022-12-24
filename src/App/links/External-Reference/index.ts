export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const url = 'https://namjulee.github.io/njs-lab-public/lecture-workshop?ui=0';
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border ='none';
        iframe.style.background = '#fff';
        div.appendChild(iframe);
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}