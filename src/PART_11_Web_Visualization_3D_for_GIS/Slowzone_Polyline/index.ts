import * as THREE from 'three';
import { RendererThree, } from '../../lib';
import { getJSONFromURL, MercatorProjection, } from 'njscore';

export class Solution extends RendererThree {

    streetOSM: any = [];
    routesTreated: any = [];
    routesControl: any = [];
    zones30: any = [];

    constructor(id: string = 'main') {
        super(id)

        const light = new THREE.PointLight(0xffffff, 0.8);
        this.camera.add(light);
        this.scene.add(light);
  

        this.camera.position.set(0, 40, 48);

        const path = '/static/research/slow-zone/';
        getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson').then((data) => {
            for (let i = 0; i < data['features'].length; ++i) {
                this.streetOSM.push(data['features'][i]['geometry']['coordinates']);
            }
            renderLines(this.scene, this.streetOSM, [0, 1, 1]);

            getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson').then((data) => {
                for (let i = 0; i < data['features'].length; ++i) {
                    this.routesTreated.push(data['features'][i]['geometry']['coordinates']);
                }
                renderLines(this.scene, this.routesTreated, [1, 0, 0]);
            });

            getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson').then((data) => {
                for (let i = 0; i < data['features'].length; ++i) {
                    this.routesControl.push(data['features'][i]['geometry']['coordinates']);
                }
                renderLines(this.scene, this.routesControl, [0, 1, 0]);
            });

            this.start();
        });
    }
}
export const renderLines = (scene: THREE.Scene, paths: any, color: number[]) => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ vertexColors: true });

    const positions = [];
    const colors = [];
    const indices = [];

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
                colors.push(color[0], color[1], color[2]);

                if (k < route[j].length - 1) {
                    indices.push(Math.floor(positions.length / 3) - 1, Math.floor(positions.length / 3));
                }
            }
        }
    }
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeBoundingSphere();
    const line = new THREE.LineSegments(geometry, material);
    scene.add(line);
    return line;
};