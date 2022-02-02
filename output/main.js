"use strict";
const info = "frontend developer";
console.log(info);
//type number
function checkNumber(a, b) {
    return a * b;
}
console.log(checkNumber(2, 2));
//type array
const arr = ['suvo', 1, {}];
arr.push({
    name: 'suvo'
});
console.log(arr);
//type object
const user = {
    name: 'suvo',
    profession: 'Developer',
    age: 23,
    job: true
};
// user.age = '20' // code editor error
user.country = 'Bangladesh'; //code editor error
console.log(user);
