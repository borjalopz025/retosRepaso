// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: 

let numPar: number[]=[];

function hasEven (num:number[])
{
   let i=0
   while(i < num.length)
   {
     if(num[i] % 2 == 0)
     return numPar.push(num[i])
     i++
   };
   
}hasEven([1,2,3,5,7,9,11,13])



// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)


function starWithM(myNames : string []):boolean{
    let i = 0;
    while(i< myNames.length){
        if(myNames[i][0] != "M"){
            return false;
        }i++
    } return true;
}
console.log(starWithM(["Mario","Marta","Maria","Manolo"]))


