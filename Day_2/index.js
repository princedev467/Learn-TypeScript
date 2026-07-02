"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let uname = "hello world";
console.log(uname);
let n = 123;
console.log(n);
// run this commmand  => tsc --watch
// TypeScript keeps running in the terminal and watches your files. Every time you save a .ts file, it recompiles only the files that changed.
// type =>
// 1.Number Data Types
let productPrice;
productPrice = 1000;
console.log(productPrice);
// 2.String Data Types
let productName;
productName = "i-phone14";
// productName=1000;  //Give Error
console.log(productName);
// 3.Boolean Data Types
let isLoggedIn = true;
console.log(isLoggedIn); //Booleand data type only store true/false if you enter string that time get error
// 4.undefined Data Types
let userName;
console.log(userName);
let usName = undefined; //give two data tyep in one variable useing this sign " |"
usName = 'Jhon Doe';
console.log(usName);
// 5.null Data Types
let user = null;
console.log(user);
//6. unknown Data Types
let test = 'TypeTech'; //string
// test.toUpperCase(); //if you update to uppercase then give error beacuse type is unknown insted of first check type then make change
if (typeof (test) == 'string') {
    let t = test.toUpperCase();
    console.log(t);
}
console.log(test);
//7. enum Data Types
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole);
var status;
(function (status) {
    status["success"] = "success";
    status["pending"] = "pending";
    status["reject"] = "reject";
})(status || (status = {}));
let apiResponce = status.success;
console.log(apiResponce);
// Array
let l = [10, 20, 30, 40, 50]; // store only Number data types
console.log(l);
l.push(99);
// l.push("Hello");  
console.log(l);
let userList = ["ram", "ravi", "raj"]; //store only String data types 
console.log(userList);
let m = [10, 99, "hello", "ravi", 22]; //store Any data types
console.log(m);
let x = [10, "hello"]; //this fix array only take two data the first is number and second is String ,if you add third any data then give error
console.log(x);
//read only array
let color = ["red", "blue"]; //if want chnage this ready only array array can't chnage
console.log(color);
// Object
let usObj = {
    name: 'ram',
    age: 20
};
console.log(usObj);
//nested obj 
let userAddress = {
    name: 'amerpeet',
    email: 'amer@gmail.com',
    address: {
        pinCode: 395008,
        city: 'surat'
    }
};
// userAddress.name="amerpeet rai"
console.log(userAddress);
let user2 = {
    name: "ravi",
    age: 23
};
let user3 = {
    name: "raj",
    age: 20
};
console.log("user2", user2);
console.log("user3", user3);
//create a object array using "userobj1" as types
let userListNew = [
    {
        name: 'prince',
        age: 20
    },
    {
        name: 'demo',
        age: 23
    },
    {
        name: 'demo1',
        age: 24
    },
    {
        name: 'demo2',
        age: 26
    }
];
console.log(userListNew);
//# sourceMappingURL=index.js.map