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
function calculateTax(income: number, taxYear = 2022): number {
  if (income < 50000 && taxYear) return 0;
  return 1;
}

calculateTax(100000); // fixed inputs

// OBJECTS
let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = { id: 1, retire: (date: Date) => console.log(date) }; // ?: optional

employee.name = "Sage";

// ADVANCED TYPES

// TYPE ALIASES
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee2: Employee = { id: 1, retire: (date: Date) => console.log(date) }; // ?: optional

employee2.name = "Sage";

// UNION TYPES
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");

// INTERSECTION TYPES
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// LITERAL TYPES
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// NULLABLE TYPES
function greet(name: string | null | undefined) {
  if (name) console.log(name);
  else console.log("Hey!");
}

greet(null);
greet(undefined);

// OPTIONAL CHAINING
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)

// Optional property access operator

console.log(customer?.birthday?.getFullYear());
