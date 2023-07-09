"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var punto = new point_1.Point(2, 4);
punto.setx(4);
punto.serY(1);
console.log(punto.toString());
console.log(punto.distanceTolOrigin());
console.log(punto.calcularDistancia());
