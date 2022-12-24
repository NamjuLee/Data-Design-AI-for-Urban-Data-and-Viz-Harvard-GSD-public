import * as THREE from 'three';
import { RendererThree, RGBtoGray } from '../../lib';


export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)
        const scene = this.scene;
        this.camera.position.set(0, 80, 80);

        let path;
        path = 'https://upload.wikimedia.org/wikipedia/commons/5/57/Heightmap.png';
        // path = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Srtm_ramp2.world.21600x10800.jpg';
        // path = 'https://raw.githubusercontent.com/NamjuLee/data/master/img/heightMap/Heightmap_01.png';
        // path = 'https://raw.githubusercontent.com/NamjuLee/data/master/img/heightMap/Heightmap_02.jpg';
        // path = 'https://raw.githubusercontent.com/NamjuLee/data/master/img/heightMap/Heightmap_03.jpg';

        const img = new Image();
        img.src = path;
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            buildMeshByImg(img);
        }


        const buildMeshByImg = (img) => {
            // ................................................................................
            // your code goes here
            const xNum = 50;
            const yNum = 50;

            const width = img.width;
            const height = img.height;
            const zScale = 5.5;

            const xInterval = width / (xNum - 1.0);
            const yInterval = height / (yNum - 1.0);

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            this.hostDiv.append(canvas);
            const ctx = canvas.getContext('2d', { willReadFrequently: true });

            ctx.drawImage(img, 0, 0);

            const vertices = [];
            for (let y = 0; y < yNum; ++y) {
                for (let x = 0; x < xNum; ++x) {
                    let col = ctx.getImageData(x * xInterval, y * yInterval, 1, 1).data;
                    let zVal = RGBtoGray(col[0] / 255, col[1] / 255, col[2] / 255);
                    let z = -zVal * zScale;
                    vertices.push(x - (xNum * 0.5), y - (yNum * 0.5), z);
                }
            }

            const faces = [];
            for (let y = 0; y < yNum - 1; ++y) {
                for (let x = 0; x < xNum - 1; ++x) {
                    let index = x + (y * xNum);
                    faces.push(index, index + xNum, index + 1,);
                    faces.push(index + 1, index + xNum, index + xNum + 1,);
                }
            }

            const material = new THREE.MeshNormalMaterial({
                // side: THREE.DoubleSide,
                vertexColors: true,
                flatShading: true,
            });
            const geometry = new THREE.BufferGeometry();
            geometry.setIndex(faces);
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            geometry.computeVertexNormals();
            geometry.computeBoundingBox();

            const mesh = new THREE.Mesh(geometry, material);
            mesh.rotateX(Math.PI * 0.5);
            scene.add(mesh);

            this.start();
        }
    }

}
