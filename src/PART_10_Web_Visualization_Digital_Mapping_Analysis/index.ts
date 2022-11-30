import MapView from '@arcgis/core/views/MapView';
import Map from "@arcgis/core/Map";
import Zoom from "@arcgis/core/widgets/Zoom";
import { version } from '../lib';
export enum ENV {
    DEFAULT = "",
    JSAPI = 'jsapi',
    THREE = 'three',
    CANVAS = 'canvas',
    WEBGL2 = 'webgl2',
}
interface Params {
    idContainer: string;
    idApp: string;
    env: ENV;
    view?: MapView
  }
export class ControllerLabs {
    static app : any = undefined
    static init(idContainer: string, idApp: string, env: ENV) {
        console.debug('njscore', version, ', app init....!!!');
        if (this.app !== undefined) {
            this.app.destroy();
            this.app = undefined;
        }
        const param: Params = {
            idContainer,
            idApp,
            env, 
        };
        if (env === ENV.JSAPI) {
            const map = new Map({
                basemap: "dark-gray-vector" // topo, dark-gray-vector, streets, streets-night-vector
            });
            const view = new MapView({
                container: idContainer,
                map,
                zoom: 15,
                center: [-71.0933575, 42.3591654],
                ui: {components: []} // do display any widgets
            });
            view.when(() => {
                view.ui.add({
                    component: new Zoom({view}),
                    position: 'top-right'
                })
                param.view = view;
                this.app = new ControllerLabs(param);});
        } else if(env === ENV.CANVAS){
            this.app = new ControllerLabs(param);
        } else if(env === ENV.THREE){
            this.app = new ControllerLabs(param);
        } else if(env === ENV.WEBGL2){
            this.app = new ControllerLabs(param);
        } else if(env === ENV.DEFAULT){
            this.app = new ControllerLabs(param);
        }
    }
    private app: any;
    constructor(param: Params) {
        this.execution(param); 
    }
    async execution(param: Params) {
        const appID = param.idApp;
        const containerID = param.idContainer;
        let view: MapView | HTMLElement | undefined = param.view !== undefined ?  param.view : undefined;

        if (param.env !== ENV.JSAPI) {
            view = document.getElementById(param.idContainer)
        }

        console.log('appID from lab code => ', appID)
        switch (appID) {
            case 'Canvas-starter': import('./Starter/Starter-canvas').then(({ Solution }) => { this.app = new Solution(view as HTMLDivElement) }); break;
            case 'SVG-starter': import('./Starter/Starter-svg').then(({ AppSVG }) => { this.app = new AppSVG(containerID) }); break;
            case 'THREE-starter': import('./Starter/Starter-Three').then(({ Solution }) => { this.app = new Solution(containerID) }); break;
            case 'JSAPI-starter': import('./Starter/Starter-JSAPI').then(({ Solution }) => { this.app = new Solution(view) }); break;
        }
        switch (appID) {
            // case 'Machine-Learning-tfjs': import('./Lab/workshop-ml').then(({ Solution }) => { this.app = new Solution(containerID) }); break; // OLD UI
            case 'Typescript-syntax': import('../PART_09_Visualization_Typescirpt/01_Typescript_Basics').then(({ Solution }) => { this.app = new Solution(containerID) }); break;
            case 'Condition-Loop': import('../PART_09_Visualization_Typescirpt/02_Condition_Loop').then(({ Solution }) => { this.app = new Solution(containerID) }); break;
            case 'Data-Structure': import('../PART_09_Visualization_Typescirpt/03_Data_Structure').then(({ Solution }) => { this.app = new Solution(containerID) }); break;
            case 'Function-Class': import('../PART_09_Visualization_Typescirpt/04_Function_Class').then(({ Solution }) => { this.app = new Solution(containerID) }); break;
            // .....................
            case 'Exercise': import('../PART_09_Visualization_Typescirpt/05_Exercise').then(({ Solution }) => { this.app = new Solution(containerID) }); break;
        }
        switch (appID) {
            case 'JSAPI-Starter':
                import('./07_Starter').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'CSV(TSV)':
                import('./08_CSV').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'JSON':
                import('./09_JSON').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'JSON-Line':
                import('./16_Canvas').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'REST-API':
                import('./16_Canvas').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab11':
                // ...................................................................... Vector Data
                import('./11_Point').then(({ Solution }) => { this.app = new Solution(view)});
                // ...................................................................... Raster Data
                break;
            case 'lab12':
                import('./12_Line').then(({ Solution }) => { this.app = new Solution(view)});
                break;        
            case 'lab13':
                import('./13_Polyline').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'c':
                import('./14_Polygon').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'd':
                import('./14_Polygon/MouserInteraction').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab15':
                import('./15_Mesh').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'a':
                console.log()
                import('./16_Canvas').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab17':
                break;
            case 'lab18':
                break;
            case 'lab19':
                break;
            case 'lab20':
                break;
            case 'lab21':
                import('./31_UrbanNetwork/01_Interaction').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab22':
                import('./31_UrbanNetwork/02_Network').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab23':
                break;
            case 'lab24':
                break;
            case 'lab25':
                break;
            case 'lab26':
                break;
            case 'lab27':
                break;
            case 'lab28':
                break;
            case 'lab29':
                break;
            case 'lab30':
                break;
            case 'lab31':
                import('./31_UrbanNetwork/01_Interaction').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab31-1':
                import('./31_UrbanNetwork/02_Network').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            case 'lab100':
                import('./Project_01_Third_Place').then(({ Solution }) => { this.app = new Solution(view)});
                break;
            default: 
            break;
        }
    }
    public destroy() {
        if (this.app !== undefined) {
            this.app.destroy();
        }
    }
}
export type LinkInfo = {
    id: string; 
    env: ENV;
    subLinks?: LinkInfo[]
    keywords?: string[]
} | 'divider';
export const TYPESCRIPT_LINKS: LinkInfo[] = [
    { id: "Typescript-syntax", env: ENV.DEFAULT },
    { id: "Condition-Loop", env: ENV.DEFAULT },
    { id: "Data-Structure", env: ENV.DEFAULT },
    { id: "Function-Class", env: ENV.DEFAULT },
    'divider',
    { id: "Exercise", env: ENV.DEFAULT },
];
export const STARTER_LINKS: LinkInfo[] = [
    { id: "Canvas-starter", env: ENV.CANVAS },
    { id: "SVG-starter", env: ENV.DEFAULT },
    { id: "THREE-starter", env: ENV.THREE },
    { id: "JSAPI-starter", env: ENV.JSAPI },
];
export const LAB_LINKS: LinkInfo[] = [
    { id: "Starters", env: ENV.DEFAULT, subLinks: STARTER_LINKS, keywords: ['graphics'] },
    'divider',
    { id: "Typescript", env: ENV.DEFAULT, subLinks: TYPESCRIPT_LINKS, keywords: ['graphics'] },
    'divider',
    { id: 'JSAPI-Starter', env: ENV.JSAPI, keywords: [] },
    { id: 'CSV(TSV)', env: ENV.JSAPI, keywords: [] },
    { id: 'JSON', env: ENV.JSAPI, keywords: [] },
    { id: 'JSON-Line', env: ENV.JSAPI, keywords: [] },
    { id: 'REST-API', env: ENV.JSAPI, keywords: [] },
    'divider',
    { id: 'Point', env: ENV.JSAPI, keywords: [] },
    { id: 'Line', env: ENV.JSAPI, keywords: [] },
    { id: 'Polyline', env: ENV.JSAPI, keywords: [] },
    { id: 'Polygon', env: ENV.JSAPI, keywords: [] },
    { id: 'Mesh', env: ENV.JSAPI, keywords: [] },
];