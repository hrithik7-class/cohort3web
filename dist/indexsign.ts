type sign={
    name:string,
    age:number,
    email:string,
    [key :string]:string|number // index signature to make readonly use readonly [key:string]:string|number 
}
let user:sign={
    name:"John",
    age:30,
    email:"john@gmail.com",
    address:"123 Main St",
    mod:123421
}