import { tensor2d, tidy, Tensor2D, loadLayersModel } from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
// import { NVector3 } from '../../Lib/NVector3';

export class SmartDrawing {
    static CLASS_TYPE = {
        0: 'CIRCLE',
        1: 'TRI-GON',
        2: 'ARROW_SINGLE',
        3: 'ARROW_DOUBLE',
        4: 'RECTANGLE',
        5: 'TEXT',
        6: 'CURVE',
        7: 'HEART',
        8: 'CLOUD'
    };

    modelLogisticRegression: tf.LayersModel
    modelMultiClassification: tf.LayersModel
    isLoaded: boolean = false;
    constructor() {
        LoadModelFromPublic().then( (models) =>{
            [ this.modelLogisticRegression, this.modelMultiClassification ]= models;
            this.isLoaded = true;
            console.log(this);
        });
        console.log('executing Smart Drawing example');
    }
    public predictByLogisticRegression(data: number[]) {
        if (this.modelLogisticRegression === undefined) { console.error('no model loaded'); return; }
        console.log('==============================');
        return tidy(() => {
            const d = tensor2d([data]);
            const predictOut = this.modelLogisticRegression.predict(d) as Tensor2D;
            const score = predictOut.dataSync();
            return this.PredictionPostProcessingLogisticRegression(score[0]);
        });
    }
    private PredictionPostProcessingLogisticRegression(d: number) {
        const result = Math.floor(d + 0.5);
        return SmartDrawing.CLASS_TYPE[result];
    }
    public predictByMultiClassification(data: number[]) {
        if (this.modelMultiClassification === undefined) { console.error('no model loaded'); return; }
        return tidy(() => {
            // console.log(data);
            const d = tf.tensor2d([data]);
            // console.log(d.toFloat());
            const predictOut = this.modelMultiClassification.predict(d) as Tensor2D;
            // console.log(predictOut);
            // console.log(predictOut.toString());
            // console.log('lllllllllllllllll');
            const rankings = true;
            if (rankings) {
                const logits = Array.from(predictOut.dataSync());
                const rankingIndex = getIndexBySortDescending(logits as number[]);
                // console.log(logits);
                // console.log(rankingIndex);
                // console.log('#####################');
                const outText: string[] = [];
                for (let i of rankingIndex) {
                    const probability: number = logits[i] as number;
                    const text = 'class:' + SmartDrawing.CLASS_TYPE[i] + ', probability:' + probability.toFixed(5);
                    console.log(text);
                    outText.push(text);
                }
                // this.UpdateDivWithText(outText);
            }

            const winner = predictOut.argMax(-1).dataSync()[0];
            return SmartDrawing.CLASS_TYPE[winner];
            // console.log(this.classStringsMultiClassification[winner]);
            // return this.PredictionPostProcessingLogisticRegression(scoreArray[0]);
        });
    }
}

const LoadModelFromPublic = async () => {
    // http://www.njstudio.co.kr/ml/sm/modelLogisticRegression0/model.json
    // let file = 'ML/SmartDrawing/modelLogisticRegression0/model.json';
    let file = `https://raw.githubusercontent.com/NamjuLee/data/master/smart-drawing/model/modelLogisticRegression0/model.json`;
    // let file = 'ML/SmartDrawing/new/model.json';
    const modelLogisticRegression = await loadLayersModel(file);

    file = `https://raw.githubusercontent.com/NamjuLee/data/master/smart-drawing/model/modelMultiClassification0/model.json`;
    const modelMultiClassification = await loadLayersModel(file);
    return [modelLogisticRegression , modelMultiClassification]
};
const getIndexBySortDescending = (d: number[]) => {
    const indices = new Array(d.length);
    for (let i = 0; i < d.length; ++i) { indices[i] = i; }
    indices.sort((a, b) => { return d[a] > d[b] ? -1 : d[a] < d[b] ? 1 : 0; });
    return indices;
}