import MapView from '@arcgis/core/views/MapView';
import Map from "@arcgis/core/Map";
import Zoom from "@arcgis/core/widgets/Zoom";
import { version } from '../../lib';
export enum ENV {
    DEFAULT = "",
    JSAPI = 'jsapi',
    THREE = 'three',
    CANVAS = 'canvas',
    WEBGL2 = 'webgl2',
};
interface Params {
    idContainer: string;
    idApp: string;
    env: ENV;
    view?: MapView
};
export type LinkInfo = {
    id: string;
    env: ENV;
    subLinks?: LinkInfo[];
    keywords?: string[];
    load?: (param: { containerID: string; view: MapView | HTMLElement | undefined; }) => Promise<any>;
} | 'divider';
// ......................................... 1
const DesignData: LinkInfo = {
    id: 'Design-and-Data', env: ENV.DEFAULT, keywords: ['data design lecture computational design gis vector raster data thinking process'], subLinks: [
        { id: 'Data-and-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Design-Data-Computational-Design').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Data-and-Design-slides', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Design-Data-Computational-Design-slides').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Data-and-Design-Lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Design-Data').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
const ProgrammingDataProcess: LinkInfo = {
    id: 'Programming-and-Data-Process', env: ENV.DEFAULT, keywords: ['python programming python numpy pandas data processing'], subLinks: [
        { id: 'Code-For-Design-and-Programming', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Code-For-Design').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Computational-Design-Thinking', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Computational-Design-Thinking').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Python-Code-(GitHub)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Programming-Data-Processing').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: '[Cheat Sheet] Python, List, Data Types, Class, Pandas, Numpy, SKlearn', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Cheat-Sheet-A').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: '[Cheat Sheet] Machine Learning, Deep Learning, Artificial Intelligence, Keras, Neural Networks, Skicit-learn, Pandas Data Science', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Cheat-Sheet-B').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
  
    ]
};
// ......................................... 2
const Geometry: LinkInfo = {
    id: 'Vector-and-Raster', env: ENV.DEFAULT, keywords: ['computation design data vector raster color'], subLinks: [
        { id: 'Vector-and-Operation', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Data-Vector-operation').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Geometry', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Data-Geometry').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Raster', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Data-Raster').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Color', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Data-Color').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
const GeometryImplementation: LinkInfo = {
    id: 'Geometry-Implementation', env: ENV.DEFAULT, keywords: ['geometry computation design data'], subLinks: [
        { id: 'Geometry-(Python)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Geometry-Python-Code').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'Canvas-Point-Circle', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_01_Point_Circle').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Line-Polyline', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_02_Line_Polyline').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Polyline-mouse-input', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_03_Polyline-Mouse-Input').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Polygon', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_04_Polygon').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'Three-Mesh', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_05_Mesh').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Rhino', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_06_MeshRhino').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Geometry-As-Data-Structure', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_07_GeometryAsDataStructure').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Graph', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_08_Graph').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Pixel', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_09_Pixel').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Voxel', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_04_Geometry_Data/LAB_Web_10_Voxel').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
// ......................................... 3
const Model: LinkInfo = {
    id: 'AI-for-Design', env: ENV.DEFAULT, keywords: ['air for design designers'], subLinks: [
        { id: 'AI-for-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ai-for-designers').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
const ModelImplementation: LinkInfo = {
    id: 'ML-Models', env: ENV.DEFAULT, keywords: ['python tensorflow js tfjs ai ml dl cnn regression knn'], subLinks: [
        { id: 'ML-Python-code', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-ML-Python-Code').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'TFJS-Tensor', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_01_Tensor').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'TFJS-Linear-Regression', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_02_ModelLinearRegression').then(({ Solution }) => { return new Solution(param.containerID) }); } },

        // 
        { id: 'TFJS-MPG', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_03_MPGPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Polynomial-regression', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ml-regression').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'TFJS-KNN', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ml-knn').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'TFJS-IRIS', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_06_Problem_Data_Model_Train_Validation/LAB_Web_06_NetworkIrisPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Smart-Drawing', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_06_Problem_Data_Model_Train_Validation/LAB_03_SmartDrawing/src/App').then(({ AppSmartDrawing }) => { return new AppSmartDrawing(param.containerID) }); } },
        { id: 'Image-Face', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ml-image').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Video-Face', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-ml-video').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },

    ]
};
// ......................................... 4
const ThirdPlaceResearch: LinkInfo = {
    id: 'Third-Place-Research', env: ENV.DEFAULT, keywords: ['project research paper third place data visualization'], subLinks: [
        { id: 'Third-Place-initial-research', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Third-Place-initial-research').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Third-Place-paper', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Third-Place-paper').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'Third-Place-review', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Third-Place-review').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Third-Place-review(Kor)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Third-Place-review-kr').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'Third-Place (GitHub)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Third-Code').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
    ]
};
const ThirdPlaceResearchViz: LinkInfo = {
    id: 'Third-Place-Viz', env: ENV.DEFAULT, keywords: ['project research third place data visualization'], subLinks: [
        { id: 'Third-place-init', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_08_Third_Place_Prediction_Implementation/Project_01_Third_Place').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'Third-place-Result', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_08_Third_Place_Prediction_Implementation/Project_02_Third_Place_Results').then(({ Solution }) => { return new Solution(param.view) }); } },
    ]
};
// ......................................... 5
const Typescript_Lab: LinkInfo = {
    id: 'Typescript-Lab', env: ENV.DEFAULT, keywords: ['programming typescript computation thinking code'], subLinks: [
        { id: 'Typescript-syntax', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_09_Visualization_Typescript/01_Typescript_Basics').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Condition-Loop', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_09_Visualization_Typescript/02_Condition_Loop').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Data-Structure-and-Format', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_09_Visualization_Typescript/03_Data_Structure').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Function-and-Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_09_Visualization_Typescript/04_Function_Class').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Animal-Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_09_Visualization_Typescript/04_Function_Class/Animal').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Exercise', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../PART_09_Visualization_Typescript/05_Exercise').then(({ Solution }) => { return new Solution(param.containerID) }); } },

    ]
};
const DigitalMappingVizLab: LinkInfo = {
    id: 'Digital-Mapping-Lab', env: ENV.DEFAULT, keywords: ['tf', 'tensor', 'flow', 'js',], subLinks: [
        { id: 'Mapping-and-Visualization', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-Mapping').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        'divider',
        { id: 'template', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/01_Template').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'starter', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/02_Starter').then(({ Solution }) => { return new Solution(param.view) }); } },
        'divider',
        { id: 'CSV(TSV)-Point', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/03_CSV').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'JSON-Point', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/04_JSON').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'JSON-Line', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/04_JSON/MultiLineString').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'REST-API', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/05_REST_API').then(({ Solution }) => { return new Solution(param.view) }); } },
        'divider',
        { id: 'Polygon', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/06_Polygon').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'Polygon-Interaction', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/06_Polygon/MouserInteraction').then(({ Solution }) => { return new Solution(param.view) }); } },
        'divider',
        { id: 'Dynamic-Bins', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/DynamicBins').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'Graph-based-Clustering', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-Graph-Based-Clustering').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
         'divider',  
        { id: 'Discrete-Urban-Space-and-Connectivity', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-network').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        { id: 'NNA-Example', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-NNA').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Network-Preparation', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/UrbanNetwork/01_Interaction').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'Network-Search(BFS)', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/UrbanNetwork/02_Network').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'A-Start-Graph', env: ENV.JSAPI, keywords: [], load: (param) => { return import('../../PART_10_Web_Visualization_Digital_Mapping_Analysis/UrbanNetwork/03_NetworkAStart').then(({ Solution }) => { return new Solution(param.view) }); } },
        { id: 'A-Start-Grid', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-A-Star-Grid').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },

    ]
};
const ThreeVisualization: LinkInfo = {
    id: '3D-Viz-for-GIS', env: ENV.DEFAULT, keywords: ['3d visualization gis, point, line, polyline, polygon, mesh'], subLinks: [
        { id: 'Three-Starter', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_01_Starter-Three').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Three-Primitive', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_02_PrimitiveGeometry').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Point', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_03_Point').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Line-Polyline', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_04_LinePolyline').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Polygon', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_05_Polygon').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Box', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_06_Mesh').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Face', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_07_Mesh-Face').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Terrain', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_08_Mesh-Terrain').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Three-Mesh-Vertex-Color', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_10_Mesh-Vertex-Color').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Three-Mesh-Rhino-Geo', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_11_MeshRhinoGeo').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Three-bunny', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_12_Bunny').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Three-Voxel', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/LAB_Web_13_Voxel').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        'divider',
        { id: '[Link]-Code-Pen', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/Link-codepen-three').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        'divider',
        { id: '[Link]-Slow-zone-paper', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/Link-Slow-zone-paper').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        { id: 'Slow-zone-Point', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/Slowzone_Point').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Slow-zone-Line', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/Slowzone_Line').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Slow-zone-Polyline', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/Slowzone_Polyline').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Slow-zone-Polygon', env: ENV.THREE, keywords: [], load: (param) => { return import('../../PART_11_Web_Visualization_3D_for_GIS/Slowzone_Polygon').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        'divider',
        { id: 'Slow-zone-Viz-3D', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-Slow-zone-project-3d').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        { id: 'Slow-zone-Viz-2D', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-Slow-zone-project-2d').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
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
    ThreeVisualization,
    'divider',        
    { id: 'Reference', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Reference').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
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