
var TodoSubject = document.getElementsByClassName('TodoSubject');
var startForm = document.getElementsByClassName('startForm');

window.onload = function () {
    
    document.querySelector('.startTodoBtn').addEventListener('click', openForm);
    
    
} 

function openForm (){
    document.querySelector('.startForm').style.display = 'none';
    document.querySelector('.TodoForm').style.display = 'flex';
}

