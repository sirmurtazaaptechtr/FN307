// Single line comment

/*
Multi Line 
Comment 
*/

// myname = "Syed Murtaza Hussain";
// var myname = "Syed Murtaza Hussain";
// let myname;
// myname = "Syed Murtaza Hussain";
// const myname = "Syed Murtaza Hussain";
// let myname2 = "Abdullah";

// let myname3 = "Sana";
// console.log(myname);

let data;
console.log(data + " is " + typeof(data));
data = 2;
console.log(data + " is " + typeof(data));
data = "Ali Raza";
console.log(data + " is " + typeof(data));
data = false;
console.log(data + " is " + typeof(data));
data = null;
console.log(data + " is " + typeof(data));
data = [2,"Ali Raza",false,null];
console.log(data);
console.log(data + " is " + typeof(data));
console.log(data[1]);
data = {age:2,name:"Ali Raza",isStudent:false,eamil:null};
console.log(data);
console.log(data + " is " + typeof(data));
console.log(data.name);

data = [
    {name:"Hussain",dob:"30-May-2007"},
    {name:"Abdul Rafay",dob:"05-Nov-2007"},
    {name:"Basit Raza",dob:"30-Jan-2004"},
    {name:"Junaid",dob:"16-Nov-2003"},
    {name:"Rayan",dob:"7-Aug-2006"},
    {name:"Muhammad Uzair",dob:"28-Jun-2003"},
    {name:"Mahnoor",dob:"06-May-2004"},
    {name:"Eman",dob:"06-Aug-2003"},
    {name:"Sadaf",dob:"17-Dec-2001"},
    {name:"Taha",dob:"20-Jan-2004"},
    {name:"Saad",dob:"2-May-2006"},
    {name:"Abdul Rehman",dob:"9-Jun-2005"},
    {name:"Javeria",dob:"25-Oct-2003"}
];

console.log(data);
console.log(data[8]);
console.log(data[8].name);

let num1 = 10;
let num2 = 5;

// let res = num1 + num2;
// console.log(res);
console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(`${num1} + ${num2} = ${num1+num2}`);
console.log(`${num1} - ${num2} = ${num1-num2}`);
console.log(`${num1} x ${num2} = ${num1*num2}`);
console.log(`${num1} / ${num2} = ${num1/num2}`);
console.log(`${num1} ** ${num2} = ${num1**num2}`);
console.log(`${num1} % ${num2} = ${num1%num2}`);
num1++; // num1 = num1 + 1; post increment
console.log(`${num1}`);
++num1; // num1 = num1 + 1; pre increment
console.log(`${num1}`);