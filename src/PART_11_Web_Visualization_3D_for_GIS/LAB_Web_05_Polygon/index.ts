import * as THREE from 'three';
import { RendererThree } from '../../lib';

export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)
        const scene = this.scene;
        this.camera.position.set(0, 5, 50);


        const shape = [];
        const data = polylineData.split(',');

        for (let i = 0; i < data.length; i += 2) {
            const x = +data[i];
            const y = parseFloat(data[i + 1]);
            shape.push(new THREE.Vector2(x, y));
        }

        let geometry = new THREE.ShapeGeometry(new THREE.Shape(shape));
        let mat = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide, color: 0x00ff00,
            transparent: true,
            opacity: 0.3
        });
        let mesh = new THREE.Mesh(geometry, mat);
        scene.add(mesh);
        mesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI * 0.5);


        this.start();
    }
}

// Generated from Rhino Grasshopper
const polylineData = `
-9.26313303642558,3.13812262050336,-9.26313303642558,7.52393254795384,-3.36497485813011,7.52393254795384,-3.36497485813011,-1.17206989440487,8.62038502981646,-1.17206989440487,8.62038502981646,0.718365419151373,-1.43673083830274,0.718365419151373,-1.43673083830274,10.283968105746,4.31019251490823,10.283968105746,4.31019251490823,5.1797927591441,9.86807233676358,5.1797927591441,9.86807233676358,9.79245492422133,15.3125260398056,9.79245492422133,15.3125260398056,-5.70911464693985,-19.4714837296293,-5.70911464693985,-12.5146817757423,0.151234825084499,-12.5146817757423,10.2461593994748,-9.98079170426144,3.16232765034399
`