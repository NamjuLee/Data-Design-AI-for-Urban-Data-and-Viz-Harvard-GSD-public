import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

export class RendererThree {
    public canvas: HTMLCanvasElement;
    public host: HTMLElement;
    public ctx: CanvasRenderingContext2D;
    public t: number = 0.0;
    public camera: THREE.PerspectiveCamera;
    public scene: THREE.Scene;
    public renderer: THREE.WebGLRenderer;
    public controls: OrbitControls;
    private requestFrame: number;
    constructor(id: string) {
        this.host = document.getElementById(id);
        this.initCanvas();
    }
    private initCanvas() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0, 0, 0);
        this.scene.castShadow = true;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(this.host.clientWidth / this.host.clientHeight);
        this.renderer.domElement.id = 'Three';
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.setSize(this.host.clientWidth, this.host.clientHeight);
        this.host.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(30, this.host.clientWidth / this.host.clientHeight, 1, 5000);
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.camera.position.set( 0, 0, 5 );
        this.controls.update();

        this.init();
    }
    private init() {
        this.eventBind();

    }
    private eventBind() {
        this.renderer.domElement.onmousedown = (e: MouseEvent) => this.MouseDown(e);
        this.renderer.domElement.onmouseup = (e: MouseEvent) => this.MouseUp(e);
        this.renderer.domElement.onmousemove = (e: MouseEvent) => this.MouseMove(e);

        window.addEventListener('resize', () => this.onWindowResize());

    }
    private onWindowResize() {
        this.camera.aspect = this.host.clientWidth / this.host.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.host.clientWidth, this.host.clientHeight );
    }
    private loop = () => {
        this.requestFrame = requestAnimationFrame(this.loop);
        this.controls.update();
        this.update(this.scene);
        this.renderer.render(this.scene, this.camera);
        this.t += 0.01;

        console.log('rendering...');
    }
    // .............................................................................
    public start() {
        this.loop();
    }
    public MouseDown(e: MouseEvent) {
        // console.log(e);
    }
    public MouseUp(e: MouseEvent) {
        // console.log(e);
    }
    public MouseClick(e: MouseEvent) {
        // console.log(e);
    }
    public MouseDClick(e: MouseEvent) {
        // console.log(e);
    }
    public MouseMove(e: MouseEvent) {
        // console.log(e);
    }
    public MouseDrag(e: MouseEvent) {
        // console.log(e);
    }
    public update(scene: THREE.Scene) {

    }
    public destroy() {
        window.removeEventListener('resize', () => this.onWindowResize());
        cancelAnimationFrame(this.requestFrame);
        this.requestFrame = undefined;
        while (this.host.lastChild) {
            this.host.removeChild(this.host.lastChild);
        }
    }
}