
var todoSubject = document.querySelector('.TodoSubject');
var startForm = document.querySelector('.startForm');
var todoForm = document.querySelector('.TodoForm');
var formSubject = document.querySelector('.subject');
var todoDiscription= document.querySelector('.discription');
var userEmail = document.querySelector('.email');
var dueDate = document.querySelector('.dueDate');

window.onload = function () {
    
    document.querySelector('.startTodoBtn').addEventListener('click', openForm);
    
    
} 

function openForm (){
    startForm.style.display = 'none';

    formSubject.value = todoSubject.value;
    todoForm.classList.toggle("showing");



    
    
}

