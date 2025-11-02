// let a =0;

// for(let i=0; i<1000; i++){
//     a+=i;
//     console.log("hello my number is "+a);
// }

// isMaried = false;
// console.log(isMaried ,"hello friend")

// const userNum = [12,35,56,78,90];
// let eve = userNum.length;
// for(let i=0; i<eve; i++){
//     if(userNum[i] % 2 === 0){
//         console.log(userNum[i],"is even number");
//     }
// }   


// const userNum = [12,35,56,78,90];
// let eve = userNum.length;
// for(let i=0 ; i<eve; i++   ){
//     console.log(userNum[i]);
//     i++;
// }

// let (num) =0;
// for(let i=0; i<1000000000; i++){
//  num += i;
// }
// console.log(num);

// function time(){
//     for(let i=30; i>0; i--){
//         console.log(i);
//     }
// }
// time()


// let i = 30;
// const wrap = setInterval(() => {
//   console.log(i);
//   i--;

//   if (i === 0) {
//     clearInterval(wrap);
//     console.log("Time's up!");
//   }
// }, 1000);

// const st =Date.now();

// const t = setTimeout(()=>{
//     console.log("hello world")

//     let ed= Date.now()
//     console.log("diff time is ",((ed-st)/1000).toFixed(1),"s")

// },5000);


// const check = new Date(t).getTime();
// console.log(check)


//terminal clock
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString('en-GB'));
// }, 1000);
// setInterval(()=>{
// const t =new Date();
// const h = String( t.getHours()).padStart(2, '0');
// const m = String( t.getMinutes()).padStart(2, '0');
// const s = String( t.getSeconds()).padStart(2, '0');

// console.log(`${h}:${m}:${s}`);
// },1000)


// function anagram(a ,b){
//     if(a.split("").sort().join("") === b.split("").sort().join(""))
//     {
//         console.log("anagram")
//     }
//     else{
//         console.log("not anagram")
//     }

// }
// anagram("tub" , "but");



// const Tansaction = [
//             {
// 		id: 1,
// 		timestamp: 1637076800000,
// 		price: 210,
// 		category: 'jungfood',
// 		itemName: 'burger',
// 	},{
// 		id: 2,
// 		timestamp: 1606076800000,
// 		price: 110,
// 		category: 'seafood',
// 		itemName: 'fish',
// 	},
//     {
// 		id: 3,
// 		timestamp: 1656026800000,
// 		price: 70,
// 		category: 'juice',
// 		itemName: 'pipeapple',
// 	},
//     {
// 		id: 4,
// 		timestamp: 16560236800000,
// 		price: 80,
// 		category: 'drink',
// 		itemName: 'wat60',
// 	},
//     {
// 		id: 5,
// 		timestamp: 1656076830000,
// 		price: 100,
// 		category: 'Food',
// 		itemName: 'panner',
// 	},
// ]
// const newArray = calculateTotalSpentByCategory(Tansaction);
// console.log(newArray);

// function calculateTotalSpentByCategory(transaction) {
//  let totalSpentByCategory={};

//  for(let tansac of transaction){
// 	const category = tansac.category;
// 	const price = tansac.price;


// 		totalSpentByCategory[category] 
// 		? totalSpentByCategory[category] += price 
// 		: totalSpentByCategory[category] = price	
//  }
//  return  Object.entries(totalSpentByCategory)
//  .map(([category , price])=>({
//      category,
// 	 price
//  }))
// }




// let arrNum = [1, 9, 4, 2, 0, 5, 7];
// console.log(Math.max(...arrNum))

// function mxNums() {
// 	let maxNum = arrNum[0];
// 	for (let i = 1; i < arrNum.length; i++) {
// 		if(arrNum[i] >maxNum){
// 			maxNum =arrNum[i]
// 		}
// 	}
// 	console.log(maxNum);
// }

// mxNums()


// function sqr(n){
// 	return n*n;
// };
// function cube(n){
// 	return n*n*n;
// }

// function cal( a ,b){ ///barbose way to doing if heavy calculation
// 	let val = sqr(a);
// 	let val2 = sqr(b);
// 	return val + val2;
// }
// console.log(cal(3,4));

// function cal(a,b,fn){
// 	let val = fn(a);
// 	let val2 = fn(b);
// 	return val + val2;
// }
// console.log(cal(3,4,cube));


// function sum(n){
// 	return (n *(n + 1))/2;
// }

// let ans =0;
// function sum(n){

// 	for(let i=1; i<=n; i++){
// 		ans += i;
// 	}
//    return ans;
// }
// console.log(sum(2));


// function sum(n){
// 	if( n=== 0) return 0;

// 	return n+ sum(n - 1);
// }
// console.log(sum(5));

// import fs from "fs";
// const file = fs.readFileSync("a.js","utf-8");
// console.log("file read successfully" ,file);


// class Retangle{
//     constructor(leng , wid , color){
//         this.leng = leng;
//         this.wid = wid;
//         this.color = color;
//     }

//     area(){
//         return `Area of the Rectangle is ${this.leng * this.wid}`;
//     }

//     print(){
//         return `Length is ${this.leng} , Width is ${this.wid} and Color is ${this.color}`;
//     }
// }
// const rec1 = new Retangle (10,5,"red");
// console.log(rec1.area());
// console.log(rec1.print());


// function TimeRanges(resolve){
//     setTimeout(resolve, 2000);
// }

// function showTime(){
//     const date = new Date();
//     console.log(date.toLocaleTimeString('en-GB'));
// }

// TimeRanges(showTime);

// class Promises{
//     resolve(){
//         this.fn2();
//     }
//     reject(){
//         this.fn1();
//     }

// }
// const prom = new Promises(fn2 , fn1);

// function fn1(){
//     console.log("hello world")
// }
// function fn2(){
//     setTimeout(fn1 , 3000);
// }   

// import fs from "fs";

// function readfs(content){
//     fs.readFile("a.js","utf-8",(err,data)=>{
//         content(data);     
//     })
// }


// class Promise3{
//     constructor(fn){
//         this.fn =fn;
//         this.fn(()=>{
//             this.resolve.forEach((fn)=>fn());
//         })
//     }

//     then(fn){
//         if(!this.resolve){
//             this.resolve =[];
//         }
//         this.resolve.push(fn);
//     }
// }

// function setTimeoutPromisified(duration){
//     return new Promise3(function(resolve){
//         console.log(resolve)
//         setTimeout(resolve ,  duration);
//     })
// }
// setTimeoutPromisified(2000).then(function(){
//     console.log("hello world after 2s")
// });
// setTimeoutPromisified(3000).then(function(){
//     console.log("hello world after 3s")
// });
// setTimeoutPromisified(4000).then(function(){
//     console.log("hello world after 4s")
// });


// class Promise3 {
//   constructor(fn) {
//     this.resolveCallbacks = [];
//     // Flag to check if resolved already
//     this.isResolved = false;

//     const resolve = () => {
//       this.isResolved = true;
//       this.resolveCallbacks.forEach(callback => callback());
//     };

//     // Immediately call the executor function with resolve
//     fn(resolve);
//   }

//   then(fn) {
//     if (this.isResolved) {
//       // If already resolved, call callback immediately (async)
//       setTimeout(fn, 0);
//     } else {
//       // Else, push to callback array
//       this.resolveCallbacks.push(fn);
//     }
//     // Return this for chaining (optional)
//     return this;
//   }
// }

// // Usage example:
// function setTimeoutPromisified(duration) {
//   return new Promise3((resolve) => {
//     setTimeout(resolve, duration);
//   });
// }

// setTimeoutPromisified(2000).then(() => {
//   console.log("hello world after 2s");
// });

// setTimeoutPromisified(3000).then(() => {
//   console.log("hello world after 3s");
// });

// setTimeoutPromisified(4000).then(() => {
//   console.log("hello world after 4s");
// });


// class Promise2 {
//   constructor(executor) {
//     this.state = 'pending';
//     this.value = undefined;
//     this.reason = undefined;
//     this.onFulfilledCallbacks = [];
//     this.onRejectedCallbacks = [];

//     const resolve = (value) => {
//       if (this.state === 'pending') {
//         this.state = 'fulfilled';
//         this.value = value;
//         this.onFulfilledCallbacks.forEach(fn => fn());
//       }
//     };

//     const reject = (reason) => {
//       if (this.state === 'pending') {
//         this.state = 'rejected';
//         this.reason = reason;
//         this.onRejectedCallbacks.forEach(fn => fn());
//       }
//     };

//     try {
//       executor(resolve, reject);
//     } catch (error) {
//       reject(error);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
//     onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

//     const promise2 = new Promise2((resolve, reject) => {
//       if (this.state === 'fulfilled') {
//         setTimeout(() => {
//           try {
//             const x = onFulfilled(this.value);
//             Promise2.resolvePromise(promise2, x, resolve, reject);
//           } catch (error) {
//             reject(error);
//           }
//         }, 0);
//       } else if (this.state === 'rejected') {
//         setTimeout(() => {
//           try {
//             const x = onRejected(this.reason);
//             Promise2.resolvePromise(promise2, x, resolve, reject);
//           } catch (error) {
//             reject(error);
//           }
//         }, 0);
//       } else if (this.state === 'pending') {
//         this.onFulfilledCallbacks.push(() => {
//           setTimeout(() => {
//             try {
//               const x = onFulfilled(this.value);
//               Promise2.resolvePromise(promise2, x, resolve, reject);
//             } catch (error) {
//               reject(error);
//             }
//           }, 0);
//         });

//         this.onRejectedCallbacks.push(() => {
//           setTimeout(() => {
//             try {
//               const x = onRejected(this.reason);
//               Promise2.resolvePromise(promise2, x, resolve, reject);
//             } catch (error) {
//               reject(error);
//             }
//           }, 0);
//         });
//       }
//     });

//     return promise2;
//   }

//   catch(onRejected) {
//     return this.then(null, onRejected);
//   }

//   static resolvePromise(promise2, x, resolve, reject) {
//     if (promise2 === x) {
//       return reject(new TypeError('Chaining cycle detected for promise'));
//     }

//     let called = false;
//     if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
//       try {
//         const then = x.then;
//         if (typeof then === 'function') {
//           then.call(
//             x,
//             y => {
//               if (called) return;
//               called = true;
//               Promise2.resolvePromise(promise2, y, resolve, reject);
//             },
//             r => {
//               if (called) return;
//               called = true;
//               reject(r);
//             }
//           );
//         } else {
//           if (called) return;
//           called = true;
//           resolve(x);
//         }
//       } catch (e) {
//         if (called) return;
//         called = true;
//         reject(e);
//       }
//     } else {
//       resolve(x);
//     }
//   }

//   static resolve(value) {
//     if (value instanceof Promise2) {
//       return value;
//     }
//     return new Promise2((resolve) => resolve(value));
//   }

//   static reject(reason) {
//     return new Promise2((_, reject) => reject(reason));
//   }
// }


// function TaskTime(duration){
//     return new Promise2(function(resolve , reject){
//         setTimeout(
//             function(){
//                 if(duration > 3000){
                    
//                     resolve();
//                     console.log("resolved")

//                 }
//                 else{
//                     reject("error");
//                     console.error("rejected")
//                 }
//             } , duration);
//     })
// }

// TaskTime(2000).then(function(){
//     console.log("hello world after 2s")
// }).catch(function(){
//     console.log("error occured")
// });


//   const data = `hello mam i am hrithik coming from no where. my very first love name is `
//   const words = data.split(/\s+/).filter(word => word.length > 0); // either use /\s+/ or ' ' both are correct
//   console.log(`You have ${words.length} words in this file`);


