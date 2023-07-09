"use strict";
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
Object.defineProperty(exports, "__esModule", { value: true });
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
// También tendrás que importar dichos ficheros en el fichero actual.
var buclesFor_1 = require("./buclesFor");
var condicionales_1 = require("./condicionales");
var arr1 = ["casa", "coche", "ciudad", "casta"];
var arr2 = ["barco", "baca", "bicicleta", "balon", "bisiesto", "brasil"];
var arr3 = ["venezuela", "veneno", "voltaje"];
var sumCarac = (0, buclesFor_1.add)(arr1);
(0, condicionales_1.isEven)(sumCarac);
