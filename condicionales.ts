// Retos de Condicionales

// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts

// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)



let signoZodiaco;

function zodiac (dia : number, mes:string):string
{
    if(dia >= 21 && mes == "marzo" || (dia <= 19 && mes == "abril")){
        signoZodiaco= "tu signo del zodiaco es ARIES "
    }else if(dia >= 20 && mes == "abril" || (dia <= 20 && mes == "mayo")){
        signoZodiaco= "tu signo del zodiaco es TAURO "
    }else if(dia >= 21 && mes == "mayo" || (dia <= 20 && mes == "junio")){
        signoZodiaco= "tu signo del zodiaco es GÉMINIS "
    }else if(dia >= 21 && mes == "junio" || (dia <= 22 && mes == "julio")){
        signoZodiaco= "tu signo del zodiaco es CANCER "
    }else if(dia >= 23 && mes == "julio" || (dia <= 22 && mes == "agosto")){
        signoZodiaco= "tu signo del zodiaco es LEO "
    }else if(dia >= 23 && mes == "agosto" || (dia <= 22 && mes == "septiembre")){
        signoZodiaco= "tu signo del zodiaco es VIRGO "
    }else if(dia >= 23 && mes == "semptiembre" || (dia <= 22 && mes == "octubre")){
        signoZodiaco= "tu signo del zodiaco es LIBRA "
    }else if(dia >= 23 && mes == "octubre" || (dia <= 21 && mes == "noviembre")){
        signoZodiaco= "tu signo del zodiaco es ESCORPIO "
    }else if(dia >= 22 && mes == "noviembre" || (dia <= 21 && mes == "diciembre")){
        signoZodiaco= "tu signo del zodiaco es SAGITARIO "
    }else if(dia >= 22 && mes == "diciembre" || (dia <= 19 && mes == "enero")){
        signoZodiaco= "tu signo del zodiaco es CAPRICORNIO"
    }else if(dia >= 20 && mes == "enero" || (dia <= 18 && mes == "febrero")){
        signoZodiaco= "tu signo del zodiaco es ACUARIO "
    }else if(dia >= 19 && mes == "febrero" || (dia <= 20 && mes == "marzo")){
        signoZodiaco= "tu signo del zodiaco es  PSICIS"
    }return signoZodiaco
}
console.log(zodiac(1, "enero"));



// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

function continent(country : string):void
{
    if(country == "españa" || country == "francia" ||( country == "portugal" || (country == "italia"))){
        console.log("estas en Europa");
        
    }else if(country == "angola" || country == "sudafrica" ||( country == "costa marfil" || (country == "marruecos"))){
        console.log("estas en Africa");
        
    }else if(country == "china" || country == "india" ||( country == "japon" || (country == "tailandia"))){
        console.log("estas en Asia");
        
    }else if(country == "argentina" || country == "estados unidos" ||( country == "chile" || (country == "canada"))){
        console.log("estas en America");
        
    }else if(country == "australia" || country == "nueva zelanda" ||( country == "fiyi" || (country == "samoa"))){
        console.log("estas en Europa");
        
    }
}continent("argentina")

// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// La cabecera de la función tendrá el siguiente aspecto: function isEven(number)

export function isEven (num : number):void
{
    if(num % 2 == 0){
        console.log("El numero es par");
        
    }else {
        console.log("El numero es impar");
        
    }
}isEven(367)


// 5. Subir los cambios a GitHub.