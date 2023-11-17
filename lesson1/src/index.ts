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

// type User = {
//   name: string;
//   age: number;
//   role?: string
// }

// const user: User = {
//   name: "Bob",
//   age: 12
// };

// const admin: User ={
//   name: "John",
//   age: 34,
//   role: "Admin"
// }
// lessson 2


// type StringDictionary = {
//   [key : string] : string
// }


// type Goods = {
//   [key : string] : number
// }

// type Fruits = {
//   apples: number;
//   banana: number;
//   oranges: number;
// }

// type FrozenGoods = {
//   iceCream: number;
//   fish: number;
//   berry: number;
// }

// const fruits: Goods = {
//   apples: 12,
//   banana: 23,
//   oranges: 45,
// };

// const frozenGoods: Goods = {
//   iceCream: 25,
//   fish: 30,
//   berry: 10,
// }


// type Interface = {
//   [key: string]: string | number

// }


// const userInfo: Interface = {
//   name: 'Bob',
//   age: 23,
//   country: 'Ukraine'
// };

// const bookDetails: Interface = {
//   title: 'Bible',
//   page: 350
// }


// function identity<T>(arg: T): T{
//   return arg
// }

// let output1 = identity<string>("myString");
// let outputs2 = identity<number>(100)


// function reverse<K>(items: K[]): K[]{
//   return items.reverse()
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5])
// console.log(numbers)

// function lengthOfObject<T extends {length: number}>(obj: T): number{
//   return obj.length
// }
// lengthOfObject({name: 'Earth', length: 5})


// const student = {
//   name: 'john',
//   age: 25
// };

// function getProperty<T, K extends keyof T>(obj:T, key: K): T[K]{
//   return obj[key];
// }


// let studentName = getProperty(student, 'name')


// let studentAdress = getProperty(student, 'address')



// type Todo = {
//   title: string;
//   description:  string;
//   completed: boolean
// };

// function updateTodod(todo: Todo, fieldToUpdate: Partial<Todo>): Todo{
//   return {... todo, ...fieldToUpdate}
// }

// const todo1: Todo = {
//   title: "Learn TypeScript",
//   description: "Study the basics of Typescript",
//   completed: false
// }

// const todo2 = updateTodod(todo1, {
//   description: 'Hello'
// })


// type User = {
//   name: string;
//   age: number;
// };

// const john: Readonly<User> = {
//   name: 'Jonh',
//   age: 30,

// }



// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonSummary = Pick<Person, 'name'| "age">

// const JohnSummary: PersonSummary={
//   name: 'John',
//   age: 45,
// }


// lesson 3

