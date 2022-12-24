import * as THREE from 'three';
import { RendererThree, } from '../../lib';
import { getJSONFromURL, distanceTo, MercatorProjection } from 'njscore';


export class Solution extends RendererThree {

    streetOSM: any = [];
    routesTreated: any = [];
    routesControl: any = [];
    zones30: any = [];

    positions;
    geometry;

    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();

    mesh: THREE.Points;

    sphere: THREE.Mesh;

    constructor(id: string = 'main') {
        super(id)

        const light = new THREE.PointLight(0xffffff, 0.8);
        this.camera.add(light);
        this.scene.add(light);

        this.raycaster = new THREE.Raycaster();
        this.raycaster.params.Points.threshold = 0.8;
        this.raycaster.far = 1000;

        const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        this.sphere = sphere;
        this.scene.add(sphere);

        this.camera.position.set(0, 40, 48);

        // ................................................................................
        // your code goes here
        getJSONFromURL('https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson').then((data) => {
            for (let i = 0; i < data['features'].length; ++i) {
                this.streetOSM.push(data['features'][i]['geometry']['coordinates']);
            }
            this.renderPoints(this.scene, this.streetOSM, [0, 1, 1]);
            this.start();
        });
    }
    public mouseMove(e: MouseEvent): void {
        this.pointer.x = (e.offsetX / this.hostDiv.clientWidth) * 2 - 1;
        this.pointer.y = - (e.offsetY / this.hostDiv.clientHeight) * 2 + 1;
    }
    public update(scene: THREE.Scene) {
        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersections = this.raycaster.intersectObjects([this.mesh], false);
        const intersection = (intersections.length) > 0 ? intersections[0] : null;

        if (intersection !== null) {
            this.sphere.position.set(intersection.point.x, intersection.point.y, intersection.point.z);
        }

        let numVertices = this.mesh.geometry.attributes.position.count;
        for (let i = 0; i < numVertices; i++) {
            let o = this.mesh.geometry.attributes.position;

            let x = o.getX(i);
            let y = o.getY(i);
            let z = o.getZ(i)

            y = Math.sin(9 * x * z + this.t * 5)

            y = y < 0 ? 0 : y;

            let p = new THREE.Vector3(x, y, z);

            this.mesh.geometry.attributes.position.setXYZ(i, p.x, p.y, p.z);

            if (intersection !== null) {
                y = distanceTo(x, y, z, intersection.point.x, intersection.point.y, intersection.point.z) / 30
            }
            this.mesh.geometry.attributes.color.setXYZ(i, y, 1 - y, 0);
        }
        this.mesh.geometry.attributes.position.needsUpdate = true;
        this.mesh.geometry.attributes.color.needsUpdate = true;
        this.mesh.geometry.computeVertexNormals();
    }
    public renderPoints = (scene: THREE.Scene, paths: any, color: number[]) => {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({ vertexColors: true, size: 0.75 });

        const positions = [];
        const colors = [];

        const xOFf = -15478803.88731685;
        const yOFf = -4766681.448690384;
        const scale = 0.01;

        for (let i = 0; i < paths.length; ++i) {
            const route = paths[i]

            for (let j = 0; j < route.length; ++j) {
                for (let k = 0; k < route[j].length; ++k) {

                    const [xPro, yPro] = MercatorProjection(route[j][k][0], route[j][k][1]);
                    const x = (xPro + xOFf) * scale
                    const y = (yPro + yOFf) * scale

                    positions.push(x, 0, y)
                    colors.push(color[0], color[1], color[2]);


                }
            }
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeBoundingSphere();
        this.positions = positions;
        this.geometry = geometry;
        this.mesh = new THREE.Points(geometry, material);
        scene.add(this.mesh);
    }
};