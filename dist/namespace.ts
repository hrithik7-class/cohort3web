/// <reference path="./namespace2.ts"/>

namespace MyMath {

    export class Mat extends User{   
        getRandomNumber(){
            return Math.random()
        }
    }
}
let obj = new MyMath.Mat();
console.log(obj.getRandomNumber());