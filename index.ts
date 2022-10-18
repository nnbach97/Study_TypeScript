/* BASIC TYPE */ 

// String
let str = "Bach";
let text:string;
text = "Hello";

// Number
let age = 233;
let num:number;
num = 10;

// Boolean
let isValid = true;
let isCheck:boolean;
isCheck = false

// undefined or null
let k:undefined;
let x:null

// any
let anyType:any;
anyType = 20;
anyType = 'tr';

// Object
let Obj = { name: 'Hee'};
Obj.name = 'oo';
let person: {name: string, age?: number} = {
  name: 'abc'
};

// array
let array = [] //-> :any
let arr: string[]; //-> Arr String
let arrnumber: number[]; //-> Arr number
let arrboolean: boolean[]; //-> Arr boolean
let blog:{ttl: string, body: string}[]; // -> Arr Obj


/* FUNCTION TYPE */ 

// Func return value
// khi bao kieu cu the
const sum = (num1: number, num2:number):number => {
  return num1 + num2;
}
sum(1,2)


// Quy dinh kieu du lieu
type functionType = (num1: number, num2: number) => number;

const sum2:functionType = (a,b) => {
  return a+b;
}
sum2(1,2);
// Func not return value
const fun = ():void => {
  console.log('Abc');
}

/* UNION & ENUM TYPE */ 
// UNION: -> kieu OR
let size: string | number;
size = 30;
size = "str";

// ENUM: Thuoc trong khoang nao do
enum Color {
  Red, Blue, Green
}

let colo = Color.Red   // = 0 ( trar veef vi tri )

/* INTERFACE TYPE */
interface Person {
  name: string,
  age?: number
}

let actor:Person = {name: 'Bac'};
let singer:Person;

/* GENERIC TYPE */
const Helo = <Type> (x:Type) =>{  // truyeenf type theo gias trij Type
  return 3
}

Helo<string>("POP")
Helo<number>(10)

/* CLASS */
// public
// private
// readonly

class Car {
  name: string;
  public year: number;
  // private year: number;
  // readonly year: number;
  constructor (name: string, year: number) {
    this.name = name,
    this.year = year
  }
}

// short version

class Car1 {
  constructor (private name: string, readonly year: number) {}
}
