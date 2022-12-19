import * as THREE from 'three';
import { RendererThree, getCSVFromURL } from '../../lib';


export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)
        const scene = this.scene;
        this.camera.position.set(0, 9, 9);


        /*
              6----7
             /|   /|
            2----3 |
            | |  | |
            | 4--|-5
            |/   |/
            0----1
        */

        const vertices = [
            -1, -1, 1,  // 0
            1, -1, 1,  // 1
            -1, 1, 1,  // 2
            1, 1, 1,  // 3
            -1, -1, -1,  // 4
            1, -1, -1,  // 5
            -1, 1, -1,  // 6
            1, 1, -1,  // 7
        ];

        const indices = [
            0, 3, 2,
            0, 1, 3,
            4, 2, 6,
            4, 0, 2,
            1, 7, 3,
            1, 5, 7,
            5, 6, 7,
            5, 4, 6,
            2, 7, 6,
            2, 3, 7,
            4, 1, 0,
            4, 5, 1,
        ];

        const colors = [
            1, 0, 0,
            1, 1, 0,
            0, 1, 0,
            0, 1, 1,
            0, 0, 1,
            1, 0, 1,
            0, 0, 0,
            1, 1, 1,

        ]
        const material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            vertexColors: true,
        });
        const geometry = new THREE.BufferGeometry();
        geometry.setIndex(indices);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        geometry.computeVertexNormals();
        geometry.computeBoundingBox();

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);


        this.start();
    }
}