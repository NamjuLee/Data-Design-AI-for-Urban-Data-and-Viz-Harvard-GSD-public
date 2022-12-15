export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        
        const url = 'https://computationaldesign.tistory.com/53'
        const iframe = document.createElement('iframe');
        iframe.src = url;
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

