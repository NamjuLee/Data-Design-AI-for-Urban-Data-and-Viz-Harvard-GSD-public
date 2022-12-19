import * as THREE from 'three';
import { RendererThree, getCSVFromURL } from '../../lib';


export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)
        const scene = this.scene;

        this.camera.position.set(0, 50, 50);

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.25);
        this.scene.add(ambientLight);

        this.pointLight = new THREE.PointLight(0xffffff, 0.75);
        this.pointLight.position.x = 10;
        this.pointLight.position.y = 10;
        this.pointLight.castShadow = true;
        this.scene.add(this.pointLight);

        const vertices = [];
        for( let i = 0; i < 100; i ++ ) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 15;
            vertices.push( x, y, z );
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        const material = new THREE.PointsMaterial( { color: 0x00fff0 } );
        const points = new THREE.Points( geometry, material );
        scene.add( points );


        this.start();
    }
    public update(scene: THREE.Scene) {
        let matrix = new THREE.Matrix4();
        matrix.makeRotationY(Math.PI * 0.011);
        this.pointLight.position.applyMatrix4(matrix);
    }
}
