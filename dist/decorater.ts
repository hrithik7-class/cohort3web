function UserDec(constructor:Function){
    console.log("User Decorator called", constructor);
}

function Name(target:any , key:any){
    console.log("log decorator called",  key.name);
}

@UserDec
class User{
    @Name
    num1:number;
    num2:number;
    constructor(x:number,y:number){
        this.num1=x;
        this.num2=y;
        
    }
    getSum():number{
        return this.num1+this.num2;
    }
}
const c1 = new User(10,20);
console.log(c1.getSum());