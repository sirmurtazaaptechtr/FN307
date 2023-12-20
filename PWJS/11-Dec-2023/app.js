const dt = document.getElementById('dt');
const noteTitle = document.getElementById('noteTitle');
const addTxt = document.getElementById('addTxt');
const priority = document.getElementsByName('priority');
const addBtn = document.getElementById('addBtn');
const notes = document.getElementById('notes');

showNotes();

function showNotes () {
    let myNotesArry = [];
    let storedNotes = localStorage.getItem("myNotes");
    if(storedNotes != null) {
        myNotesArry = JSON.parse(storedNotes); // to convert old json data to js object
        notes.innerHTML = `
        <hr><h2>Your Notes</h2><hr>
        `;      
        myNotesArry.forEach(function (note,index) {
            notes.innerHTML +=`
            <div class="card w-25 m-3">
                <div class="card-header">
                    <h5 class="card-title">${note.title}</h5>                    
                </div>
                <div class="card-body ${note.pColor}">
                    <p class="card-text">${note.date}</p>
                    <p class="card-text">${note.description}</p>                    
                </div>
                <div class="card-footer">
                    <a id="${index}" onclick="delNote(this.id)" type="button" class="btn btn-outline-danger">Delete</a>
                </div>
            </div>
            `;            
        });
    }
}

addBtn.addEventListener("click", function () {
    // to collect new data
    let nDate = dt.value;
    let nTitle = noteTitle.value;
    let nDescription = addTxt.value;
    let pValue;

    priority.forEach(function(element) {
        if(element.checked) {
            pValue = element.value;            
        }       
    });

    // to store new data with previous if exist other create new record
    let myNotesArry = [];
    let storedNotes = localStorage.getItem("myNotes"); // to get old json data

    if(storedNotes != null) {
        myNotesArry = JSON.parse(storedNotes); // to convert old json data to js object
    }
    myNotesArry.push({date:nDate,title:nTitle,description:nDescription,pColor:pValue}); // to save new data alongwith old data
    localStorage.setItem("myNotes",JSON.stringify(myNotesArry));
    showNotes();    
});

function delNote(index) {
    let myNotesArry = [];
    let storedNotes = localStorage.getItem("myNotes");

    if(storedNotes != null) {
        myNotesArry = JSON.parse(storedNotes);
    }    
    myNotesArry.splice(index,1);
    localStorage.setItem("myNotes",JSON.stringify(myNotesArry));
    showNotes();
}