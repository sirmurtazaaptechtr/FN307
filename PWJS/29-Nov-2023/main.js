const colorSelect = document.getElementById('colorSelect');
const calcBtn = document.getElementById('calcBtn');
const answer = document.getElementById('answer');

colorSelect.addEventListener("change", function() {
    let bgColor = colorSelect.value;

    document.querySelector('body').style.backgroundColor = bgColor;
    
    if (bgColor !== 'white') {
        document.querySelector('body').style.color = 'white';
    } else {
        document.querySelector('body').style.color = 'black';
    }
});

calcBtn.addEventListener("click",function () {
    let result = 0;
    for(let i=0;i<=9876543210;i++)
    {
        result += i;
    }
    answer.innerHTML = "<b><i>" + result + "</i></b>";
});

let w1;
function callWorker( ) {
    if(Worker != undefined) {
        console.log("Browser is Good!");
        if(w1 == undefined) {            
            w1 = new Worker('myWorker1.js');
        }
        w1.onmessage = (e) => {            
            answer.innerHTML= "<b><i>" + e.data + "</i></b>";
        }
    }
}