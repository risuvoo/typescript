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
user.age = '20';
Note: 'code editor error';
user.country = 'Bangladesh';
Note: 'code editor error';
console.log(user);
let a;
NOTE: "this is union type ex: let a: string";
let aa;
NOTE: "this is union type ex: let aa: string | number";
a = 1; //error
a = 'suvo';
aa = 1;
aa = 'suvo';
a = { name: 'suvo' }; //error 
let b;
b = 'suvo'; //error
b = 12;
//type array
let arType = [];
arType.push(2); //error
arType.push('suvo');
let arTypeTwo = [];
arTypeTwo.push({ name: 'suvo' }); //error
arTypeTwo.push('suvo');
arTypeTwo.push(10);
//type object
let c;
c = 'suvo'; //error
c = { name: 'suvo' };
// object match all property
let myInfo;
myInfo = { name: 'suvo', code: 5 }; //error not match all property
myInfo = { name: 'suvo', code: 5, adult: 'true' }; //error because adult not string
myInfo = { name: 'suvo', code: 5, adult: true };
// array is an object
let arrObj;
arrObj = [1, 2];
Note: 'not error because array is kind of object';
// =============== dynamic type or union type ============
let ab;
ab = 5; //not error
ab = "submit"; //not error
/* array */
let abArr = [];
abArr.push(1); //not error
abArr.push('suvo'); //not error
/* object */
let abObj;
abObj = {
    name: 10,
    adult: 'true',
    age: 'john doe'
};
Note: "When really need this type then use this otherwise not use this";
//================== function type =====================
let myFunc;
myFunc = "john doe"; //error
myFunc = () => {
    console.log("john doe");
};
/* parametter func */
const myPrFunc = (a, b) => {
    console.log(`My name is ${a} and I am ${b} years old`);
};
myPrFunc('suvo', '23'); //error b is not a string
myPrFunc('suvo', 23);
/* parametter func with optional parametter */
const myPrFuncOp = (a, b, c) => {
    console.log(c); //output undefined
    console.log(`My name is ${a} and I am ${b} years old`);
};
myPrFuncOp('suvo', 23); //error b is not a string
/* parametter func with default parametter*/
const myPrFuncDf = (a, b, c = 'john') => {
    console.log(c); //john
    console.log(`My name is ${a} and I am ${b} years old`);
};
myPrFuncDf('suvo', 23); //error b is not a string
/* parametter func with default parametter*/
const myPrFuncRtrn = (a, b, c = 'john') => {
    return a + b; //type string because a concat b result suvo23  and result is string
};
myPrFuncRtrn('suvo', 23); //error b is not a string
Note: "Explicit structure: const myPrFuncRtrn = (a: string, b: number, c: string ='john') :string => {";
const userDetails = (id, user) => {
    console.log(`user id : ${id}  and user name ${user.name}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.name}`);
};
//===============function signatures=====================
/********

syntex: let funcName :(param:number,param2:number)=> return type ex:void,number,etc;

********/
//ex:1
let add;
add = (a, b) => {
    console.log(a + b);
};
add = (a, b) => {
    return a + b;
};
//ex:2
let calculate;
calculate = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        //when not use return in else block then throw error calculate function becasue if condition false then function find return number type value
        return a - b;
    }
};
//ex:3 pass object type in function
let userInfo;
userInfo = (id, info) => {
    console.log(info.name);
};
//===============Object class type=====================
// class player{
//     private name: string;
//     public age: number;
//     readonly country: string;
//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country=c
//     }
//     play() {
//         console.log(`this player name is ${this.name} and he came from ${this.country} and he is ${this.age} years old`)
//     }
// }
//import module
import { player } from "./classes/players.js";
const sakib = new player('sakib', 23, 'bangladesh');
let masrafi;
masrafi = new player('masrafi', 30, 'bangladesh');
//assign player class as a array type
// const players: player[] = [];
const players = [];
players.push('suvo'); //error because (this argument type) or (player class type) not equal
players.push(sakib);
//class access modifier
/*****
 * public,private,readonly (by default public)
 */
sakib.name = 'masrafi';
console.log(sakib.name);
sakib.country = "us";
console.log(sakib.country);
function showUser(obj) {
    console.log(`user name is ${obj.name} and he is ${obj.age} years old`);
}
showUser({ name: 'suvo', age: 22, country: 'bangladesh' }); //error because country not allow in userInfo interface
const getUser = { name: 'suvo', age: 22, country: 'bangladesh' };
showUser(getUser); // not error because getUser is reference type object
//=====================typescript generics===============
/****
 * ===only accept oject with out suggestion===
 * const addNew = (obj:object) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}
 */
/****
 * ===only accept oject with  suggestion===
 * const addNew =<T>(obj:T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}
 */
/***
 * const addNew =<T extends object>(obj:T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}
*output:
* const userTwo = addNew('suvo'); //error because only except object
*const userTwo = addNew({
    name: 'suvo',
    age:30
})
 */
/***
 * const addNew =<T extends {name:string,age:number}>(obj:T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}
*output:
*const userTwo = addNew({ //error because property not match for this type object
    country: 'bangladesh'
})
*const userTwo = addNew({
    name: 'suvo',
    age: 30,
    country: 'bangladesh'
})
 */
const addNew = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const userTwo = addNew({
    name: 'suvo',
    age: 30,
    country: 'bangladesh'
});
const response = {
    status: 200,
    type: 'success',
    data: {
        name: 'suvo',
        age: 30
    }
};
//=====================typescript enum===============
var rType;
(function (rType) {
    rType[rType["SUCCESS"] = 0] = "SUCCESS";
    rType[rType["ERROR"] = 1] = "ERROR";
    rType[rType["FAILURE"] = 2] = "FAILURE";
    rType[rType["UNAUHENTICATED"] = 3] = "UNAUHENTICATED";
    rType[rType["FORBIDDEN"] = 4] = "FORBIDDEN";
})(rType || (rType = {}));
;
const response1 = {
    status: 200,
    type: rType.SUCCESS,
    data: 'test'
};
console.log(response1);
