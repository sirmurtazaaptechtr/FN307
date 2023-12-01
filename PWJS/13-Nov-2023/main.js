const students = ["Uzair","Rayyan","Hussain","Rafay","Sadaf","Javeria","Basit","Junaid","Eman","Mahnoor","Shahzaib","Jahanzaib"];
const ages = [16,16,17,19,19,20,21,19,18,22,100];
console.log(students);
students.sort();
console.log(students);
students.reverse();
console.log(students);
console.log(ages);
ages.sort(function(a,b){return a-b;});
console.log(ages);
ages.sort(function(a,b){return b-a;});
console.log(ages);

function theFun(name,index,array) {
    console.log("Welcome "+name+" you are at index = "+index);
}
students.forEach(theFun);

students.forEach(function(name,index){
    console.log("Welcome "+name+" you are at index = "+index);    
});

// const numbers = [78,62,12,94,10,25,27,76,95,99];

// const saquares = numbers.map(function(number){
//     return number*number;
// });

// console.log(saquares);

const dt = new Date();
console.log(dt);

let d = new Date(2007,4)
console.log(d);
d = new Date(2007,4,30)
console.log(d);
d = new Date(2007,4,30,9)
console.log(d);
d = new Date(2007,4,30,9,15)
console.log(d);
d = new Date(2007,4,30,9,15,30)
console.log(d);

console.log(dt.toDateString());
console.log(dt.toUTCString());
console.log(dt.toISOString());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

d = new Date("2007-05-30");
console.log(d);
console.log(d.getMonth());
console.log(d.getMonth()+1);
console.log(months[d.getMonth()]);