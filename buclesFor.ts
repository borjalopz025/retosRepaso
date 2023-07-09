// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers (num:number):void
{
    for (let i=0; i < num; i++)
    {
       if (i % 2 == 1)
       console.log(i);
       
    }
}evenNumbers(10);



// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

let reverseArray: string[] = [];
function myRevert(myArr: string[]):string[]
{
   
   for ( let i= myArr.length - 1; i >= 0; i--)
   {
    reverseArray.push(myArr[i])
   }return reverseArray
}myRevert(["a","b","c","d"])




// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: 

function isRainbow(colors : string[]):void
{
    for (let color of colors){
       
        if ( color == "rojo"){
            console.log("si esta en el arcoiris ");
        }else if ( color == "naranja"){
            console.log("si esta en el arcoiris ");
        }else if ( color == "amarillo"){
            console.log("si esta en el arcoiris ");
        }else if ( color == "verde"){
            console.log("si esta en el arcoiris ");
        }else if ( color == "azul"){
            console.log("si esta en el arcoiris ");
        }else if ( color == "añil"){
            console.log("si esta en el arcoiris ");
        }else if ( color == "violeta"){
            console.log("si esta en el arcoiris ");
        }else{
            console.log("no esta en el arcoiris");
            
        }
    }
}isRainbow(["verde","naranja","gris","negro","azul","blanco"])





// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto:

let numeroSuma=0;

export function add (myWords :string[]):number
{
  for (let num of myWords)
  {
    numeroSuma += num.length 
    
  }return numeroSuma
 
    
}add(["buenos dias","pero esto que es","juan grabas las caras juan las caras"])










