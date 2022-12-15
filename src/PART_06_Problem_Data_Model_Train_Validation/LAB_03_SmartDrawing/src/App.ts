import { SmartDrawing } from './Core/SmartDrawing';
import { Vector3, dotProduct, normalize, RendererCanvas, getInterpolatedArray  } from 'njscore'

export class AppSmartDrawing {
    rendererCanvas: RendererCanvas;
    smartDrawing: SmartDrawing;

    vec: number[][] = [];
    divHost: HTMLDivElement;
    divText: HTMLDivElement;
    constructor(id: string) {
        this.divHost = document.getElementById(id) as HTMLDivElement;

        const container = document.createElement('div');
        this.divHost.appendChild(container);
        container.id = 'container-video'
        container.style.alignItems = 'center';
        container.style.marginTop = '80px';
        container.style.marginLeft = 'auto';
        container.style.marginRight = 'auto';
        container.style.width = '300px';
        container.style.height = '400px';


        this.smartDrawing = new SmartDrawing()
        this.rendererCanvas = new RendererCanvas(container);
        this.rendererCanvas.canvas.style.position = 'unset';

        this.rendererCanvas.canvas.width = 300;
        this.rendererCanvas.canvas.height = 300;
        this.rendererCanvas.canvas.style.background = '#999';

        this.divText = document.createElement('div');
        this.divText.textContent = '*** FROM DEEP LEARNING MODEL B ***';
        container.append(this.divText);

        this.rendererCanvas.start();
        this.rendererCanvas.render = (ctx: CanvasRenderingContext2D) => this.render(ctx);
        this.rendererCanvas.mouseDrag = (x: number, y: number) => this.mouseDrag(x, y);
        this.rendererCanvas.mouseUp = (x: number, y: number) => this.mouseUp(x, y);
    }
    public render = (ctx: CanvasRenderingContext2D) => {
      // console.log(this.vec)
        for(let i = 0; i < this.vec.length; ++i) {
            ctx.fillStyle = 'rgba(255, 0, 0, 0.15)';
            ctx.beginPath();
            ctx.arc(this.vec[i][0], this.vec[i][1], 5, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }
    public mouseDrag = (x: number, y: number) => {
        // console.log(x, y, this);
        this.vec.push([x, y])
    }
    public mouseUp = (x: number, y: number) => {
       this.Predict(this.vec);
       this.vec = [];
    }
    public Predict(d: number[][]) {
        const vs = [];
        for (let i of d) { vs.push(new Vector3(i[0], i[1], 0)); }
        // console.log(vs);
        const dotPrediction = computeDotProducts(vs);
        // console.log(dotPrediction);
        const dotValueInterpolated = getInterpolatedArray(dotPrediction, 501);
        console.log(dotValueInterpolated);
        // const dotValueInterpolated = dotPrediction
        // console.log(this.GetInterpolatedArray(dotPrediction, 10));
        // console.log(this.scene.annotationInstance.implementation.app.model.appAnnotation.addon.smartDrawing);
        console.log('*** FROM DEEP LEARNING MODELS ***');
        const predictionLosisticR = this.smartDrawing.predictByLogisticRegression(dotValueInterpolated);
        console.debug(`pridiction:%c ${predictionLosisticR} from LR Model`, 'background: #ddb137; color: black');
        const [predictionMultiC, outText] = this.smartDrawing.predictByMultiClassification(dotValueInterpolated);
        console.debug(`pridiction:%c ${predictionMultiC} from MC model`, 'background: #4e2c7e; color: white');

        // console.log(d, predictionMultiC);
        this.updateDivWithText(outText);
        // this.firebaseWrapper.sendData({
        //     class: predictionMultiC,
        //     vec: d
        // });

        return predictionMultiC;

        // console.log(prediction);
        // this.GetShapeFromPrediction(prediction, vs);
    }
    private updateDivWithText(outText: string[]) {
      let text = `<p>*** FROM DEEP LEARNING MODEL B *** </p>`;
      for (let i = 0; i < outText.length; ++i) {
          text += `<p> ${outText[i]}</p>`;
      }
      this.divText.innerHTML = text;
  }
    public destroy() {
      try {
          while (this.divHost !== undefined && this.divHost.lastElementChild !== undefined) {
              this.divHost.removeChild(this.divHost.lastElementChild);
          }
      } catch (error) {
          
      }
  }
}

const computeDotProducts = (vs: Vector3[]) => {
    let out: number[] = [];
    for (let i = 0; i < vs.length; ++i) {
      if (i < vs.length - 1) {
        let v0 = new Vector3(vs[i].x, vs[i].y, vs[i].z);
        let v1 = new Vector3(vs[i + 1].x, vs[i + 1].y, vs[i + 1].z);

        v1.x -= v0.x;
        v1.y -= v0.y;
        v1.z -= v0.z;

        let dot = dotProduct(new Vector3(1, 0, 0), normalize(v1));
        if (Number.isNaN(dot)) {
          out.push(out[out.length - 1]);
        } else {
          out.push(dot);
        }

      } else {
        let v0 = new Vector3(vs[i].x, vs[i].y, vs[i].z);
        let v1 = new Vector3(vs[0].x, vs[0].y, vs[0].z);

        v1.x -= v0.x;
        v1.y -= v0.y;
        v1.z -= v0.z;

        let dot = dotProduct(new Vector3(1, 0, 0), normalize(v1));
        if (Number.isNaN(dot)) {
          out.push(out[out.length - 1]);
        } else {
          out.push(dot);
        }
      }
    }
    return out;
}
