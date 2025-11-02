// var sym = Symbol("sym");
// const obj ={
//     [sym]: "hello",
//     name:"jesika"
// }
// console.log(obj[sym]);
// var sym= Symbol();
// var sym2= Symbol();
// var sym3=Symbol('abc');
// var sym4=Symbol('abc');
// console.log(sym==sym2);
// console.log(sym==sym2);
// console.log(sym3);
// console.log(sym4);
// console.log(sym3==sym4)
// const dId= Symbol('id');
// const mId= Symbol('id');
// const obj= {
//     [dId]:100,
//     name:'anil sidhu'
// }
// console.log(obj[dId]);
// const emp :[string , number , boolean] = ["anil" , 100 , true ];
// emp.push(100);
// console.log(emp);
// intersectionn  using type alieas 
// type a ={ name : string}
// type b ={ age : number}
// type c = number;
// var b :c =100;
// console.log(b);
// type  b ={name:string}
// type c = b & {age:number}
// type d = b & c
// var mao :d ={
//     name:'anil',
//     age:100
// }
// console.log(mao);
// type data = string | number | boolean;
// type freq = number
// type maths =data & freq
// var jao :maths[]= [90 ,40]
// console.log(jao);
// enum Status {
//     success=200,
//     fail=400,
//     pending=500
// }
// const myStatus : Status = Status.success;
// console.log(typeof myStatus);
// class EmpInfo{
//     _name:string="Anil";
//     _email:string="anil@test.com"
//     get name():string{
//         return "MR. "+this._name;
//     }
//     set email(val:string){
//         this._email="emp_"+val
//     }
// }
// var emp1= new EmpInfo();
// emp1.email="peter@test.com";
// console.log(emp1._email);
// class Product{
//    private name:string;
//    protected price:number;
//     pId:number
//     inCart=false;
//     isOrdered=false;
//     constructor(name:string,price:number,pid:number){
//         this.name=name;
//         this.price=price;
//         this.pId=pid
//     }
//      addToCart():void{
//         this.inCart=true
//     }
//     buyProduct():string{
//         if(this.inCart){
//             return `product ${this.name} is ordered in ${this.price}`
//         }else{
//             return `no product in cart`
//         }
//     }
// }
// class Order extends Product{
//     constructor(){
//         super('laptop',100000,403)
//     }
//     getPrice(){
//         return this.price
//     }
// }
// var product= new Product('Samsung',100000,101);
// // product.addToCart();
// // console.log(product.buyProduct())
// // console.log(product.name);
// // console.log(product.price);
// var order= new Order();
// console.log(order.getPrice())
// product.js
// "use strict";
// class Product {
//     name;
//     price;
//     pId;
//     inCart = false;
//     isOrdered = false;
//     constructor(name, price, pid) {
//         this.name = name;
//         this.price = price;
//         this.pId = pid;
//     }
//     addToCart() {
//         this.inCart = true;
//     }
//     buyProduct() {
//         if (this.inCart) {
//             return `product ${this.name} is ordered in ${this.price}`;
//         }
//         else {
//             return `no product in cart`;
//         }
//     }
// }
// class Order extends Product {
//     constructor() {
//         super('laptop', 100000, 403);
//     }
//     getPrice() {
//         return this.price;
//     }
// }
// var product = new Product('Samsung', 100000, 101);
// // product.addToCart();
// // console.log(product.buyProduct())
// // console.log(product.name);
// // console.log(product.price);
// var order = new Order();
// console.log(order.getPrice());
//number
// let num :number = 10;
// let num2 :number = 20;
// console.log(num+num2)
// string
// let love:string = "I love javascript";
// console.log(love.charAt(2))
//boolean
//  let isTrue:boolean = true;
// if(isTrue) console.log("i am true")
//     else console.log("i am false")
// null and undefined
// let x:null =null
// console.group(null)
// let y:undefined = undefined
// console.log(y)
//Array
// let arr : string []=["hrithik" ,"anil" , "jesika"];
// console.log(arr.length)
//onject 
// let obj :{type:string , color:string , gem?:string}={
//     type:"ring",
//     color:"gold",
// }
// console.log(obj["type"])
//tuple : array with fixed length and type
//  let b : readonly  [string , number , boolean] = ["anil" , 100 , true  ];
//  b.push(100); //can't push
//  console.log(b);
//type alieas
// type a = { name: string };
// type b = { age: number };
// type c = a & b;
// const std :c = {
//     name: "anil",
//     age: 10
// }
// console.log(std);
// type union
// type show = string | number
// const showData :show ="anil"
// const showData2 :show = 100
//type intersection
// type a = { name: string };
// type b = { age: number };
// type c = a & b;
//  const d:c ={
//   name : "anil",
//   age: 100
// };
//interface
// interface boy {
//     name:string;
//     isMarried:boolean;
//     wife?:string;
// }
// const  anil:boy={
//     name:"anil",
//     isMarried:true,
//     wife:"anushka",
//     age:100
// }
// console.log(anil)
// interface boy{
//     age:number
// }
// console.log(anil)
//extends method intersection with interface
// interface boy {
//     name: string;
//     gender: string;
// }
// interface child extends boy {
//     age: number;
// }
// const child1: child = {
//     name: "anil",
//     gender: "male",
//     age: 10
// }
// console.log(child1)
// function raj (name:string,age:number):string{
//     return `my name is ${name} and my age is ${age}`
// }
// function Vod () :void{
//     console.log("vod")
// }
// Vod()
// type casting
// let a :any = "anil";
// let b :string = a;
// console.log(b)
// let b :any ="jess"
// console.log( b as string);
// let x :unknown = 4;
// console.log(x as string , x.toString()) error
//casting with type assertion <>
// let x = "num";
// console.log(<string> x)
//class 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return "this is ".concat(this.name, " and my age is ").concat(this.age, "}");
    };
    return Person;
}());
var person = new Person("anil", 100);
console.log(person.getName());
