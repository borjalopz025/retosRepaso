import { Point } from "./point";

let punto: Point= new Point(2,4)

punto.setx(4)
punto.serY(1)
console.log(punto.toString());
console.log(punto.distanceTolOrigin());
console.log(punto.calcularDistancia());


