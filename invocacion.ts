// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:

// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]

// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.

// También tendrás que importar dichos ficheros en el fichero actual.

import { add } from "./buclesFor";
import { isEven } from "./condicionales";

let arr1 : string[]= ["casa","coche","ciudad","casta"];
let arr2 :string[]=["barco","baca","bicicleta","balon","bisiesto","brasil"];
let arr3 :string[]=["venezuela","veneno","voltaje"]

let sumCarac = add(arr1)
isEven(sumCarac)

let sumCarac2 = add(arr2)
isEven(sumCarac2)

let sumCarac3 = add(arr3)
isEven(sumCarac)






