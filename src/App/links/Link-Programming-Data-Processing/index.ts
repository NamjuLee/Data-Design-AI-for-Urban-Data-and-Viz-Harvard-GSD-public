export class Solution {
    hostDiv;
    constructor(div: HTMLElement) {
        this.hostDiv = div;
        const url = 'https://github.com/NamjuLee/Data-Design-AI-for-Urban-Data-and-Viz-Harvard-GSD-public/tree/main/src/PART_02_Programming_Data_Processing'
        window.open(url, '_blank');
    }
    public destroy() {
        while (this.hostDiv.lastElementChild) {
            this.hostDiv.removeChild(this.hostDiv.lastElementChild);
        }
    }
}

