import * as THREE from 'three';
import { RendererThree, getCSVFromURL } from '../../lib';

export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)

        this.camera.position.set(0, 50, 50);

        getCSVFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/geometry/CFDSimulationOBJ/CFDSimulationCustom.obj').then((d) => {
            const lines = d.split(/\r\n|\r|\n/g);

            const vs = []
            const indices = [];
            const colors = []

            for (let i = 0; i < lines.length; ++i) {
                const line = lines[i].split(' ');
                
         
                if (line[0] === 'v') {
                    vs.push(+line[1] , +line[3] , +line[2] )
                }
                
                if (line[0] === 'vc') {
                    colors.push(+line[1] / 255, +line[2] / 255, +line[3]/ 255)
                }

                if (line[0] === 'f') {
                    indices.push(+line[1], +line[2], +line[3])
                    indices.push(+line[1], +line[3], +line[4])

                }
            }
            const material = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                vertexColors: true,
                // wireframe: true,
            });
            
            const geometry = new THREE.BufferGeometry();
            geometry.setIndex(indices );
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vs, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            
            geometry.computeBoundingSphere();
            geometry.computeVertexNormals();
            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);

            this.start();
        });

    }
}
