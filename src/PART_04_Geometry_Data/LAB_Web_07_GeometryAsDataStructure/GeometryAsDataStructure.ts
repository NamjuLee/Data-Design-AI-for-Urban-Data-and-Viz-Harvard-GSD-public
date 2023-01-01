export class Vector {
    // ........................... static
    static distance(v0: Vector, v1: Vector) {
        // https://en.wikipedia.org/wiki/Distance
        return Math.sqrt((v0.x - v1.x) * (v0.x - v1.x) + (v0.y - v1.y) * (v0.y - v1.y) + (v0.z - v1.z) * (v0.z - v1.z));
    }

    // ........................... instance 
    public x: number;
    public y: number;
    public z: number;
    constructor(x: number, y: number, z: number = 0.0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    public toString() {
        return `x: ${this.x}, y: ${this.y}, z: ${this.z} `;
    }
    public toJson() {
        return {
            "x": this.x,
            "y": this.y,
            "z": this.z
        };
    }
    public toDraw() {
        // TODO based on your renderer!
    }
}
export class Point {
    vec: Vector;
    color: Color;
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.vec = new Vector(x, y, z);
        this.color = new Color(0, 255, 0);
    }
    public distanceTo(other: Point) {
        return Vector.distance(this.vec, other.vec)
    }
    public setColor(r: number, g: number, b: number, a: number = 1.0) {
        this.color.r = r;
        this.color.g = g;
        this.color.b = b;
        this.color.a = a;
    }
    public getHex() {
        return this.color.toHex();
    }
}
export class Color {
    public r: number;
    public g: number;
    public b: number;
    public a: number;
    constructor(r: number = 255, g: number = 255, b: number = 255, a: number = 1.0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    public normaized() {
        return [this.r /= 255, this.g /= 255, this.b /= 255]
    }
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    public toHex() {
        return '#' + [Math.round(this.r), Math.round(this.g), Math.round(this.b)].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
    public toHSV() {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = max, s = max, v = max;
        const d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
            h = 0; // achromatic
        } else {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
                default: break;
            }

            h /= 6;
        }
        return [h, s, v]; // 0 to 1
    };
}
export class Line {
    p0: Point;
    p1: Point;
    constructor(point0: Point, point1: Point) {
        console.log(this);
        this.p0 = point0;
        this.p1 = point1;

    }
    public getMidPoint() {
        // https://en.wikipedia.org/wiki/Midpoint
        return new Point(this.p0.vec.x + ((this.p1.vec.x + this.p0.vec.x) * 0.5), this.p0.vec.y + ((this.p1.vec.y + this.p0.vec.y) * 0.5), this.p0.vec.z + ((this.p1.vec.z + this.p0.vec.z) * 0.5));
    }
}
export class Polyline {
    public pts: Point[];
    public isOpen: boolean;
    constructor(isOpen: boolean = false) {
        this.pts = [];
    }
    public push(other: Point) {
        this.pts.push(other);
    }
    public toString() {
        return `Length of pts: ${this.pts.length}`;
    }
    public getLength() {
        let totalDistance = 0.0;
        for (let i = 0; i < this.pts.length - 1; ++i) {
            let dis = this.pts[i].distanceTo(this.pts[i + 1])
            totalDistance += dis;
        }
        return totalDistance;
    }
}
export class Curve {
    public pts: Point[];
    public isOpen: boolean;
    public degree = 1;
    constructor(degree: number = 1, isOpen: boolean = false) {
        this.pts = [];
        this.isOpen = isOpen;
        this.degree = degree;
        this.interpolation();
    }
    public add(other: Point) {
        this.pts.push(other);
    }
    public toString() {
        return `Length of pts: ${this.pts.length}`;
    }
    private interpolation() {
        // TODO
    }
}
export class Polygon {
    public pts: Point[] = []
    constructor(pts: Point[] ) {
        this.pts = pts;
        // TODO
    }
    public add(other: Point) {
        // TODO
    }
    public toString() {
        // TODO
    }
    public getLength() {
        // TODO
    }
    public getArea() {
        // TODO
    }
}
export class Mesh {
    vertex: Point[];
    face: number[][];
    constructor() {
        this.vertex = [];
        this.face = [];
    }
    public addVertex(other: Point) {
        this.vertex.push(other);
    }
    public addFace(A: number, B: number, C: number) {
        this.face.push([A, B, C]);
    }
    public toString() {
        return `Length of pts: ${this.vertex.length}`;
    }
}