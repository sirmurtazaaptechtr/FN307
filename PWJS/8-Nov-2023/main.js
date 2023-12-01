// JavaScript Functions
function myFun() {
    console.log("This is my Function.");
}
myFun();

function greet(fullName) {
    console.log("Dear " + fullName +". How do you do?");
}
greet("Ali Raza");
greet("Rayan Shahid");
greet("Emman Saleem");

function squrer(num) {
    let res = num*num;
    return res;
}
let ans = squrer(5);
console.log(ans);

console.log(squrer(16));

function fToC (f) {
    let c = (5/9) * (f-32);
    document.getElementById('showBox').innerText = Math.round(c) + "C";
    return c;
}
console.log(fToC(96));
console.log(fToC(102));
console.log(fToC(275));

function dt () {
    document.getElementById('showTime').innerHTML = Date();
}

let text = "Ali baba is a great man";
console.log(text.length);

let arr = [1,2,3,40,5,9];
console.log(arr.length);

console.log(text.toLocaleUpperCase());
console.log(text.toLocaleLowerCase());
console.log(text.slice(0,3));
console.log(text.slice(4,8));
console.log(text.substr(4,4));
