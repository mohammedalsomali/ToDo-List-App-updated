
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
    startForm.style.visibility = 'hidden';
    startForm.style.opacity = 0;
    startForm.style.height = '0px';
    startForm.style.width = '0px';
    


    formSubject.value = todoSubject.value;


    todoForm.style.height = '420px';
    

    
}

