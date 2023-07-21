import {Point} from "./point";
import {Triangle} from "./triangle";

let punto1 = new Point(4,30);
let punto2 = new Point(7,45);
let punto3 = new Point(9,24);

let myTriangle = new Triangle(punto1, punto2, punto3)

console.log(myTriangle.calculateLengthSides())