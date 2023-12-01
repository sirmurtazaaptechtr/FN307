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

let x = 2;
console.log(x + "," + num1);

x = x + num1++;
// x = x + ++num1;
console.log(x + "," + num1);

//JavaScript Assignment Operators

let y = 15;
console.log(y);
y += 3; // y = y + 3;
console.log(y);
y -= 8; // y = y - 8;
console.log(y);
y *= 2; // y = y * 2;
console.log(y);
y /= 5; // y = y / 5;
console.log(y);
y %= 3; // y = y % 3;
console.log(y);
y **= 100; // y = y ** 100;
console.log(y);

let a = 10;
let b = 5;
console.log("When a = "+a+" and b = "+b);
console.log("a == b ->" + (a == b));
console.log("a >= b ->" + (a >= b));
console.log("a > b ->" + (a > b));
console.log("a < b ->" + (a < b));
console.log("a <= b ->" + (a <= b));

b = "10";
console.log("When a = "+a+" and b = "+b);
console.log("a == b ->" + (a == b));
console.log("a === b ->" + (a === b));
console.log("a != b ->" + (a != b));
console.log("a !== b ->" + (a !== b));
// conditional assignment
// ternary operator (?:)
let num = 141;

let result = num % 2 == 0 ?`${num} is Even`:`${num} is Odd`;
console.log(result);

//The Nullish Coalescing Operator (??)

let databaseValue;
// databaseValue = null;
let Divisor = databaseValue ?? 1;
let Dividend = 10;
let Quotient = Dividend/Divisor;
console.log(Quotient);

// databaseValue = null;
databaseValue = "Hussain";
let name = databaseValue ?? "John Doe";
let message = `Dear ${name}, How do you do?`;
console.log(message);
