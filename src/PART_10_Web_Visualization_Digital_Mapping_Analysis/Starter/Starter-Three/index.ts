import * as THREE from 'three';
import { RendererThree } from '../../../lib';

export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.25);
        ambientLight.castShadow = true;
        this.scene.add(ambientLight);

        this.pointLight = new THREE.PointLight(0xffffff, 0.75);
        this.pointLight.position.x = 10;
        this.pointLight.castShadow = true;
        this.scene.add(this.pointLight);

        const geometry = new THREE.SphereGeometry( 1, 50, 50 );
        const object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( ) );
        this.scene.add(object);

        
        this.start();
    }

    public update(scene: THREE.Scene) {

        var matrix = new THREE.Matrix4();
        matrix.makeRotationY(Math.PI * 0.011);
        this.pointLight.position.applyMatrix4(matrix);

    }

}
