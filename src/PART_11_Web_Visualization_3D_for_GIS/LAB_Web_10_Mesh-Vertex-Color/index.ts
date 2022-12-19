import * as THREE from 'three';
import { RendererThree, getCSVFromURL } from '../../lib';


export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)

        this.camera.position.set(0, 50, 50);

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.25);
        this.scene.add(ambientLight);

        this.pointLight = new THREE.PointLight(0xffffff, 0.75);
        this.pointLight.position.x = 10;
        this.pointLight.position.y = 10;
        this.pointLight.castShadow = true;
        this.scene.add(this.pointLight);

        const geometry = new THREE.SphereGeometry(4.1, 60, 60 );
        const object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( ) );
        this.scene.add(object);

        // const light = new THREE.HemisphereLight();
		// 		this.scene.add( light );

        // const geometry = new THREE.SphereGeometry( 1, 50, 50 );
        // const object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( ) );
        // this.scene.add(object);

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
            // console.log(vs);
            // console.log(indices);
    
            const material = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                vertexColors: true,
                // wireframe: true,
            });

            // const material = new THREE.MeshLambertMaterial();

            // const material = new THREE.MeshPhongMaterial(  )
            
            const geometry = new THREE.BufferGeometry();
            geometry.setIndex(indices );
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vs, 3));
            // geometry.setAttribute('normal', new THREE.Float32BufferAttribute(colors, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            // generateMorphTargets( geometry );

            
            geometry.computeBoundingSphere();
            geometry.computeVertexNormals();
            // this.positions = positions;
            // this.geometry = geometry;
            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);

            this.start();
        });


    }
}
