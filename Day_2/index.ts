let uname:string="hello world"
console.log(uname);

let n:number=123
console.log(n);

// run this commmand  => tsc --watch
// TypeScript keeps running in the terminal and watches your files. Every time you save a .ts file, it recompiles only the files that changed.


// type =>

// 1.Number Data Types
let productPrice:number;
productPrice=1000;
console.log(productPrice);


// 2.String Data Types
let productName:String;
productName="i-phone14";
// productName=1000;  //Give Error
console.log(productName);


// 3.Boolean Data Types
let isLoggedIn:boolean=true; 
console.log(isLoggedIn);  //Booleand data type only store true/false if you enter string that time get error


// 4.undefined Data Types
let userName:undefined; 
console.log(userName);  

let usName:undefined | string=undefined;  //give two data tyep in one variable useing this sign " |"
usName='Jhon Doe'
console.log(usName);


// 5.null Data Types
let user:null |string=null; 
console.log(user);  


// Array

let l:Number[]=[10,20,30,40,50]; // store only Number data types
console.log(l);
l.push(99);
// l.push("Hello");  
console.log(l);

let userList:String[]=["ram","ravi","raj"]; //store only String data types 
console.log(userList);


let m:any[]=[10,99,"hello","ravi",22]; //store Any data types
console.log(m);

let x:[Number,String]=[10,"hello"]; //this fix array only take two data the first is number and second is String ,if you add third any data then give error
console.log(x);

//read only array
let color:readonly string[]=["red","blue"]; //if want chnage this ready only array array can't chnage
console.log(color);

