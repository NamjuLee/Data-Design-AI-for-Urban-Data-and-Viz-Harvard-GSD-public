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
export type LinkInfo = {
    id: string;
    env: ENV;
    subLinks?: LinkInfo[]
    keywords?: string[]
    load?: (param: { containerID: string; view: MapView | HTMLElement | undefined; }) => Promise<any>;
} | 'divider';
// ......................................... 1
const DesignData: LinkInfo = {
    id: 'Design-and-Data', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Data-and-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Design-Data-Computational-Design').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Data-and-Design-Lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Design-Data').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
}
const ProgrammingDataProcess: LinkInfo = {
    id: 'Programming-and-Data-Process', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Code For Design and Programming', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Code-For-Design').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Computational Design Thinking', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Computational-Design-Thinking').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Python Code (GitHub)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-Programming-Data-Processing').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
    ]
}
// ......................................... 2
const Geometry: LinkInfo = {
    id: 'Vector & Raster', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Vector and Operation', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Vector-operation').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
const GeometryImplementation: LinkInfo = {
    id: 'Geometry Implementation', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Geometry (Python)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-Geometry-Python-Code').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'Canvas-Point-Circle', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_04_Geometry_Data/LAB_Web_01_Point_Circle').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Line-Polyline', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_04_Geometry_Data/LAB_Web_02_Line_Polyline').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Polyline-mouse-input', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_04_Geometry_Data/LAB_Web_03_Polyline-Mouse-Input').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Polygon', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_04_Geometry_Data/LAB_Web_04_Polygon').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'Three-Mesh', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_04_Geometry_Data/LAB_Web_05_Mesh').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Rhino', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_04_Geometry_Data/LAB_Web_06_MeshRhino').then(({ Solution }) => { return new Solution(param.containerID) }); } },
    ]
};
// ......................................... 3
const Model: LinkInfo = {
    id: 'AI for Design', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'AI for Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-ai-for-designers').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
    ]
};
const ModelImplementation: LinkInfo = {
    id: 'ML Models', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'ML Python code', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-ML-Python-Code').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'TFJS-Tensor', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_01_Tensor').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'TFJS-Linear-Regression', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_02_ModelLinearRegression').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        
        // 
        { id: 'TFJS-MPG', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_03_MPGPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Polynomial-regression', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-ml-regression').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'TFJS-KNN', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_05_KNNIrisPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'TFJS-IRIS', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_06_NetworkIrisPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider', 
        { id: 'Smart Drawing', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_06_Problem_Data_Model_Train_Validation/LAB_03_SmartDrawing/src/App').then(({ AppSmartDrawing }) => { return new AppSmartDrawing(param.containerID) }); } },
        { id: 'Image-Face', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-ml-image').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Video-Face', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-ml-video').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
       
    ]
};
// ......................................... 4
const ThirdPlaceResearch: LinkInfo = {
    id: 'Third Place Research', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Third-Place-initial-research', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Third-Place-initial-research').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Third-Place-paper', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-Third-Place-paper').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'Third-Place-review', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/External-Third-Place-review').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Third-Place-review(Kor)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-Third-Place-review-kr').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'Third-Place (GitHub)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../App/links/Link-Third-Code').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
    ]
};
const ThirdPlaceResearchViz: LinkInfo = {
    id: 'Third Place Viz', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Third-place-init', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../PART_08_Third_Place_Prediction_Implementation/Project_01_Third_Place').then(({ Solution }) => { return new Solution(param.view) }); } },
        'divider',
    ]
};
// ......................................... 5
const Typescript_Lab: LinkInfo = {
    id: 'Typescript-Lab', env: ENV.DEFAULT, keywords: [], subLinks: [
        { id: 'Typescript-syntax', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_09_Visualization_Typescript/01_Typescript_Basics').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Condition-Loop', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_09_Visualization_Typescript/02_Condition_Loop').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Data Structure and Format', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_09_Visualization_Typescript/03_Data_Structure').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Function and Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_09_Visualization_Typescript/04_Function_Class').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Exercise', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../PART_09_Visualization_Typescript/05_Exercise').then(({ Solution }) => { return new Solution(param.containerID) }); } },

    ]
};
const DigitalMappingVizLab: LinkInfo = {
    id: 'Digital-Mapping-Lab', env: ENV.DEFAULT, keywords: ['tf', 'tensor', 'flow', 'js',], subLinks: [
        { id: 'template', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./01_Template').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'starter', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./02_Starter').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'CSV(TSV)', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./03_CSV').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'JSON', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./04_JSON').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'JSON-Line', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./04_JSON/MultiLineString').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'REST-API', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./05_REST_API').then(({ Solution }) => { return new Solution(param.view) }); } },
        'divider',
        { id: 'Polygon', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./14_Polygon').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'Polygon Interaction', env: ENV.JSAPI, keywords: [], load: (param) => { return import('./14_Polygon/MouserInteraction').then(({ Solution }) => { return new Solution(param.view) }); } },
    ]
};
export const LAB_LINKS: LinkInfo[] = [
    DesignData,
    ProgrammingDataProcess,
    'divider',
    Geometry,
    GeometryImplementation,
    'divider',
    Model,
    ModelImplementation,
    'divider',
    ThirdPlaceResearch,
    ThirdPlaceResearchViz,
    'divider',
    Typescript_Lab,
    DigitalMappingVizLab,
];
const generateLookupTable = () => {
    const lookupTable = {}
    for (let i = 0; i < LAB_LINKS.length; ++i) {
        const link = LAB_LINKS[i];
        if (link === 'divider') { continue; }
        if (link.subLinks) {
            for (let j = 0; j < link.subLinks.length; ++j) {
                const subLink = link.subLinks[j];
                if (subLink === 'divider') { continue; }
                lookupTable[subLink.id] = subLink
            }
        } else {
            lookupTable[link.id] = link;
        }
    }
    return lookupTable as Record<string, Exclude<LinkInfo, string>>;
};
const lookupTable = generateLookupTable();
export class ControllerLabs {
    static app: any = undefined
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
                ui: { components: [] } // do display any widgets
            });
            view.when(() => {
                view.ui.add({
                    component: new Zoom({ view }),
                    position: 'top-right'
                })
                param.view = view;
                this.app = new ControllerLabs(param);
            });
        } else if (env === ENV.CANVAS) {
            this.app = new ControllerLabs(param);
        } else if (env === ENV.THREE) {
            this.app = new ControllerLabs(param);
        } else if (env === ENV.WEBGL2) {
            this.app = new ControllerLabs(param);
        } else if (env === ENV.DEFAULT) {
            this.app = new ControllerLabs(param);
        }
    }
    private app: any;
    constructor(param: Params) {
        this.execution(param);
    }
    public destroy() {
        if (this.app !== undefined) {
            this.app.destroy();
        }
    }
    async execution(param: Params) {
        const appID = param.idApp;
        const containerID = param.idContainer;
        let view: MapView | HTMLElement | undefined = param.view !== undefined ? param.view : undefined;
        if (param.env !== ENV.JSAPI) {
            view = document.getElementById(param.idContainer)
        }
        await this.lab(appID, containerID, view);
    }
    async lab(appID: string, containerID: string, view: MapView | HTMLElement | undefined) {
        const link = lookupTable[appID];
        this.app = await link.load({ containerID, view });
    }
}