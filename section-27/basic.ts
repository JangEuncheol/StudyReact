// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number// = 24;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

// hobbies = ["Sports", "Cooking", 12];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};


let person: Person

person = {
  name: "Max",
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: Person[];

people = [{name: "apple", age: 10000}, {name: "banana", age: 5000}]
// people = [{name: "apple", age: 10000}, {name: "apple", age: "10000"}]

// Type inference

let course: string | number | boolean | string[] = "React - The Complete Guide";

course = 12341;

// Function & types

// return 값의 타입도 생각해야해
function add(a: number, b: number) {
  return a + b;
};

// return 이 없으면 void
function print(value: any) {
  console.log(value)
};

// Generic
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

updatedArray[0].split("");

