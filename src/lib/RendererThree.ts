import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

export class RendererThree {
    public canvas: HTMLCanvasElement;
    public hostDiv: HTMLElement;
    public ctx: CanvasRenderingContext2D;
    public t: number = 0.0;
    public camera: THREE.PerspectiveCamera;
    public scene: THREE.Scene;
    public renderer: THREE.WebGLRenderer;
    public controls: OrbitControls;
    private requestFrame: number;
    constructor(id: string) {
        this.hostDiv = document.getElementById(id);
        this.initCanvas();
    }
    private initCanvas() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0, 0, 0);
        this.scene.castShadow = true;


        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(this.hostDiv.clientWidth / this.hostDiv.clientHeight);
        this.renderer.domElement.id = 'Three';
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(this.hostDiv.clientWidth, this.hostDiv.clientHeight);
        this.hostDiv.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(30, this.hostDiv.clientWidth / this.hostDiv.clientHeight, 0.01, 2000);
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.camera.position.set( 0, 0, 5 );
        this.controls.update();

        this.init();
    }
    private init() {
        this.eventBind();

    }
    private eventBind() {
        this.renderer.domElement.onmousedown = (e: MouseEvent) => this.mouseDown(e);
        this.renderer.domElement.onmouseup = (e: MouseEvent) => this.mouseUp(e);
        this.renderer.domElement.onmousemove = (e: MouseEvent) => this.mouseMove(e);

        window.addEventListener('resize', () => this.onWindowResize());

    }
    private onWindowResize() {
        this.camera.aspect = this.hostDiv.clientWidth / this.hostDiv.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.hostDiv.clientWidth, this.hostDiv.clientHeight );
    }
    private loop = () => {
        this.requestFrame = requestAnimationFrame(this.loop);
        this.controls.update();
        this.update(this.scene);
        this.renderer.render(this.scene, this.camera);
        this.t += 0.01;

        // console.log('rendering...');
    }
    // .............................................................................
    public start() {
        this.loop();
    }
    public mouseDown(e: MouseEvent) {
        // console.log(e);
    }
    public mouseUp(e: MouseEvent) {
        // console.log(e);
    }
    public mouseClick(e: MouseEvent) {
        // console.log(e);
    }
    public mouseDClick(e: MouseEvent) {
        // console.log(e);
    }
    public mouseMove(e: MouseEvent) {
        // console.log(e);
    }
    public mouseDrag(e: MouseEvent) {
        // console.log(e);
    }
    public update(scene: THREE.Scene) {

    }
    public destroy() {
        window.removeEventListener('resize', () => this.onWindowResize());
        cancelAnimationFrame(this.requestFrame);
        this.requestFrame = undefined;
        while (this.hostDiv.lastChild) {
            this.hostDiv.removeChild(this.hostDiv.lastChild);
        }
    }
}