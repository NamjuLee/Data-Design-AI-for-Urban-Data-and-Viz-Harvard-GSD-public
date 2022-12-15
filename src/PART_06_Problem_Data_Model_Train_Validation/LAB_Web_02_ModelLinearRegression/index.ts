import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

import { LinearRegression, LinearRegressionGradientDescent, rSquared } from '../../lib';

export class Solution {
    public destroy() { }
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

        console.log('Playground done!');
    }
};

/*
Reference:
https://www.tensorflow.org/js
https://www.tensorflow.org/js/tutorials
https://www.tensorflow.org/js/models
https://js.tensorflow.org/api/latest/
*/