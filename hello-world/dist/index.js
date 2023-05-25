"use strict";
var _a;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, "sage"];
user.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
let mysize = 2;
console.log(mysize);
function calculateTax(income, taxYear = 2022) {
    if (income < 50000 && taxYear)
        return 0;
    return 1;
}
calculateTax(100000);
let employee = { id: 1, retire: (date) => console.log(date) };
employee.name = "Sage";
let employee2 = { id: 1, retire: (date) => console.log(date) };
employee2.name = "Sage";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name);
    else
        console.log("Hey!");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map