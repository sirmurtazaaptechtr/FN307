let obt_marks = 40;
let max_marks = 50;

let percentage = obt_marks/max_marks*100;

if(percentage >= 40) {
    console.log("PASS as percentage = "+percentage+"%");
}else {
    console.log("FAIL as percentage = "+percentage+"%");
}

if(percentage >= 80) {
    console.log("A+");
}else if(percentage >= 70) {
    console.log("A");
}else if(percentage >= 60) {
    console.log("B");
}else if(percentage >= 50) {
    console.log("C");
}else if(percentage >= 40) {
    console.log("D");
}else {
    console.log("F");
}

// Loops
console.log("FOR LOOP"); 
for(let c=1;c<=3;c++) {
    console.log(c+". My name is Murtaza");
}

for(let c=3;c>=1;c--) {
    console.log(c+". My name is Murtaza");
}

console.log("WHILE LOOP"); 
let c = 1;
while(c<=3) {    
    console.log(c+". My name is Murtaza");
    c++;
}

let number = 0;
let addTen = confirm(`Do you want to add 10 to ${number}?`);
while(addTen && number<50) {
    number += 10;
    addTen = confirm(`Do you want to add 10 to ${number}?`);
}
console.log(number);

console.log("DO WHILE LOOP");
c = 1;
do {    
    console.log(c+". My name is Murtaza");
    c++;
}while(c<=3);

let names = ["Hussain","Rafay","Rayan","Taha","Shahzaib","Javeria","Sadaf","Mahnoor","Eman"];

console.log(names.length);

// for(let i=0;i<names.length;i++) {
//     console.log(`Hi ${names[i]}, How are you?`);
// }

// let z=0;
// while(z<names.length) {
//     console.log(`Hi ${names[z]}, How are you?`);
//     z++;
// }

let y=0;
do{
    console.log(`Hi ${names[y]}, How are you ?`);
    y++;

}while(y<names.length);