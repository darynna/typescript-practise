// let total: number = 100;
// let namee: string = "Bob";
// let isActive: boolean = false
// let empty: null = null

// let age = 10;

// age = 12

// type User = {
//   name: string,
//   age: number 
// }
// type size = 'small' | 'medium' | 'large'

// const user: User = {
//   name: 'Bob',
//   age: 12
// }


// const numbers: number[] = [1, 2, 3, 4, 5, 6]
// numbers.push(1)



// type eventType = 'lessson' | 'deadline';


// const evennt: eventType = "deadline"

// let age: unknown = 'bob'
// age = 12;
// name.toFixed()

// type size = 'small' | 'medium' | 'large'

// enum Sizes {
//   small = 'small',
//   medium = 'medium',
//   large = 'large'
// }

// const button: size = 'large';
// const button2: Sizes = Sizes.large


// function add(num1: number, num2: number):string{
//   return `${num1} + ${num2}`
// }

// function add(num1: number, num2: number):number{
//   return num1 + num2
// }

// function add(num1: number, num2: number): void{
//   console.log(num1 + num2)
// }

// type User = {
//   name: string
// }

// function great(user: User): void{
//   console.log(`Hello ${user.name}`)
// }

// type User = {
//   name: string,
//   age: number, 
//   hobby: string
// }

// function useConstructor(name: string, age: number, hobby: string): User{
//   return{
//     name, 
//     age,
//     hobby
//   }
// }

// type Car = {
//   color: string,
//   proce: number,
//   currency: string,
//   start: (color: string) =>{}
// }

// const Car = {
//   color: 'red',
//   proce: 1000,
//   currency: 'UAH',
//   start(color){
//     console.log('start', this.color)
//   }
// }

type User = {
  name: string;
  age: number;
  role?: string
}

const user: User = {
  name: "Bob",
  age: 12
};

const admin: User ={
  name: "John",
  age: 34,
  role: "Admin"
}