import * as tf from '@tensorflow/tfjs'
import { RendererCanvas, Vector3, remap, } from '../../lib';


// import { NVector3, MathUtility } from '../../../lib';

export class Solution {
    public divHost: HTMLElement;
    public renderer: Renderer;
    constructor(id: string) {
        this.divHost = document.getElementById(id);

        // Center align
        this.divHost.style.display = 'flex';
        this.divHost.style.alignItems = 'center';

        const div = document.createElement('div');
        div.style.marginLeft = 'auto';
        div.style.marginRight = 'auto';
        div.style.backgroundColor = '#555';
        div.style.width = '600px';
        div.style.height = '350px';

        this.divHost.appendChild(div);

        // TODO
        // You code goes here for one time operation

        this.renderer = new Renderer(div);

        // !! you should execute it for rendering
        // this.start();
    }
    public destroy() {
        this.renderer.destroy();
        while (this.divHost.lastElementChild) {
            this.divHost.removeChild(this.divHost.lastElementChild);
        }
    }
}


export class Renderer extends RendererCanvas {
    tfModel: TFModel;
    accList: number[] = []
    lossList: number[] = []
    constructor(divHost: HTMLDivElement) {
        super(divHost);
        // TODO
        // You code goes here for one time operation

        this.tfModel = new TFModel();

        // !! you should execute it for rendering
        this.start();
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // TODO
        // You code goes here for the rending loop
        // this.tfModel.trainLoop();
        // console.log(this.tfModel.hist);

        let minX = 0
        let maxX = this.canvas.width;
        
        let minY = Number.MAX_VALUE;
        let maxY = Number.MIN_VALUE;
        

        for(let i = 0 ; i < this.tfModel.hist.length; ++i) {
            let acc = this.tfModel.hist[i].acc;
            let loss = this.tfModel.hist[i].loss;

            if (minY > acc) minY = acc;
            if (minY > loss) minY = loss;
            
            if (maxY < acc) maxY = acc;
            if (maxY < loss) maxY = loss;

            this.accList.push(acc);
            this.lossList.push(loss);
        }

        if (this.accList.length > 1) {

            for (let i = 0; i < this.accList.length; ++i) {
                let acc = this.accList[i];
                console.log(acc)


                let projected_X_Acc = remap(i, 0, this.accList.length,  0, this.canvas.width);
                let projected_Y_Acc = remap(acc, maxY, minY,  0, this.canvas.height);

                if (i == 0) {
                    ctx.beginPath();
                    ctx.moveTo(projected_X_Acc, projected_Y_Acc);
                } else {
                    ctx.lineTo(projected_X_Acc, projected_Y_Acc);
                }

            }
            ctx.strokeStyle = '#0f0'
            ctx.stroke();

        }

        console.log(this.lossList);

        if (this.lossList.length > 1) {

            for (let i = 0; i < this.lossList.length; ++i) {
                let loss = this.lossList[i];
                console.log(loss)

                let projected_X_loss = remap(i, 0, this.lossList.length,  0, this.canvas.width);
                let projected_Y_loss = remap(loss, minY, maxY,  0, this.canvas.height);

                if (i === 0) {
                    // ctx.beginPath();
                    // ctx.moveTo(projected_X_loss, projected_Y_loss);
                } else {
                    // ctx.lineTo(projected_X_loss, projected_Y_loss);
                    ctx.beginPath();
                    ctx.arc(projected_X_loss, projected_Y_loss, 1, 0 ,3.14 *2);
                    ctx.closePath();
                    ctx.strokeStyle = '#f00'
                    ctx.stroke();
                }

            }
            ctx.strokeStyle = '#f00'
            ctx.stroke();

        }

        

        // !! can stop render after this frame.
        // this.isStatic = true;
    }
}


class TFModel {
    model: tf.Sequential;
    inputsTensor: tf.Tensor<tf.Rank.R2>;
    labelsTensor: tf.Tensor<tf.Rank.R2>;
    hist: any = [];
    isTraining = false;

    // xTrain = tf.tensor2d([
    //     [0.0, 0.0],
    //     [1.0, 0.0],
    //     [0.0, 1.0],
    //     [1.0, 1.0]
    // ]);
    // yTrain = tf.tensor2d([
    //     [0.0],
    //     [1.0],
    //     [1.0],
    //     [0.0]
    // ]);
    constructor() {
        const d = getIrisData();
        tf.util.shuffle(d);


        // console.log(d);

        const inputs = [];
        for (let i = 0; i < d.length; ++i) {
            let row = [];
            for (let j = 0; j < d[i].length - 1; ++j) {
                row.push(d[i][j]);
            }
            inputs.push(row);
        }

        const labels = []; //  d.map((d: number[]) => [d[d.length - 1]]);
        for (let i = 0; i < d.length; ++i) {
            if (d[i][d[i].length - 1] === 0) {
                labels.push([1, 0, 0]);
            } else if (d[i][d[i].length - 1] === 1) {
                labels.push([0, 1, 0]);
            } else if (d[i][d[i].length - 1] === 2) {
                labels.push([0, 0, 1]);
            }

        }

        // console.log(inputs);
        // console.log(labels);

        // console.log('tensor......................');
        this.inputsTensor = tf.tensor2d(inputs);
        this.labelsTensor = tf.tensor2d(labels);
        // console.log(this.inputsTensor);
        // console.log(this.labelsTensor);
        this.inputsTensor.print();
        this.labelsTensor.print();

        this.model = tf.sequential();

        // console.log(this.inputsTensor.shape[1]);

        const hidden = tf.layers.dense({
            inputShape: [this.inputsTensor.shape[1]],
            units: 10,
            activation: 'sigmoid',
        });
        const output = tf.layers.dense({
            // inputShape: [10],
            units: 3,
            activation: 'softmax',
        });
        this.model.add(hidden);
        this.model.add(output);
        this.model.compile({
            optimizer: tf.train.adam(),
            // loss: tf.losses.meanSquaredError,
            // metrics: ['mse'],
            loss: tf.losses.softmaxCrossEntropy,  // 'categoricalCrossentropy',
            metrics: ['accuracy'],
        });
        this.model.summary();
        // tfvis.show.modelSummary({ name: 'Model Summary' }, this.model);

        this.isTraining = true;
        this.trainLoop();
    }
    public async trainLoop() {
        if (!this.isTraining) return;

        // for saving the model
        // await this.model.save('downloads://my-model');
        // const saveResults = await this.model.save('localstorage://ml/my-model-1');
        // console.log(saveResults);

        this.train().then((result: any) => {
            // console.log(result.history.loss[0]);
            this.hist = result.history;
            console.log(result.history)
            setTimeout(() => this.trainLoop(), 1);
        });
    }
    public async train() {
        return await this.model.fit(this.inputsTensor, this.labelsTensor, {
            // batchSize: 100,
            epochs: 1,
            shuffle: true,
            validationData: [this.inputsTensor, this.labelsTensor],
        });
    }
}


const getIrisData = () => {
    return [
        [5.1, 3.5, 1.4, 0.2, 0], [4.9, 3.0, 1.4, 0.2, 0], [4.7, 3.2, 1.3, 0.2, 0],
        [4.6, 3.1, 1.5, 0.2, 0], [5.0, 3.6, 1.4, 0.2, 0], [5.4, 3.9, 1.7, 0.4, 0],
        [4.6, 3.4, 1.4, 0.3, 0], [5.0, 3.4, 1.5, 0.2, 0], [4.4, 2.9, 1.4, 0.2, 0],
        [4.9, 3.1, 1.5, 0.1, 0], [5.4, 3.7, 1.5, 0.2, 0], [4.8, 3.4, 1.6, 0.2, 0],
        [4.8, 3.0, 1.4, 0.1, 0], [4.3, 3.0, 1.1, 0.1, 0], [5.8, 4.0, 1.2, 0.2, 0],
        [5.7, 4.4, 1.5, 0.4, 0], [5.4, 3.9, 1.3, 0.4, 0], [5.1, 3.5, 1.4, 0.3, 0],
        [5.7, 3.8, 1.7, 0.3, 0], [5.1, 3.8, 1.5, 0.3, 0], [5.4, 3.4, 1.7, 0.2, 0],
        [5.1, 3.7, 1.5, 0.4, 0], [4.6, 3.6, 1.0, 0.2, 0], [5.1, 3.3, 1.7, 0.5, 0],
        [4.8, 3.4, 1.9, 0.2, 0], [5.0, 3.0, 1.6, 0.2, 0], [5.0, 3.4, 1.6, 0.4, 0],
        [5.2, 3.5, 1.5, 0.2, 0], [5.2, 3.4, 1.4, 0.2, 0], [4.7, 3.2, 1.6, 0.2, 0],
        [4.8, 3.1, 1.6, 0.2, 0], [5.4, 3.4, 1.5, 0.4, 0], [5.2, 4.1, 1.5, 0.1, 0],
        [5.5, 4.2, 1.4, 0.2, 0], [4.9, 3.1, 1.5, 0.1, 0], [5.0, 3.2, 1.2, 0.2, 0],
        [5.5, 3.5, 1.3, 0.2, 0], [4.9, 3.1, 1.5, 0.1, 0], [4.4, 3.0, 1.3, 0.2, 0],
        [5.1, 3.4, 1.5, 0.2, 0], [5.0, 3.5, 1.3, 0.3, 0], [4.5, 2.3, 1.3, 0.3, 0],
        [4.4, 3.2, 1.3, 0.2, 0], [5.0, 3.5, 1.6, 0.6, 0], [5.1, 3.8, 1.9, 0.4, 0],
        [4.8, 3.0, 1.4, 0.3, 0], [5.1, 3.8, 1.6, 0.2, 0], [4.6, 3.2, 1.4, 0.2, 0],
        [5.3, 3.7, 1.5, 0.2, 0], [5.0, 3.3, 1.4, 0.2, 0], [7.0, 3.2, 4.7, 1.4, 1],
        [6.4, 3.2, 4.5, 1.5, 1], [6.9, 3.1, 4.9, 1.5, 1], [5.5, 2.3, 4.0, 1.3, 1],
        [6.5, 2.8, 4.6, 1.5, 1], [5.7, 2.8, 4.5, 1.3, 1], [6.3, 3.3, 4.7, 1.6, 1],
        [4.9, 2.4, 3.3, 1.0, 1], [6.6, 2.9, 4.6, 1.3, 1], [5.2, 2.7, 3.9, 1.4, 1],
        [5.0, 2.0, 3.5, 1.0, 1], [5.9, 3.0, 4.2, 1.5, 1], [6.0, 2.2, 4.0, 1.0, 1],
        [6.1, 2.9, 4.7, 1.4, 1], [5.6, 2.9, 3.6, 1.3, 1], [6.7, 3.1, 4.4, 1.4, 1],
        [5.6, 3.0, 4.5, 1.5, 1], [5.8, 2.7, 4.1, 1.0, 1], [6.2, 2.2, 4.5, 1.5, 1],
        [5.6, 2.5, 3.9, 1.1, 1], [5.9, 3.2, 4.8, 1.8, 1], [6.1, 2.8, 4.0, 1.3, 1],
        [6.3, 2.5, 4.9, 1.5, 1], [6.1, 2.8, 4.7, 1.2, 1], [6.4, 2.9, 4.3, 1.3, 1],
        [6.6, 3.0, 4.4, 1.4, 1], [6.8, 2.8, 4.8, 1.4, 1], [6.7, 3.0, 5.0, 1.7, 1],
        [6.0, 2.9, 4.5, 1.5, 1], [5.7, 2.6, 3.5, 1.0, 1], [5.5, 2.4, 3.8, 1.1, 1],
        [5.5, 2.4, 3.7, 1.0, 1], [5.8, 2.7, 3.9, 1.2, 1], [6.0, 2.7, 5.1, 1.6, 1],
        [5.4, 3.0, 4.5, 1.5, 1], [6.0, 3.4, 4.5, 1.6, 1], [6.7, 3.1, 4.7, 1.5, 1],
        [6.3, 2.3, 4.4, 1.3, 1], [5.6, 3.0, 4.1, 1.3, 1], [5.5, 2.5, 4.0, 1.3, 1],
        [5.5, 2.6, 4.4, 1.2, 1], [6.1, 3.0, 4.6, 1.4, 1], [5.8, 2.6, 4.0, 1.2, 1],
        [5.0, 2.3, 3.3, 1.0, 1], [5.6, 2.7, 4.2, 1.3, 1], [5.7, 3.0, 4.2, 1.2, 1],
        [5.7, 2.9, 4.2, 1.3, 1], [6.2, 2.9, 4.3, 1.3, 1], [5.1, 2.5, 3.0, 1.1, 1],
        [5.7, 2.8, 4.1, 1.3, 1], [6.3, 3.3, 6.0, 2.5, 2], [5.8, 2.7, 5.1, 1.9, 2],
        [7.1, 3.0, 5.9, 2.1, 2], [6.3, 2.9, 5.6, 1.8, 2], [6.5, 3.0, 5.8, 2.2, 2],
        [7.6, 3.0, 6.6, 2.1, 2], [4.9, 2.5, 4.5, 1.7, 2], [7.3, 2.9, 6.3, 1.8, 2],
        [6.7, 2.5, 5.8, 1.8, 2], [7.2, 3.6, 6.1, 2.5, 2], [6.5, 3.2, 5.1, 2.0, 2],
        [6.4, 2.7, 5.3, 1.9, 2], [6.8, 3.0, 5.5, 2.1, 2], [5.7, 2.5, 5.0, 2.0, 2],
        [5.8, 2.8, 5.1, 2.4, 2], [6.4, 3.2, 5.3, 2.3, 2], [6.5, 3.0, 5.5, 1.8, 2],
        [7.7, 3.8, 6.7, 2.2, 2], [7.7, 2.6, 6.9, 2.3, 2], [6.0, 2.2, 5.0, 1.5, 2],
        [6.9, 3.2, 5.7, 2.3, 2], [5.6, 2.8, 4.9, 2.0, 2], [7.7, 2.8, 6.7, 2.0, 2],
        [6.3, 2.7, 4.9, 1.8, 2], [6.7, 3.3, 5.7, 2.1, 2], [7.2, 3.2, 6.0, 1.8, 2],
        [6.2, 2.8, 4.8, 1.8, 2], [6.1, 3.0, 4.9, 1.8, 2], [6.4, 2.8, 5.6, 2.1, 2],
        [7.2, 3.0, 5.8, 1.6, 2], [7.4, 2.8, 6.1, 1.9, 2], [7.9, 3.8, 6.4, 2.0, 2],
        [6.4, 2.8, 5.6, 2.2, 2], [6.3, 2.8, 5.1, 1.5, 2], [6.1, 2.6, 5.6, 1.4, 2],
        [7.7, 3.0, 6.1, 2.3, 2], [6.3, 3.4, 5.6, 2.4, 2], [6.4, 3.1, 5.5, 1.8, 2],
        [6.0, 3.0, 4.8, 1.8, 2], [6.9, 3.1, 5.4, 2.1, 2], [6.7, 3.1, 5.6, 2.4, 2],
        [6.9, 3.1, 5.1, 2.3, 2], [5.8, 2.7, 5.1, 1.9, 2], [6.8, 3.2, 5.9, 2.3, 2],
        [6.7, 3.3, 5.7, 2.5, 2], [6.7, 3.0, 5.2, 2.3, 2], [6.3, 2.5, 5.0, 1.9, 2],
        [6.5, 3.0, 5.2, 2.0, 2], [6.2, 3.4, 5.4, 2.3, 2], [5.9, 3.0, 5.1, 1.8, 2],
    ];
};