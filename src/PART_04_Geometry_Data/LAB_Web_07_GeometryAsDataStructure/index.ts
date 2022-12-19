import { Vector, Color, Point, Line, Curve, Polyline, Polygon, Mesh}from './GeometryAsDataStructure';

export class Solution  {

    constructor(div: HTMLElement) {

        // ................................ vector
        let v0 = new Vector(2, 3, 4);
        let v1 = new Vector(5, 6, 7);

        console.log('distance between v0 and v1: ', Vector.distance(v0, v1));
        console.log(v0.toString());
        console.log(v0.toJson());


        // ................................ point
        let p0 = new Point(0, 0, 0);
        let p1 = new Point(3, 4, 5);

        console.log('distance from p0 to p1', p0.distanceTo(p1))
        p0.setColor(255, 0, 255);
        console.log(p0.getHex());


        // ................................ color
        const myColorA = new Color(25, 100, 25, 1)
        console.log(myColorA.toHex());
        console.log(myColorA.toHSV()); // http://colorizer.org/


        // ................................ line
        let point0 = new Point(0, 0, 0);
        let point1 = new Point(2.34, 5.4, 20);
        let ln = new Line(point0, point1);
        console.log(ln);
        console.log(ln.getMidPoint());

        // ................................ polyline
        let pl = new Polyline();
        pl.push(new Point(0, 1.25, 0))
        pl.push(new Point(1, 2.5, 1))
        pl.push(new Point(2, 1, 3.15))
        pl.push(new Point(3, 2.5, 2))

        console.log(pl.toString())
        console.log(pl.getLength())


        // ................................ curve
        let curve = new Curve(1);
        curve.add(new Point(0, 1.25, 0))
        curve.add(new Point(1, 2.5, 1))
        curve.add(new Point(2, 1, 3.15))
        curve.add(new Point(3, 2.5, 2))
        console.log(curve.toString())


        // ................................ mesh
        let mesh = new Mesh();
        let xNum = 5;
        let yNum = 5;
        for (let j = 0; j < yNum; ++j) {
            for (let i = 0; i < xNum; ++i) {
                mesh.addVertex(new Point(i, j, Math.random() * 2));
            }
        }
        for (let j = 0; j < yNum - 1; ++j) {
            for (let i = 0; i < xNum - 1; ++i) {
                let index = i + (j * xNum);
                mesh.addFace(index, index + 1, index + xNum);
                mesh.addFace(index + 1, index + xNum, index + xNum + 1);
            }
        }
        console.log(mesh.toString())
        console.log(mesh.vertex);
        console.log(mesh.face);
    }
}
