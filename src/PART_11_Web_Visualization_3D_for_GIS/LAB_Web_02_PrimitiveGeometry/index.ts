import * as THREE from 'three';
import { RendererThree, getCSVFromURL } from '../../lib';


export class Solution extends RendererThree {

    pointLight: THREE.PointLight

    constructor(id: string = 'main') {
        super(id)
        const scene = this.scene;

        this.camera.position.set(9, 9, 9);

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.25);
        scene.add(ambientLight);

        this.pointLight = new THREE.PointLight(0xffffff, 0.75);
        this.pointLight.position.x = 10;
        this.pointLight.position.y = 10;
        this.pointLight.castShadow = true;
        scene.add(this.pointLight);


        // Plane
        // https://threejs.org/docs/#api/en/geometries/PlaneGeometry
        let geometryPlane = new THREE.PlaneGeometry(10, 10);
        let materialPlane = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        let meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
        let matrix = new THREE.Matrix4();
        matrix.makeRotationX( -Math.PI * 0.5);
        meshPlane.applyMatrix4(matrix);
        meshPlane.position.y = -0.5;
        meshPlane.receiveShadow = true;
        scene.add(meshPlane);


        // cube
        // https://threejs.org/docs/#api/en/geometries/BoxGeometry
        let geometryBox = new THREE.BoxGeometry(1, 1, 1);
        let materialBox = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        let meshCube = new THREE.Mesh(geometryBox, materialBox);
        meshCube.castShadow = true;
        meshCube.position.z = 2;
        scene.add(meshCube);

        let wireframeBox = new THREE.WireframeGeometry(geometryBox);
        let materialSBoxWire = new THREE.MeshBasicMaterial({ color: 0x000000 });
        let lineBox = new THREE.LineSegments(wireframeBox, materialSBoxWire);
        lineBox.position.z = 2;
        scene.add(lineBox);


        // sphere
        // https://threejs.org/docs/#api/en/geometries/SphereGeometry
        let geometrySphere = new THREE.SphereGeometry(0.5, 16, 16);
        let materialSphere = new THREE.MeshPhongMaterial({ color: 0x0ff000 });
        let meshSphere = new THREE.Mesh(geometrySphere, materialSphere);
        meshSphere.castShadow = true;
        scene.add(meshSphere);

        let wireframeSphere = new THREE.WireframeGeometry(geometrySphere);
        let materialSphereWire = new THREE.MeshBasicMaterial({ color: 0x000000 });
        let lineSphere = new THREE.LineSegments(wireframeSphere, materialSphereWire);
        scene.add(lineSphere);


        // cone
        // https://threejs.org/docs/#api/en/geometries/ConeGeometry
        let geometryCone = new THREE.ConeGeometry(0.5, 1, 16);
        let materialCone = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        let meshCone = new THREE.Mesh(geometryCone, materialCone);
        meshCone.position.z = -2
        meshCone.castShadow = true;
        scene.add(meshCone);

        let wireframeCone = new THREE.WireframeGeometry(geometryCone);
        let materialConeWire = new THREE.MeshBasicMaterial({ color: 0x000000 });
        let lineCone = new THREE.LineSegments(wireframeCone, materialConeWire);
        lineCone.position.z = -2
        scene.add(lineCone);

        this.start();
    }
    public update(scene: THREE.Scene) {
        let matrix = new THREE.Matrix4();
        matrix.makeRotationY(Math.PI * 0.011);
        this.pointLight.position.applyMatrix4(matrix);
    }
}
