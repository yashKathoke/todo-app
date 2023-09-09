const add = document.querySelector('.add')
const del = document.querySelector('.del')
let num = 1;

const noteSec = document.querySelector('.notes-section');

let note = document.getElementById('note');



// checking if data is available or not

let retrive = () => {
    noteSec.insertAdjacentHTML(
        'beforeend', 
        `<div class="content-adder ${num}" id="${num}">

        <p class="content note note-text" >${localStorage.getItem(num)}<p/>
        
        <img src="./assets/tick.svg" class="tick content" alt="" onClick= "taskDone()">
        
        <img src="./assets/delete.svg" class="del content" alt="" onClick= "delElem()" >
        
        </div>`
    );
    console.log(this)

    note.value = ' ';
    num += 1;

}

if (!noteSec.hasChildNodes()) {

    // console.log(localStorage.getItem(`${num}`) == null)

    while ((localStorage.getItem(`${num}`) !== null)) {

        retrive();
        
    }
    
}



let data ;
let getData = () => {
    data = note.value ;
    // console.log(data);
    localStorage.setItem(num,data)
};

note.addEventListener('change', getData)




let addNote = function(){
    localStorage.setItem(num,data)

    noteSec.insertAdjacentHTML(
        'beforeend', 
        `<div class="content-adder ${num}" id="${num}">

        <p class="content note note-text" >${localStorage.getItem(num)}<p/>
        
        <img src="./assets/tick.svg" class="tick content" alt="" onClick= "taskDone()">
        
        <img src="./assets/delete.svg" class="del content" alt="" onClick= "delElem()" >
        
        </div>`
    );
    console.log(this)

    note.value = ' ';
    num += 1;

};

add.addEventListener('click', addNote);




let delElem = function(){
    let toDel = event.target.parentElement.parentElement;
    noteSec.removeChild(toDel)
    console.log(typeof(toDel.id))
    localStorage.removeItem(`${num}`);

}

let taskDone = function(){

    let taskElem = event.target.parentElement.previousSibling ;
    taskElem.classList.add('done-task')
    console.log(taskElem.classList)
}


// if (localStorage(num = )) {
    
// }

// let demo = document.getElementById('demo')
// console.log(demo.innerHTML)




