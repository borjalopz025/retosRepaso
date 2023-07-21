// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:

// • x: number
// • y: number

// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.

// 4. Crear los métodos setters y getters para todos los atributos de la clase.

// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: “(x,y)”

// 6. En otro fichero denominado pointTest.ts importar la clase Point.

// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.


export class Point
{
    private x : number
    private y : number

    constructor( x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    setx(newX :number):void
    {
        this.x = newX
    }

    getX():Number
    {
        return this.x
    }

    serY(newY:number):void
    {
        this.y = newY
    }

    getY():number
    {
        return this.y
    }

    toString():string
    {
        return `${this.x} , ${this.y}`
    }

    distanceTolOrigin():number
    {
       return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    calcularDistancia(otroPunto:Point):number
    {
        let formula=  otroPunto.x - this.x 
        let formula2= otroPunto.y - this.y 
        let formulaCompleta= Math.sqrt(formula ** 2) + (formula2 ** 2)
        return formulaCompleta
    }

    calcularQuadrant():number
    {
    let result =0;
        if(this.x == 0 || this.y == 0){
            result 
        }else if (this.x > 0 && this.y > 0){
            result = 1
        }else if(this.x  < 0 &&  this.y > 0){
            result= 2
        }else if(this.x < 0 && this.y < 0) {
            result= 3
        }else if(this.x > 0 && this.y < 0){
            result= 4
        }
        return result
    }

    calculateNearest(newPoint : Point[])
    {
        let lessDistance = this.calcularDistancia(newPoint[0]);
        let point = newPoint[0];
        for(let i = 1; i < newPoint.length; i++){
            let distancia = this.calcularDistancia(newPoint[i]);
            if(distancia < lessDistance){
                lessDistance = distancia;
                point = point[i]
            }        
        } return point;
    }
        
    

    
   
}

let point1 :Point = new Point(7,-4)
console.log(point1.calcularQuadrant());
let point2:Point= new Point(4,8)

const arrPoint=[point1, point2]


