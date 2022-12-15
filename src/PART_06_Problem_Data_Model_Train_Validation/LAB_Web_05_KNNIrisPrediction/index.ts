import { shuffleArray } from '../../lib';
export class Solution {
    public divHost: HTMLElement;
    constructor(id: string) {

        this.knnEx();
        // this.irisPrediction();
    }
    public knnEx() {
        const XData = [[0, 0], [0, 1], [1, 2], [1, 3]]
        const yData = [0,       0,      1,      1]

        const val = [[0, 0]]

        const knn = new KNN(XData, yData);
        const result = knn.predict(val);
        
        console.log(result, KNN);
    }
    public irisPrediction(){
        const data =  getIrisData();

        shuffleArray(data);

        const inputs = [];
        const labels = [];
        for (let i = 0; i < data.length; ++i) {
            let row = [];
            for (let j = 0; j < data[i].length - 1; ++j) {
                row.push(data[i][j]);
            }
            inputs.push(row);
            labels.push(data[i][data[i].length -1])
        }

        console.log('Iris data');
        console.log(inputs)

        const numTraining = 0.6;

        const train_inputs_data = inputs.splice(0, Math.floor(inputs.length * numTraining));
        const train_labels_data = labels.splice(0, Math.floor(labels.length * numTraining));

        const val_inputs_data = inputs;
        const val_labels_data = labels;

        console.log('train data inputs');
        console.log(train_inputs_data);
        console.log('train data labels');
        console.log(train_labels_data);

        console.log('validation data inputs');
        console.log(val_inputs_data);
        console.log('validation data labels');
        console.log(val_labels_data);

        const knn = new KNN(train_inputs_data, train_labels_data);
        const result = knn.predict(val_inputs_data);
        
        console.log('Prediction :', result);
        console.log('Ground truth ',val_labels_data);

        let failure = [];
        for(let i = 0 ; i < val_labels_data.length; ++i) {
            if (val_labels_data[i] !== result[i]) {
                failure.push(i);
            }
        }
        console.log( String((100 - ( failure.length / val_labels_data.length * 100)).toFixed(2)) + '% accuracy');
        console.log('index:', failure);

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



const squaredEuclidean = (p: number[], q: number[]) => {
    let d = 0;
    for (let i = 0; i < p.length; i++) {
      d += (p[i] - q[i]) * (p[i] - q[i]);
    }
    return d;
  }
  
  const euclidean = (p: number[], q: number[]) => {
    return Math.sqrt(squaredEuclidean(p, q));
  }



export class KNN {
   kdTree: Tree;
   k: any;
   classes: any;
   isEuclidean: any;
  constructor(dataset, labels, options = {}) {
    if (dataset === true) {
      const model = labels;
      this.kdTree = new Tree(model.kdTree, options);
      this.k = model.k;
      this.classes = new Set(model.classes);
      this.isEuclidean = model.isEuclidean;
      return;
    }
    const classes = new Set(labels);
    // const { distance = euclidean, k = classes.size + 1 } = options;
    const k = classes.size + 1
    const distance = euclidean;

    const points = new Array(dataset.length);
    for (let i = 0; i < points.length; ++i) {
      points[i] = dataset[i].slice();
    }

    for (let i = 0; i < labels.length; ++i) {
      points[i].push(labels[i]);
    }

    this.kdTree = new Tree(points, distance);
    this.k = k;
    this.classes = classes;
    this.isEuclidean = distance === euclidean;
  }
  predict(dataset) {
    if (Array.isArray(dataset)) {
      if (typeof dataset[0] === 'number') {
        return getSinglePrediction(this, dataset);
      } else if (
        Array.isArray(dataset[0]) &&
        typeof dataset[0][0] === 'number'
      ) {
        const predictions = new Array(dataset.length);
        for (let i = 0; i < dataset.length; i++) {
          predictions[i] = getSinglePrediction(this, dataset[i]);
        }
        return predictions;
      }
    }
    throw new TypeError('dataset error');
  }
}

const getSinglePrediction = (modelKnn, currentCase) => {
  let nearestPoints = modelKnn.kdTree.nearest(currentCase, modelKnn.k);
  let pointsPerClass = {};
  let predictedClass = -1;
  let maxPoints = -1;
  let lastElement = nearestPoints[0][0].length - 1;

  for (let element of modelKnn.classes) {
    pointsPerClass[element] = 0;
  }

  for (let i = 0; i < nearestPoints.length; ++i) {
    let currentClass = nearestPoints[i][0][lastElement];
    let currentPoints = ++pointsPerClass[currentClass];
    if (currentPoints > maxPoints) {
      predictedClass = currentClass;
      maxPoints = currentPoints;
    }
  }

  return predictedClass;
}
class Node {
    obj: any;
    left: any;
    right: any;
    parent: any;
    dimensions: any;
    constructor(obj, dimension, parent) {
      this.obj = obj;
      this.left = null;
      this.right = null;
      this.parent = parent;
      this.dimensions = dimension;
    }
}
class Tree {
    root: any;
    dimensions: any;
    metric: any;
    constructor(points, metric) {
      // If points is not an array, assume we're loading a pre-built tree
      if (!Array.isArray(points)) {
        this.dimensions = points.dimensions;
        this.root = points;
        restoreParent(this.root);
      } else {
        this.dimensions = new Array(points[0].length);
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] = i;
        }
        this.root = buildTree(points, 0, null, this.dimensions);
      }
      this.metric = metric;
    }
    private nearest(point, maxNodes, maxDistance) {
      const metric = this.metric;
      const dimensions = this.dimensions;
      let i;
  
      const bestNodes = new BinaryHeap((e) => -e[1]);
  
      function nearestSearch(node) {
        const dimension = dimensions[node.dimension];
        const ownDistance = metric(point, node.obj);
        const linearPoint = {};
        let bestChild, linearDistance, otherChild, i;
  
        function saveNode(node, distance) {
          bestNodes.push([node, distance]);
          if (bestNodes.size() > maxNodes) {
            bestNodes.pop();
          }
        }
  
        for (i = 0; i < dimensions.length; i += 1) {
          if (i === node.dimension) {
            linearPoint[dimensions[i]] = point[dimensions[i]];
          } else {
            linearPoint[dimensions[i]] = node.obj[dimensions[i]];
          }
        }
  
        linearDistance = metric(linearPoint, node.obj);
  
        if (node.right === null && node.left === null) {
          if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
            saveNode(node, ownDistance);
          }
          return;
        }
  
        if (node.right === null) {
          bestChild = node.left;
        } else if (node.left === null) {
          bestChild = node.right;
        } else {
          if (point[dimension] < node.obj[dimension]) {
            bestChild = node.left;
          } else {
            bestChild = node.right;
          }
        }
  
        nearestSearch(bestChild);
  
        if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
          saveNode(node, ownDistance);
        }
  
        if (
          bestNodes.size() < maxNodes ||
          Math.abs(linearDistance) < bestNodes.peek()[1]
        ) {
          if (bestChild === node.left) {
            otherChild = node.right;
          } else {
            otherChild = node.left;
          }
          if (otherChild !== null) {
            nearestSearch(otherChild);
          }
        }
      }
  
      if (maxDistance) {
        for (i = 0; i < maxNodes; i += 1) {
          bestNodes.push([null, maxDistance]);
        }
      }
  
      if (this.root) {
        nearestSearch(this.root);
      }
  
      const result = [];
      for (i = 0; i < Math.min(maxNodes, bestNodes.content.length); i += 1) {
        if (bestNodes.content[i][0]) {
          result.push([bestNodes.content[i][0].obj, bestNodes.content[i][1]]);
        }
      }
      return result;
    }
  }
  
const toJSONImpl = (src): Node => {
    const dest = new Node(src.obj, src.dimension, null);
    if (src.left) dest.left = toJSONImpl(src.left);
    if (src.right) dest.right = toJSONImpl(src.right);
    return dest;
}
  
const buildTree = (points, depth, parent, dimensions) => {
    const dim = depth % dimensions.length;
  
    if (points.length === 0) {
      return null;
    }
    if (points.length === 1) {
      return new Node(points[0], dim, parent);
    }
  
    points.sort((a, b) => a[dimensions[dim]] - b[dimensions[dim]]);
  
    const median = Math.floor(points.length / 2);
    const node = new Node(points[median], dim, parent);
    node.left = buildTree(points.slice(0, median), depth + 1, node, dimensions);
    node.right = buildTree(points.slice(median + 1), depth + 1, node, dimensions);
  
    return node;
  }
  
const restoreParent = (root) => {
    if (root.left) {
      root.left.parent = root;
      restoreParent(root.left);
    }
  
    if (root.right) {
      root.right.parent = root;
      restoreParent(root.right);
    }
}
  


  // Binary heap implementation from:
  // http://eloquentjavascript.net/appendix2.html
  class BinaryHeap {
    content: any;
    scoreFunction: any;
    constructor(scoreFunction) {
      this.content = [];
      this.scoreFunction = scoreFunction;
    }
  
    push(element) {
      // Add the new element to the end of the array.
      this.content.push(element);
      // Allow it to bubble up.
      this.bubbleUp(this.content.length - 1);
    }
  
    pop() {
      // Store the first element so we can return it later.
      let result = this.content[0];
      // Get the element at the end of the array.
      let end = this.content.pop();
      // If there are any elements left, put the end element at the
      // start, and let it sink down.
      if (this.content.length > 0) {
        this.content[0] = end;
        this.sinkDown(0);
      }
      return result;
    }
  
    peek() {
      return this.content[0];
    }
  
    size() {
      return this.content.length;
    }
  
    bubbleUp(n) {
      // Fetch the element that has to be moved.
      let element = this.content[n];
      // When at 0, an element can not go up any further.
      while (n > 0) {
        // Compute the parent element's index, and fetch it.
        const parentN = Math.floor((n + 1) / 2) - 1;
        const parent = this.content[parentN];
        // Swap the elements if the parent is greater.
        if (this.scoreFunction(element) < this.scoreFunction(parent)) {
          this.content[parentN] = element;
          this.content[n] = parent;
          // Update 'n' to continue at the new position.
          n = parentN;
        } else {
          // Found a parent that is less, no need to move it further.
          break;
        }
      }
    }
  
    sinkDown(n) {
      // Look up the target element and its score.
      const length = this.content.length;
      const element = this.content[n];
      const elemScore = this.scoreFunction(element);
  
      while (true) {
        let child1Score;
        // Compute the indices of the child elements.
        const child2N = (n + 1) * 2;
        const child1N = child2N - 1;
        // This is used to store the new position of the element,
        // if any.
        let swap = null;
        // If the first child exists (is inside the array)...
        if (child1N < length) {
          // Look it up and compute its score.
          const child1 = this.content[child1N];
          child1Score = this.scoreFunction(child1);
          // If the score is less than our element's, we need to swap.
          if (child1Score < elemScore) {
            swap = child1N;
          }
        }
        // Do the same checks for the other child.
        if (child2N < length) {
          const child2 = this.content[child2N];
          const child2Score = this.scoreFunction(child2);
          if (child2Score < (swap === null ? elemScore : child1Score)) {
            swap = child2N;
          }
        }
  
        // If the element needs to be moved, swap it, and continue.
        if (swap !== null) {
          this.content[n] = this.content[swap];
          this.content[swap] = element;
          n = swap;
        } else {
          // Otherwise, we are done.
          break;
        }
      }
    }
  }