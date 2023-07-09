import { Point } from "./point"

export class Triangle
{
    private vertex1 : Point;
    private vertex2 : Point;
    private vertex3 : Point;

    constructor(ver1: Point, ver2: Point, ver3: Point)
    {
        this.vertex1= ver1;
        this.vertex2= ver2;
        this.vertex3= ver3;
    }
    
    setVer1(newVer:Point):void
    {
        this.vertex1= newVer
    }
    getVer1():Point
    {
        return this.vertex1
    }

    setVer2(newVer2: Point):void
    {
        this.vertex2 = newVer2
    }

    getVer2():Point
    {
        return this.vertex2
    }

    setVer3(newVer3: Point):void
    {
        this.vertex2 = newVer3
    }

    getVer3():Point
    {
       return this.vertex3
    }

    calculateLengthSides() : number[]
    {
       
    }

}

