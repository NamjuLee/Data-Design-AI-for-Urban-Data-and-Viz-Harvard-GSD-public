export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const url = 'https://codepen.io/collection/XjYakm?cursor=eyJjb2xsZWN0aW9uX2lkIjoiWGpZYWttIiwiY29sbGVjdGlvbl90b2tlbiI6bnVsbCwibGltaXQiOjQsIm1heF9pdGVtcyI6MTAsIm9mZnNldCI6MCwicGFnZSI6MSwic29ydF9ieSI6InBvc2l0aW9uIiwic29ydF9vcmRlciI6IkFzYyJ9';
        window.open(url, '_blank');
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}

