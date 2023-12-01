const p1 = document.getElementById('p1');
let text = "Please locate where 'locate' occurs!";
let pos = text.search('locate');
console.log(pos);

pos = text.indexOf('locate',pos+1);
console.log(pos);

pos = text.matchAll('locate');
console.log(Array.from(pos));

text = "The rain in SPAIN stays mainly in the plain";

let res = text.match('AIN');
console.log(res);

res = text.matchAll('ain')
console.log(Array.from(res));

text = "Hello world, welcome to the universe.";

let data = text.includes('world')
console.log(data);

text = "I love cats. Cats are very easy to love. Cats are very popular.";

data = text.matchAll('Cat');
console.log(Array.from(data));

let x = 10;
let y = 20;
let z = "30" + x + y ;
console.log(z);

let p = 10/"Ali Raza";
console.log(p);

p = "100" / 10;
console.log(p);

p = 100 / 0;
console.log(p);

let inc = 48;
let ft = inc.toString(12);
console.log(ft);

let value = 9.876543211234567e307;
console.log(value);

let num = 3.14159;
console.log(Math.round(num));
console.log(num.toFixed(2));

const students = ["Uzair","Rayyan","Rafay","Sadaf","Javeria","Basit","Junaid","Eman","Mahnoor"];
// let students = Array("Uzair","Rayyan","Rafay","Sadaf","Javeria","Basit","Junaid","Eman","Mahnoor");

console.log(students);
console.log(students[5]);

// students[9] = "Murtaza";
students.push("Murtaza");
console.log(students);

students.pop();
students.pop();
students.pop();
console.log(students);

students.unshift("Eman");
students.unshift("Mahnoor");
students.unshift("Murtaza");
students.push("Murtaza");
console.log(students);
students.shift();
console.log(students);

students.splice(2,3);
console.log(students);

students.splice(4,0,"Uzair","Rayan","Rafay");
console.log(students);