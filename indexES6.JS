console.log("welcome to the project2 with ES6");
// constructor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// display constructor
class Display {
    add(book) {
        console.log("adding to UI");
        let tableBody = document.getElementById("tableBody")
        let uiString = ` <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    // implement clear function
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    // implement validate function
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    // implement show function
    // add methods to display prototype
    show(type, displayMessage) {
        let message = document.getElementById("message");
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                  <strong>${boldText}</strong> ${displayMessage}
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                  </button>
                             </div>`;
                             setTimeout(function(){
                                 message.innerHTML=""
                             },5000);
    }
}

// add submit event listner to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted library form");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success","Your book has been added sucsessfully.")
    }
    else {
        display.show("danger","You cannot add this book.")
    }


    e.preventDefault();
}


let z = document.getElementById('addBtn');
let onClick = function (e) {

    let addTxt = document.getElementById('addTxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addtitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addtitle.value = "";
    // console.log(notesObj);
    showNotes();
}
z.addEventListener('click', onClick);