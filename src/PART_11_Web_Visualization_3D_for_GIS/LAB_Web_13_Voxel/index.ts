import * as THREE from 'three';
import { RendererThree, getCSVFromURL } from '../../lib';


export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)
        const scene = this.scene;
        this.camera.position.set(0, 9, 9);

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.55);
        this.scene.add(ambientLight);

        this.pointLight = new THREE.PointLight(0xffffff, 0.75);
        this.pointLight.position.x = 10;
        this.scene.add(this.pointLight);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.55);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 50, 0);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.color.setHSL(1, 1, 1);
        dirLight.position.set(- 1, 1.75, 1);
        dirLight.position.multiplyScalar(30);
        dirLight.castShadow = true;

        const val = 1; // for quality of the shadow in the scene
        dirLight.shadow.camera.left = - val;
        dirLight.shadow.camera.right = val;
        dirLight.shadow.camera.top = val;
        dirLight.shadow.camera.bottom = - val;

        dirLight.shadow.camera.far = 100;
        dirLight.shadow.bias = - 0.00001;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        scene.add(dirLight);


        const distance = (x, y, z, xx, yy, zz) => {
            return Math.sqrt((xx - x) * (xx - x) + (yy - y) * (yy - y) + (zz - z) * (zz - z));
        }
        // ................................................................................
        // your code goes here
        // https://en.wikipedia.org/wiki/Wavefront_.obj_file
        const URL_OBJ = 'https://raw.githubusercontent.com/McNopper/OpenGL/master/Binaries/bunny.obj';
        const geometryObj = {
            boundingBox: [],
            vertex: []
        }

        getCSVFromURL(URL_OBJ).then((obj) => {
            const data = obj.split('\n');

            geometryObj.boundingBox = [
                [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE],
                [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE]
            ]

            for (let i = 0; i < data.length; ++i) {
                const ln = data[i].split(' ');
                if (ln[0] === 'v') {
                    // console.log(ln)
                    geometryObj.vertex.push([+ln[1], +ln[2], +ln[3], 0]); // the last value used for checking isVisiting or not.

                    // get min and max vector from the individual vertex by this loop
                    geometryObj.boundingBox[0][0] = geometryObj.boundingBox[0][0] > +ln[1] ? +ln[1] : geometryObj.boundingBox[0][0];
                    geometryObj.boundingBox[0][1] = geometryObj.boundingBox[0][1] > +ln[2] ? +ln[2] : geometryObj.boundingBox[0][1];
                    geometryObj.boundingBox[0][2] = geometryObj.boundingBox[0][2] > +ln[3] ? +ln[3] : geometryObj.boundingBox[0][2];

                    geometryObj.boundingBox[1][0] = geometryObj.boundingBox[1][0] < +ln[1] ? +ln[1] : geometryObj.boundingBox[1][0];
                    geometryObj.boundingBox[1][1] = geometryObj.boundingBox[1][1] < +ln[2] ? +ln[2] : geometryObj.boundingBox[1][1];
                    geometryObj.boundingBox[1][2] = geometryObj.boundingBox[1][2] < +ln[3] ? +ln[3] : geometryObj.boundingBox[1][2];
                }
            }
            voxelization(geometryObj);
        });

        const voxelization = (obj) => {
            const theDis = .07;

            const xNum = 15;
            const yNum = 15;
            const zNum = 15;

            const xInterval = (obj.boundingBox[1][0] - obj.boundingBox[0][0]) / (xNum - 1);
            const yInterval = (obj.boundingBox[1][1] - obj.boundingBox[0][1]) / (yNum - 1);
            const zInterval = (obj.boundingBox[1][2] - obj.boundingBox[0][2]) / (zNum - 1);
            console.log('xInterval', xInterval, 'yInterval', yInterval, 'zInterval', zInterval)

            const listVoxel = [];

            for (let z = 0; z < zNum; ++z) {
                const theZ = obj.boundingBox[0][2] + z * zInterval;
                for (let y = 0; y < yNum; ++y) {
                    const theY = obj.boundingBox[0][1] + y * yInterval;
                    for (let x = 0; x < xNum; ++x) {
                        const theX = obj.boundingBox[0][0] + x * xInterval;

                        let needLoop = true;
                        for (let i = 0; i < obj.vertex.length; i += 1) {
                            const v = obj.vertex[i];

                            if (v[3] === 0) {
                                const d = distance(theX, theY, theZ, v[0], v[1], v[2]);
                                if (d < theDis) {
                                    obj.vertex[i][3] = 1;
                                    listVoxel.push([theX, theY, theZ]);
                                    needLoop = false;
                                    break;
                                }
                            }
                            if (!needLoop) {
                                break;
                            }
                        }
                    }
                }
            }

            // console.log(listVoxel)
            // console.log('done!!');

            for (let i = 0; i < listVoxel.length; ++i) {
                // console.log(i);
                let geometryBox = new THREE.BoxGeometry(xInterval, yInterval, zInterval);
                // geometryBox.computeBoundingSphere();
                // geometryBox.computeVertexNormals();
                geometryBox.computeVertexNormals();
                geometryBox.computeBoundingBox();

                let materialBox = new THREE.MeshStandardMaterial({ color: 0x967bb6 });
                let meshCube = new THREE.Mesh(geometryBox, materialBox);

                meshCube.position.x = listVoxel[i][0];
                meshCube.position.y = listVoxel[i][1];
                meshCube.position.z = listVoxel[i][2];
                meshCube.castShadow = true;
                meshCube.receiveShadow = true;
                scene.add(meshCube);

            }

            this.start();
        }
    }
    public update(scene: THREE.Scene) {
        var matrix = new THREE.Matrix4();
        matrix.makeRotationY(Math.PI * 0.011);
        this.pointLight.position.applyMatrix4(matrix);
    }
}
