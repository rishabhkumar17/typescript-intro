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
