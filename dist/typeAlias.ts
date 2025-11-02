// type GreetingProps = {
//   name: string;
//   age: number;
// };

//  function Greeting( {name, age}: GreetingProps ) {
//   return `name is ${name} and age is ${age}`;

// }
// const ans =Greeting({name:"jesika" , age: 22});
// console.log(ans);

// interface Dog {
//   bark(): void;
// }

// interface Cat {
//   meow(): void;
// }

// const dogInstance = {
//   bark() {
//     console.log("Woof woof!");
//   }
// };

// const catInstance = {
//   meow() {
//     console.log("Meow!");
//   }
// };

// function makeSound(animal : Dog | Cat ) {
//   if ("bark" in animal) {
   
//     animal.bark();
//   } else {
    
//     animal.meow();
//   }
// }
// makeSound(dogInstance); // Outputs: Woof woof!
// makeSound(catInstance);
