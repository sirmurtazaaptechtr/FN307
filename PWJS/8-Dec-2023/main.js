const myHeading = document.getElementById('myHeading');
const myBtn = document.getElementById('myBtn');
const tableData = document.getElementById('tableData');
let w1;

myBtn.addEventListener("click",function () {
    if(Worker != undefined) {
        if(w1 == undefined) {
            w1 = new Worker('worker.js');
        }
        else {
            console.error("Worker already exists");
        }
        w1.onmessage = function (event) {
            let plants = event.data;
            plants.forEach(function(plant,index) {
                tableData.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${plant.Common}</td>
                    <td>${plant.Price}</td>
                </tr>
            `;

            });
        }
    }

});