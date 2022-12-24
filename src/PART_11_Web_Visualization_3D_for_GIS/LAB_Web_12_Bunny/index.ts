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

        const val = 10; // for quality of the shawdow in the scene
        dirLight.shadow.camera.left = - val;
        dirLight.shadow.camera.right = val;
        dirLight.shadow.camera.top = val;
        dirLight.shadow.camera.bottom = - val;

        dirLight.shadow.camera.far = 100;
        dirLight.shadow.bias = - 0.00001;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        scene.add(dirLight);

        // ................................................................................
        // your code goes here
        // https://en.wikipedia.org/wiki/Wavefront_.obj_file
        getCSVFromURL('https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj').then((d) => {
            const lines = d.split(/\r\n|\r|\n/g);
            console.log(lines);

        });

        this.start();
    }

    public update(scene: THREE.Scene) {
        var matrix = new THREE.Matrix4();
        matrix.makeRotationY(Math.PI * 0.011);
        this.pointLight.position.applyMatrix4(matrix);
    }
}
