import { Point } from "./point";

let punto: Point= new Point(2,4)
let punto1: Point= new Point(5,4)
let punto2: Point= new Point(-4,9)
let punto3: Point= new Point(-2,5)

punto.setx(4)
punto.serY(1)
console.log(punto.toString());
console.log(punto.distanceTolOrigin());
console.log(punto.calcularDistancia(punto));
let arrTri= [punto2, punto3];
let nearPoint = punto1.calculateNearest(arrTri)
console.log(nearPoint);


