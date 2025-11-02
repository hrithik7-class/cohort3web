function updatedFunction(target:any, Key:string, descriptor:PropertyDescriptor){
    descriptor.value=function sum(x:number,y:number){
        let output=x+y;
         return "this value of x "+  x + " and y"+ y+ "if we add, We get "+ output;
     }                            //value , get , set , writable , enumerable , configurable

}


class DecFun{
    
    @updatedFunction 
    getResult(x:number,y:number){
         return x+y;
     }
}
const obj=new DecFun();
console.log(obj.getResult(10,20));