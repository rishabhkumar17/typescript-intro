// console.log("Hello World!");

// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level; // any type

function render(document: any) {
  console.log(document);
}

// ARRAYS
let numbers: number[] = [1, 2, 3];

// TUPLES
let user: [number, string] = [1, "sage"];
user.push(1); // gaps in typescript

// ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
} // Explicitly set values = 1, 2, 3

let mySize: Size = Size.Medium;
console.log(mySize);

// Adding const produces optimized code
const enum size {
  Small = 1,
  Medium,
  Large,
} // Explicitly set values = 1, 2, 3

let mysize: size = size.Medium;
console.log(mysize);

// FUNCTIONS
