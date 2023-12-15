const addBtn = document.getElementById('addBtn');
const dt =  document.getElementById('dt');
const noteTitle =  document.getElementById('noteTitle');
const addTxt = document.getElementById('addTxt');
const priority = document.getElementsByName('priority');
const nBox = document.getElementById('notes');

showNotes();

function showNotes() {
    let notesJSObj = new Array();
    let notes = localStorage.getItem("localNotes");
    if(notes == null) {
        notesJSObj = [];
    }else {
        notesJSObj = JSON.parse(notes);
        nBox.innerHTML = "";        
        notesJSObj.forEach(function(note) {            
            nBox.innerHTML += `
            <div class="card w-25 m-3">
                <div class="card-header">
                    <h5 class="card-title">${note.title}</h5>                    
                </div>
                <div class="card-body ${note.priority}">
                    <p class="card-text">${note.dated}</p>
                    <p class="card-text">${note.description}</p>                    
                </div>
                <div class="card-footer">
                    <a href="#" type="button" class="btn btn-outline-danger">Delete</a>
                </div>
            </div>
            `;
        });
    }
}

addBtn.addEventListener("click",function() {    
    let date = dt.value;
    let nTitle = noteTitle.value;
    let nText = addTxt.value;
    let pValue;
    priority.forEach(function(pElement) {
        if(pElement.checked) {
            pValue = pElement.value;
            console.log(pValue);
        }        
    });
    let notesJSObj = new Array();
    let notes = localStorage.getItem("localNotes");

    if(notes == null) {
        notesJSObj = [];
    }else {
        notesJSObj = JSON.parse(notes);
    }
    notesJSObj.push({title:nTitle,description:nText,priority:pValue,dated:date});
    localStorage.setItem("localNotes",JSON.stringify(notesJSObj));
    showNotes();
});