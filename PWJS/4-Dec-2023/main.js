const Table = document.getElementById('myTbl');
const myTable = document.getElementById('myTable');
const request = new Request('catlog.json');

function showPlants () {
    Table.style.display = 'block';
    fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function(catlog){    
        let plants = catlog.Plants;    
        plants.forEach(function (plant,index) {        
            myTable.innerHTML += 
            `<tr>
                <th>${index+1}</th>
                <td>${plant.Common}</td>
                <td>${plant.Botanical}</td>
                <td>${plant.Zone}</td>
                <td>${plant.Light}</td>
                <td>${plant.Price}</td>
                <td>${plant.Availability}</td>
            </tr>`
        });
    });
}
