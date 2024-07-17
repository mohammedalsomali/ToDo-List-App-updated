
var todoSubject = document.querySelector('.TodoSubject');
var startForm = document.querySelector('.startForm');
var todoForm = document.querySelector('.TodoForm');
var formSubject = document.querySelector('.subject');
var todoDiscription= document.querySelector('.discription');
var userEmail = document.querySelector('.email');
var dueDate = document.querySelector('.dueDate');
var trashcontainer = document.querySelector('.trash');
var todoscontainer = document.querySelector('.Todos');
var todosList = document.querySelector('.TodosList');

window.onload = function () {
   

    document.querySelector('.startTodoBtn').addEventListener('click', openForm);
    document.querySelector('.trashBtn').addEventListener('click', showTrash);
    document.querySelector('.cancelBtn').addEventListener('click', cancelTodoForm);
    
    
} 

document.addEventListener('DOMContentLoaded', (event) => {
    todoForm.addEventListener("submit", function(e) {
        e.preventDefault() // Cancel the default action
        submitTodoForm();
    });
});

function openForm (){

    startForm.style.visibility = 'hidden';
    startForm.style.opacity = 0;
    startForm.style.height = '0px';
    todoscontainer.style.opacity = 0;

    formSubject.value = todoSubject.value;

    todoForm.style.height = '60%';
    
}




function showTrash() {

    if(trashcontainer.style.height == '' || trashcontainer.style.height == '0px') {
        startForm.style.visibility = 'hidden';
        startForm.style.opacity = 0;
        startForm.style.height = '0px';
        todoForm.style.height = '0px';
        todoscontainer.style.opacity = 0;
        trashcontainer.style.height = '60%'
        return
    }    


    trashcontainer.style.height = '0px';
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todoscontainer.style.opacity = 1;
    startForm.style.height = '40px';

}



function submitTodoForm() {

    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    startForm.style.height = '40px';

    todoForm.style.height = '0px';

    addTodo(formSubject.value);
}


function cancelTodoForm() {
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    startForm.style.height = '40px';

    todoForm.style.height = '0px';

}


function addTodo(subject) {

    var todo = document.createElement('a');
    todo.innerHTML = subject;
    todo.style.color = 'red';


    todosList.appendChild(todo);
    todoscontainer.style.opacity = 1;
    // todoscontainer.appendChild();

}