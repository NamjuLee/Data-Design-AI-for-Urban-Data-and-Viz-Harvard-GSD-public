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

        const v0 = [-1, -1, 1];  // 0
        const v1 = [1, -1, 1];   // 1
        const v2 = [-1, 1, 1];   // 2
        const v3 = [1, 1, 1];    // 3
        const v4 = [-1, -1, -1]; // 4
        const v5 = [1, -1, -1];  // 5
        const v6 = [-1, 1, -1];  // 6
        const v7 = [1, 1, -1];   // 7

        const vertices = [
            // ........................ front
            ...v0,
            ...v3,
            ...v2,

            ...v0,
            ...v1,
            ...v3,

            // ........................ right
            ...v1,
            ...v7,
            ...v3,

            ...v1,
            ...v5,
            ...v7,

            // ........................ back
            ...v5,
            ...v6,
            ...v7,

            ...v5,
            ...v4,
            ...v6,

            // ........................ left
            ...v4,
            ...v2,
            ...v6,

            ...v4,
            ...v0,
            ...v2,

            // ........................ bottom
            ...v0,
            ...v4,
            ...v5,

            ...v0,
            ...v5,
            ...v1,

            // ........................ bottom
            ...v2,
            ...v7,
            ...v6,

            ...v2,
            ...v3,
            ...v7,
        ];

        const indices = [
            0, 1, 2,    // front 1
            3, 4, 5,    // front 2

            6, 7, 8,    // right 1
            9, 10, 11,  // right 2

            12, 13, 14, // back 1
            15, 16, 17, // back 2

            18, 19, 20, // right 1
            21, 22, 23, // right 2

            24, 25, 26, // bottom 1
            27, 28, 29, // bottom 2

            30, 31, 32, // top 1
            33, 34, 35, // top 2

        ];

        const colors = [
            // ........................ front
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            // ........................ right
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // ........................ back
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // ........................ left
            0, 1, 1,
            0, 1, 1,
            0, 1, 1,
            0, 1, 1,
            0, 1, 1,
            0, 1, 1,
            // ........................ bottom
            1, 1, 0,
            1, 1, 0,
            1, 1, 0,
            1, 1, 0,
            1, 1, 0,
            1, 1, 0,
            // ........................ bottom
            1, 0, 1,
            1, 0, 1,
            1, 0, 1,
            1, 0, 1,
            1, 0, 1,
            1, 0, 1,
        ]
        const material = new THREE.MeshBasicMaterial({
            // side: THREE.DoubleSide,
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