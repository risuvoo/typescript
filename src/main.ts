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
ab.push(1); //not error
ab.push('suvo'); //not error

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


Note:"When really need this type then use this otherwise not use this"



