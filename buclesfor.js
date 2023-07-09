"use strict";
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 == 1)
            console.log(i);
    }
}
evenNumbers(10);
// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
var reverseArray = [];
function myRevert(myArr) {
    for (var i = myArr.length - 1; i >= 0; i--) {
        reverseArray.push(myArr[i]);
    }
    return reverseArray;
}
myRevert(["a", "b", "c", "d"]);
// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: 
function isRainbow(colors) {
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        if (color == "rojo") {
            console.log("si esta en el arcoiris ");
        }
        else if (color == "naranja") {
            console.log("si esta en el arcoiris ");
        }
        else if (color == "amarillo") {
            console.log("si esta en el arcoiris ");
        }
        else if (color == "verde") {
            console.log("si esta en el arcoiris ");
        }
        else if (color == "azul") {
            console.log("si esta en el arcoiris ");
        }
        else if (color == "añil") {
            console.log("si esta en el arcoiris ");
        }
        else if (color == "violeta") {
            console.log("si esta en el arcoiris ");
        }
        else {
            console.log("no esta en el arcoiris");
        }
    }
}
isRainbow(["verde", "naranja", "gris", "negro", "azul", "blanco"]);
// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto:
var numeroSuma = 0;
function add(myWords) {
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var num = myWords_1[_i];
        numeroSuma += num.length;
    }
    return numeroSuma;
}
exports.add = add;
add(["buenos dias", "pero esto que es", "juan grabas las caras juan las caras"]);
