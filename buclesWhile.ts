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

let nombresConM:string;

function startWithM (arrNombres: string[])
{
    for ( let nombres of arrNombres){
        if (nombres[0] !== "m" ){
            nombresConM = "true"
            
        }else {
            nombresConM = "false"
            
        }return nombresConM
    }
}startWithM(["mario","marta","maria","manolo"])


