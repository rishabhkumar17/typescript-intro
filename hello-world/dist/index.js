"use strict";
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
//# sourceMappingURL=index.js.map