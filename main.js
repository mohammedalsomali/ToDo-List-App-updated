var createBtn;
var TodoSubject;
var startForm;

window.onload = function () {
    
    createBtn = document.getElementsByClassName('.createTodoBtn');
    TodoSubject = document.getElementsByClassName('TodoSubject');
    startForm = document.getElementsByClassName('startForm');
    startForm.onSubmit = () => {
        
        createBtn.style.backgroundColor = 'blue';
        console.log('banana');
        // e.preventDefault();
    };
} 

function openForm (){
    createBtn.style.backgroundColor = 'blue';
}

