import * as THREE from 'three';
import { RendererThree } from '../../lib';
import { getJSONFromURL, MercatorProjection } from 'njscore';
import { renderLines } from '../Slowzone_03_Polyline';


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

        // ................................................................................
        // your code goes here
        const path = '/static/research/slow-zone/';
        getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson').then((data) => {
            for (let i = 0; i < data['features'].length; ++i) {
                this.streetOSM.push(data['features'][i]['geometry']['coordinates']);
            }
            renderLines(this.scene, this.streetOSM, [0.3, 0.3, 0.3]);

            getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones-30.geojson').then((data) => {
                for (let i = 0; i < data['features'].length; ++i) {
                    this.zones30.push(data['features'][i]['geometry']['coordinates']);
                }
                renderMultiPolygon(this.scene, this.zones30, [0, 1, 0]);

            });

            this.start();
        });
    }
}
const renderMultiPolygon = (scene: THREE.Scene, paths: any, colorArray: number[]) => {
    const xOFf = -15478803.88731685;
    const yOFf = -4766681.448690384;
    const scale = 0.01;

    const positions = [];

    for (let multi = 0; multi < paths.length; ++multi) {
        const multiPolygon = paths[multi];

        for (let polyI = 0; polyI < multiPolygon.length; ++polyI) {
            const polygon = multiPolygon[polyI];


            if (polygon.length === 1) {
                const thePolygon = polygon[0];

                const shape = [];

                for (let i = 0; i < thePolygon.length; ++i) {

                    const [xPro, yPro] = MercatorProjection(thePolygon[i][0], thePolygon[i][1]);

                    const x = (xPro + xOFf) * scale
                    const y = (yPro + yOFf) * scale
                    // console.log(x, y)
                    positions.push(x, 0, y)

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

            }
        }
    }
};