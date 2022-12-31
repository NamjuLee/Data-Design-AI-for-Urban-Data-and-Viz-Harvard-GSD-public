export class Solution {
    constructor(view: any) {
        console.log("Let's learn Typescript for digital mapping and visualization!!");
        console.log("Typescript, Pixel data Structure");
        console.log("=================================");

        // a cube, 2 by 2
        const minVector = [-1, -1, 0]
        const maxVector = [1, 1, 2]

        const xNum = 12;
        const yNum = 12;

        const xInterval = (maxVector[0] - minVector[0]) / (xNum - 1);
        const yInterval = (maxVector[1] - minVector[1]) / (yNum - 1);

        console.log('xInterval', xInterval, 'yInterval', yInterval)

        // 2D data array
        const yList: Pixel[][] = []
        for (let y = 0; y < yNum; ++y) {
            const theY = minVector[1] + y * yInterval;

            const xList: Pixel[] = []
            for (let x = 0; x < xNum; ++x) {
                const theX = minVector[0] + x * xInterval;
                xList.push(new Pixel(theX, theY, 0));
            }
            yList.push(xList);
        }
        console.log(yList)
    }
    public destroy() {

    }
}
class Pixel {
    public x;
    public y;
    public z;
    public color: any;
    public data: any;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}