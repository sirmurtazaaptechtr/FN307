const d1 = document.getElementById('d1');
const p1 = document.getElementById('p1');
const phone = document.getElementById('phone');

const names = ["Hussain","Abdul Rafay","Basit Raza","Junaid","Rayan","Muhammad Uzair","Mahnoor","Eman","Sadaf","Taha","Saad","Abdul Rehman","Javeria"];

// for(let i = 0;i<names.length;i++){
//     d1.innerHTML += `<p>${i+1}. Dear ${names[i]}, How do you do?</p>`;    
// }

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
//     d1.innerHTML += `<p>Dear ${names[i]}, How are you?</p>`;
// }

// names.forEach(function(name){
//     d1.innerHTML += `<p>Dear ${name}, How do you do?</p>`;
// });



const students = [
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

students.forEach(function(student,index){
    d1.innerHTML += `<p>${index+1}. ${student.name} 's date of birth is ${student.dob}</p>`;
});
// function isPattern(userInput) {
//     if (typeof userInput !== 'string' || userInput.length !== 12) {
//       return false;
//     }
//     for (let i = 0; i < userInput.length; i++) {
//       let c = userInput[i];
//       switch (i) {
//         case 0:
//         case 1:
//         case 2:
//         case 4:
//         case 5:
//         case 6:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//           if (c == '#' || c >= 'a' && c <='z' || c >= 'A' && c <='Z' || c < 0 || c > 9) return false;
//           break;
//         case 3:
//         case 7:
//           if (c !== '-') return false;
//           break;
//       }
//     }
//     return true;
// }
function isPattern(userInput) {
    return /^\d{3}-\d{3}-\d{4}$/.test(userInput);
}
function checkNumber () {
    let number = phone.value;

    if(isPattern(number)) {
        p1.style.color = "green";
        p1.innerText = "Number Varified";
    }else {
        p1.style.color = "red";
        p1.innerText = "Invalid Number!"
    }    
}