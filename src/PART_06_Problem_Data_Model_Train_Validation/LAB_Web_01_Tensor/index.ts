import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

export class Solution {
    public destroy() {
        
    }
    constructor(id: string) {
    //  https://js.tensorflow.org/api/latest/
        console.log("Let's learn TF JS !!");
        console.log("==============================");

        // ExeScalar();
        // ExeAdd();
        // ExeOperation();
        // Tensor01();
        // Tensor02();
        // Tensor03();
        // linearRegression();

        console.log('Playground done!');
    }
};

const ExeScalar = () => {
    // const d = tf.scalar(10);
    // console.log('scalar.....');
    // console.log(d);
    // d.print();
    // d.print(true);

    // const d2 = tf.tensor([1, 2, 3]);
    // d2.print();
    // d2.print(true);

    // const d3 = tf.tensor1d([1, 2, 3]);
    // d3.print();
    // d3.print(true);

    // const d4 = tf.tensor([[1, 2], [3, 4]]);
    // d4.print();
    // //    d4.print(true);

    // const d5 = tf.tensor2d([[1, 2], [3, 4]]);
    // d5.print();
    // //    d5.print(true);
    // //    d4.add(d5).print();
    // const d6 = tf.tensor2d([1, 2, 3, 4, 5, 6], [2, 3]);
    // d6.print();

    // const length = 30;
    // const data = new Float32Array(length);
    // for (let i = 0; i < length; ++i) { data[i] = i; }
    // const d7 = tf.tensor2d(data, [10, 3]);
    // d7.print();

    // const length2 = 18;
    // const data2 = new Float32Array(length2);
    // for (let i = 0; i < length2; ++i) { data2[i] = i; }
    // const d8 = tf.tensor3d(data2, [2, 3, 3]);
    // d8.print();
};
const ExeAdd = () => {
    // const d1 = tf.scalar(5);
    // const d2 = tf.tensor([1, 2, 3]).mul(d1);
    // d2.print();

    // const d3 = tf.tensor([1, 2, 3, 4, 5, 6], [2, 3]);
    // d3.print();
    // d3.mul(d1).print();
    // d3.add(d1).print();
    // d3.div(3).print();

    // // ..
    // const length = 30;
    // const data = new Float32Array(length);
    // for (let i = 0; i < length; ++i) { data[i] = i; }
    // const d4 = tf.tensor2d(data, [10, 3]);
    // d4.print();

    // const d5 = d4;
    // d5.print();

    // const d6 = d5.add(d4);
    // d6.print();

    // const d7 = d5.sub(d1);
    // d7.print();

};
const ExeOperation = () => {

    tf.tidy(() => {
        // const d1 = tf.tensor([1, 2, 3, 4, 5, 6], [2, 3], 'float32');
        // d1.print();

        // const d2 = tf.tensor([1, 2, 3, 4, 5, 6], [3, 2], 'float32');
        // d2.print();

        // d1.matMul(d2).print();

        // const d3 = d2.matMul(d1);
        // d3.print();

        // const d4 = tf.scalar(0.5);
        // d3.mul(d4).print();

        // const mathScore = tf.tensor1d([80, 90, 100, 80]);
        // const historyScore = tf.tensor1d([70, 70, 70, 70]);
        // mathScore.add(historyScore).div(2).print(); // print mean  // tensor num 10
        // mathScore.add(historyScore).div(2).abs().print(); // print mean  // tensor num 11

    });
    //
    console.log(tf.memory().numTensors);

};
const Tensor01 = () => {
    // let data = tf.tensor([0, 1, 2, 3], [2, 2]);
    // data.print();
    // // [[0, 1],
    // // [2, 3]]

    // data = tf.tensor([0, 1, 2, 3, 4, 5, 6, 7]);
    // data.print(); // [0, 1, 2, 3, 4, 5, 6, 7]

    // data = tf.tensor([0, 1, 2, 3, 4, 5, 6, 7], [2, 2, 2]);
    // data.print();
    // //     [[[0, 1],
    // //     [2, 3]],
    // //    [[4, 5],
    // //     [6, 7]]]
};
const Tensor02 = () => {
    // let data: number[] = [];
    // for (let i = 0; i < 15; ++i) {
    //     data.push(Math.random());
    // }
    // let shape = [3, 5];
    // let dataTensor = tf.tensor(data, shape);
    // dataTensor.print();

    // data = [];
    // for (let i = 0; i < 30; ++i) {
    //     data.push(Math.random() * 100);
    // }
    // shape = [2, 3, 5];
    // dataTensor = tf.tensor(data, shape, 'int32');
    // dataTensor.print();

    // dataTensor = tf.tensor3d(data, [2, 3, 5], 'int32');
    // dataTensor.print();
};
const Tensor03 = () => {
    // let data: number[] = [];
    // for (let i = 0; i < 150000; ++i) {
    //     data.push(Math.random());
    // }
    // let shape = [300, 500];
    // let dataTensor = tf.tensor(data, shape);
    // dataTensor.print();
    // console.log(tf.memory().numTensors);
};

const linearRegression = () => {
    // Define a model for linear regression.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const x_train = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const y_train = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    x_train.print();
    y_train.print();

    const x_val = tf.tensor2d([3], [1, 1])

    // Train the model using the data.
    model.fit(x_train, y_train, { epochs: 100 }).then(() => {
        // Use the model to do inference on a data point the model hasn't seen before:
        // Open the browser devtools to see the output
        (model.predict(x_val) as any).print();
    });

};



/*
Reference:
https://www.tensorflow.org/js
https://www.tensorflow.org/js/tutorials
https://www.tensorflow.org/js/models
https://js.tensorflow.org/api/latest/


*/