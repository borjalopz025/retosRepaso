"use strict";
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
// • x: number
// • y: number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: “(x,y)”
// 6. En otro fichero denominado pointTest.ts importar la clase Point.
// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setx = function (newX) {
        this.x = newX;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.serY = function (newY) {
        this.y = newY;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "".concat(this.x, " , ").concat(this.y);
    };
    Point.prototype.distanceTolOrigin = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.calcularDistancia = function (otroPunto) {
        var formula = otroPunto.x - this.x;
        var formula2 = otroPunto.y - this.y;
        var formulaCompleta = Math.sqrt(Math.pow(formula, 2)) + (Math.pow(formula2, 2));
        return formulaCompleta;
    };
    Point.prototype.calcularQuadrant = function () {
        var result = 0;
        if (this.x == 0 || this.y == 0) {
            result;
        }
        else if (this.x > 0 && this.y > 0) {
            result = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            result = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            result = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            result = 4;
        }
        return result;
    };
    Point.prototype.calculateNearest = function (newPoint) {
    };
    return Point;
}());
exports.Point = Point;
var point1 = new Point(7, -4);
console.log(point1.calcularQuadrant());
var point2 = new Point(4, 8);
var arrPoint = [point1, point2];
