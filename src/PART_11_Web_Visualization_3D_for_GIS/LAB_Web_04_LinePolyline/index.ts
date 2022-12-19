import * as THREE from 'three';
import { RendererThree } from '../../lib';

export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)

        this.camera.position.set( 0, 50, 50 );

        const material = new THREE.LineBasicMaterial({
            color: 0xff0000,
            linewidth: 10,
        });
        
        const points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0 ) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );
        
        const geometry1 = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometry1, material );
        this.scene.add( line );


        this.start();
    }

    public update(scene: THREE.Scene) {


    }

}
