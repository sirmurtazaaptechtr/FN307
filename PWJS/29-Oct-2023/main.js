window.console.log("this is JS to console' log");
window.console.warn("this is JS to console' warn");
window.console.error("this is JS to console' error");

window.alert('this is js to window');
var isConfirmed = window.confirm('Do you want to continue?');
window.console.log(isConfirmed);

var name = window.prompt('what is you name?');
window.console.log("Welcome "+name);
window.document.write("Welcome "+name);
// window.document.getElementById('second').innerText = "Welcome "+name;
// window.document.getElementsByClassName('red')[1].innerHTML = "Welcome "+name;
// window.document.querySelector('#second').innerHTML = "Welcome "+name;
console.log(window.document.querySelectorAll('.red'));