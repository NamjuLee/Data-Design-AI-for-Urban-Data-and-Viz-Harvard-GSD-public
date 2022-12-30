import * as THREE from 'three';
import { getJSONFromURL } from 'njscore';
import { RendererThree, MercatorProjection, } from '../../lib';

import { renderLines } from '../Slowzone_03_Polyline';

export class Solution extends RendererThree {
    streetOSM: any = [];
    routesTreated: any = [];
    routesControl: any = [];
    zones30: any = [];

    meshStreet: THREE.LineSegments;
    meshSpike: THREE.LineSegments;

    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();
    sphere: THREE.Mesh;

    constructor(id: string = 'main') {
        super(id)

        this.camera.position.set(0, 30, 30);

        // ................................................................................
        // your code goes here

        getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson').then((data) => {
            for (let i = 0; i < data['features'].length; ++i) {
                this.streetOSM.push(data['features'][i]['geometry']['coordinates']);
            }
            this.meshStreet = renderLines(this.scene, this.streetOSM, [0.3, 0.3, 0.3]);

            getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson').then((data) => {
                for (let i = 0; i < data['features'].length; ++i) {
                    this.routesTreated.push(data['features'][i]['geometry']['coordinates']);
                }
                this.meshSpike = renderLineSpike(this.scene, this.routesTreated, [1, 0, 0]);
                this.start();
            });
        });
    }
    public update(scene: THREE.Scene) {
        for (let i = 1; i < this.meshSpike.geometry.attributes.position.count; i += 2) {
            let p = this.meshSpike.geometry.attributes.position;

            let x = p.getX(i);
            let y = p.getY(i);
            let z = p.getZ(i)

            y = Math.sin(5 * x * z + this.t * 5) * 9

            y = y < 0 ? 0 : y;

            let np = new THREE.Vector3(x, y, z);
            this.meshSpike.geometry.attributes.position.setXYZ(i, np.x, np.y, np.z);

            this.meshSpike.geometry.attributes.color.setXYZ(i - 1, 0, y, 0);
            this.meshSpike.geometry.attributes.color.setXYZ(i, y, 0, 0);
        }

        this.meshSpike.geometry.attributes.position.needsUpdate = true;
        this.meshSpike.geometry.attributes.color.needsUpdate = true;
        this.meshSpike.geometry.computeVertexNormals();
    }
}
const renderLineSpike = (scene: THREE.Scene, paths: any, color: number[]) => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ vertexColors: true });

    const positions = [];
    const colors = [];

    const xOFf = -15478803.88731685;
    const yOFf = -4766681.448690384;
    const scale = 0.01;

    let xC = 0
    let yC = 0
    let Count = 0

    for (let i = 0; i < paths.length; ++i) {
        const route = paths[i]

        for (let j = 0; j < route.length; ++j) {
            for (let k = 0; k < route[j].length; ++k) {

                const [xPro, yPro] = MercatorProjection(route[j][k][0], route[j][k][1]);
                xC += xPro;
                yC += yPro;
                Count += 1;

                const x = (xPro + xOFf) * scale
                const y = (yPro + yOFf) * scale
                positions.push(x, 0, y)
                positions.push(x, 10, y)

                colors.push(color[0], color[1], color[2]);
                colors.push(color[0], color[1], color[2]);

            }
        }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeBoundingSphere();

    const line = new THREE.LineSegments(geometry, material);
    scene.add(line);
    return line
};