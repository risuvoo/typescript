const info = "frontend developer";
console.log(info);

//type number
function checkNumber(a :number, b:number ) {
    return a * b;
    
}
console.log(checkNumber(2, 2))

//type array

const arr = ['suvo',1,{}];
arr.push({
    name:'suvo'
});
console.log(arr);

//type object

const user = {
    name: 'suvo',
    profession: 'Developer',
    age: 23,
    job: true
}
user.age = '20'; Note:'code editor error'
user.country = 'Bangladesh'; Note:'code editor error'
console.log(user);

let a: string; NOTE:"this is union type ex: let a: string"
let aa: string | number; NOTE:"this is union type ex: let aa: string | number"

a = 1; //error
a = 'suvo';
aa = 1; 
aa = 'suvo';
a = {name:'suvo'} //error 

let b: number;
b = 'suvo' //error
b = 12


//type array
let arType : string[] = [];
arType.push(2); //error
arType.push('suvo');

let arTypeTwo: (string | number)[] = [];
arTypeTwo.push({ name: 'suvo' }); //error
arTypeTwo.push('suvo');
arTypeTwo.push(10);

//type object

let c: object;
c = 'suvo'; //error
c = { name: 'suvo' }

// object match all property

let myInfo : {
    name: string,
    code: number, 
    adult:boolean
}
myInfo = { name: 'suvo', code: 5 }; //error not match all property
myInfo = { name: 'suvo', code: 5, adult: 'true' };//error because adult not string
myInfo = { name: 'suvo', code: 5, adult: true };

// array is an object
let arrObj: object;

arrObj = [1, 2]; Note: 'not error because array is kind of object'


// =============== dynamic type or union type ============

let ab: any;
ab = 5; //not error
ab = "submit" //not error

/* array */
let abArr: any[]=[];
abArr.push(1); //not error
abArr.push('suvo'); //not error

/* object */
let abObj: { 
    name: any,
    adult: any,
    age:any
};

abObj = {
    name: 10,
    adult: 'true',
    age:'john doe'
}

Note: "When really need this type then use this otherwise not use this"

//================== function type =====================

let myFunc: Function;

myFunc = "john doe"; //error

myFunc = () => {
     console.log("john doe");
}
/* parametter func */
const myPrFunc = (a:string, b:number) => {
    console.log(`My name is ${a} and I am ${b} years old`);
}
myPrFunc('suvo', '23'); //error b is not a string
myPrFunc('suvo', 23); 

/* parametter func with optional parametter */
const myPrFuncOp = (a: string, b: number, c?: string) => { //optional parametter ?:type
    console.log(c) //output undefined
    console.log(`My name is ${a} and I am ${b} years old`);
} 
myPrFuncOp('suvo', 23); //error b is not a string

/* parametter func with default parametter*/
const myPrFuncDf = (a: string, b: number, c: string ='john') => { //default parametter ?:type
    console.log(c) //john
    console.log(`My name is ${a} and I am ${b} years old`);
}
myPrFuncDf('suvo', 23); //error b is not a string

/* parametter func with default parametter*/
const myPrFuncRtrn = (a: string, b: number, c: string ='john') => { //default parametter ?:type
    return a + b; //type string because a concat b result suvo23  and result is string
}
myPrFuncRtrn('suvo', 23); //error b is not a string

Note: "Explicit structure: const myPrFuncRtrn = (a: string, b: number, c: string ='john') :string => {"


//===================== type alias ===============

type stringOrNum = string | number;
type userType = { name: string, age: number };

const userDetails = (id :stringOrNum,user : userType) => {
    console.log(`user id : ${id}  and user name ${user.name}`)
}
const sayHello = (user:userType) => {
    console.log(`hello ${user.name}`)
}

//===============function signatures=====================
 /********
 
 syntex: let funcName :(param:number,param2:number)=> return type ex:void,number,etc;
 
 ********/
//ex:1
let add: (x: number, y: number) => number;

add = (a:number,b:number) => { //error because add return number not void
    console.log(a + b);
}
add = (a:number,b:number) => { 
    return a + b;
}

//ex:2

let calculate: (x: number, y: number, z: string) => number;
calculate = (a: number, b: number, c: string) => {
    if (c === "add") {
        return a + b;
    } else {
        //when not use return in else block then throw error calculate function becasue if condition false then function find return number type value
        return a - b;
    }  
}

//ex:3 pass object type in function

let userInfo: (id: string | number, info: {
    name: string,
    age:number
}) => void

userInfo = (id: string | number, info: { //XXXXXXXXXX NOTE: object property same as function signature object property otherwise throw error
    name: string,
    age:number
}) => {
    console.log(info.name);
}

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

import {player} from "./classes/players.js"

const sakib = new player('sakib', 23, 'bangladesh');

//with module
import {isPlayer} from "./interfaces/isPlayer.js"

let masrafi: isPlayer;
masrafi = new player('masrafi', 30, 'bangladesh');

//assign player class as a array type

// const players: player[] = [];
const players: isPlayer[] = [];
players.push('suvo');//error because (this argument type) or (player class type) not equal
players.push(sakib);

//class access modifier
/*****
 * public,private,readonly (by default public)
 */
sakib.name = 'masrafi';
console.log(sakib.name);
sakib.country = "us";
console.log(sakib.country);



//=====================typescript interface===============

/***
 * interface store a rules
 */

interface userInfo  {
    name: string,
    age:number,
}

function showUser(obj:userInfo) {
    console.log(`user name is ${obj.name} and he is ${obj.age} years old`)
}
showUser({ name: 'suvo', age: 22, country: 'bangladesh' }); //error because country not allow in userInfo interface
const getUser = {name:'suvo',age:22,country:'bangladesh'}
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

const addNew =<T extends {name:string,age:number}>(obj:T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

const userTwo = addNew({
    name: 'suvo',
    age: 30,
    country: 'bangladesh'
})

//==suggest only id==
/** uncomment this
 * userTwo.
 */

//==suggest all==
/** uncomment this
 * userTwo.
 */

//=====================typescript generics interface===============

interface APIresponse<T>{
    status: number,
    type: string,
    data:T
}

const response: APIresponse<object> = {
    status: 200,
    type: 'success',
    data: {
        name: 'suvo',
        age:30
    }
}
//=====================typescript enum===============
enum rType { SUCCESS, ERROR, FAILURE, UNAUHENTICATED, FORBIDDEN };
interface APIresponse1<T>{
    status: number,
    type: rType,
    data:T
}

const response1: APIresponse1<string> = {
    status: 200,
    type: rType.SUCCESS,
    data: 'test'
}
console.log(response1)
//=====================typescript tuples===============
/**
 * normal way
 */
let y = [3, 'string', { id: 1 }];
y[1] = 3;
y[1] = true; //error because typeScript asume his type is y object

/**
 * explacit way
 */
let g: [string, object, boolean] = ['suvo', { id: 1 }, true];
g[1] = { name: 'suvo'}; 
g[1] = true; //error because explicit need to correct sequence (g:[string, object, boolean])

