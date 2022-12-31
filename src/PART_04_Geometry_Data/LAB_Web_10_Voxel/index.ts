export class Solution {
    constructor(view: any) {
        console.log("Let's learn Typescript for digital mapping and visualization!!");
        console.log("Typescript, Voxel data Structure");
        console.log("=================================");
        // Codepan

        // a cube, 2 by 2
        const minVector = [-1, -1, 0]
        const maxVector = [1, 1, 2]

        const xNum = 12;
        const yNum = 12;
        const zNum = 12;

        const xInterval = (maxVector[0] - minVector[0]) / (xNum - 1);
        const yInterval = (maxVector[1] - minVector[1]) / (yNum - 1);
        const zInterval = (maxVector[2] - minVector[2]) / (zNum - 1);
        console.log('xInterval', xInterval, 'yInterval', yInterval, 'zInterval', zInterval)

        // 3D data array
        const listVoxel: Pixel[][][] = [];
        for (let z = 0; z < zNum; ++z) {
            const theZ = minVector[2] + z * zInterval;
            const yList: Pixel[][] = []
            for (let y = 0; y < yNum; ++y) {
                const theY = minVector[1] + y * yInterval;

                const xList: Pixel[] = []
                for (let x = 0; x < xNum; ++x) {
                    const theX = minVector[0] + x * xInterval;
                    xList.push( new Pixel(theX, theY, theZ));
                }
                yList.push(xList);
            }
            listVoxel.push(yList);
        }

        console.log(listVoxel)

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