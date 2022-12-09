import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

import { LinearRegression, LinearRegressionGradientDescent, rSquared } from '../../lib';

export class Solution {
    public destroy() {
        
    }
    constructor(id: string) {
    //  https://js.tensorflow.org/api/latest/
        console.log("Let's learn TF JS !!");
        console.log("==============================");



        const x = [1, 2, 3, 4, 5];
        const y = [0, 5, 10, 15, 20];

        const model = new LinearRegression()
        model.fit(x, y);
        const result = model.predict([2.5]);
        console.log(result, model.weight, model.bias);


        const modelGD = new LinearRegressionGradientDescent()
        modelGD.fit(x, y, 500);
        const resultGD = modelGD.predict([2.5]);
        console.log(resultGD, modelGD.weight, modelGD.bias);






        const X = [1, 2, 3, 4];
        const Y = [1, 3, 5, 7];

        const val = [3]
 
        linearRegression(X, Y, val);
        // linearRegressionTF(X, Y, val);

        console.log('Playground done!');
    }
};

const linearRegressionTF = (X: number[], Y: number[], val: number[]) => {
    // Define a model for linear regression.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const x_train = tf.tensor2d(X, [4, 1]);
    const y_train = tf.tensor2d(Y, [4, 1]);

    x_train.print();
    y_train.print();

    const x_val = tf.tensor2d([3], [1, 1])
    console.log('prediction of ', x_val.toString() , 'is ...'); 

    // Train the model using the data.
    model.fit(x_train, y_train, { epochs: 100 }).then(() => {
        // Use the model to do inference on a data point the model hasn't seen before:
        // Open the browser devtools to see the output
        (model.predict(x_val) as any).print();
    });






};


const linearRegression = (X: number[], Y: number[], val: number[]) => {
    const lr = new LinearRegression();
    lr.fit(X, Y);

    const result = lr.predict(val);
    console.log(result);

    // x = [5, 7, 8, 7, 2, 17, 2, 9, 4, 11, 12, 9, 6]
    // y = [99, 86, 87, 88, 111, 86, 103, 87, 94, 78, 77, 85, 86]

    // 다시 봐라 이거 맞는지 확인
    console.log(rSquared(X, Y, lr.bias));
}

/*
Reference:
https://www.tensorflow.org/js
https://www.tensorflow.org/js/tutorials
https://www.tensorflow.org/js/models
https://js.tensorflow.org/api/latest/


*/