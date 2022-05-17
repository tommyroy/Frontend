//Grabbing Elements

const input = document.querySelector("#todoInput");
const inputBtn = document.querySelector("#todoBtn");
const list = document.querySelector(".todoList");


//Event Listeners

document.addEventListener('DOMContentLoaded', getToDo)
inputBtn.addEventListener('click', ToDo);
list.addEventListener('click', deleteCheck);


//Functions
function ToDo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const listItems = document.createElement('li');
    listItems.innerText = input.value;
    listItems.classList.add('todo-item');
    todoDiv.appendChild(listItems); 

    saveToLocal(input.value);

    const completebtn = document.createElement('button');
    completebtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    completebtn.classList.add("complete-btn");
    todoDiv.appendChild(completebtn);

    const trashbtn = document.createElement('button');
    trashbtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashbtn.classList.add("trash-btn");
    todoDiv.appendChild(trashbtn);

    list.appendChild(todoDiv);

    input.value = "";
}


function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeFromStorage(todo);
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        });
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function saveToLocal(todo){

    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getToDo(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        const listItems = document.createElement('li');
        listItems.innerText = todo;
        listItems.classList.add('todo-item');
        todoDiv.appendChild(listItems); 

        const completebtn = document.createElement('button');
        completebtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        completebtn.classList.add("complete-btn");
        todoDiv.appendChild(completebtn);

        const trashbtn = document.createElement('button');
        trashbtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        trashbtn.classList.add("trash-btn");
        todoDiv.appendChild(trashbtn);

        list.appendChild(todoDiv);
    });
}


function removeFromStorage(todo){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

