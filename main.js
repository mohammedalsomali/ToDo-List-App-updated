
var todoSubject = document.querySelector('.TodoSubject');
var startForm = document.querySelector('.startForm');
var todoForm = document.querySelector('.TodoForm');
var formSubject = document.querySelector('.subject');
var todoDiscription= document.querySelector('.discription');
var userEmail = document.querySelector('.email');
var dueDate = document.querySelector('.dueDate');
var trashcontainer = document.querySelector('.trash');
var todoscontainer = document.querySelector('.Todos');
var testing;

document.querySelector('.startTodoBtn').addEventListener('click', openTodoForm);
document.querySelector('.trashBtn').addEventListener('click', showTrashContainer);
document.querySelector('.cancelBtn').addEventListener('click', cancelTodoForm);
document.querySelector('.submit').addEventListener('click', submitTodoForm);

document.addEventListener("click", (e)=> {
    // used for testing
    // var clickedBtn = document.querySelector('.cancelTodo');
    // testing = e.target;
    if(e.target.classList.value == 'cancelTodo'){
        removeTodo(e.target.parentNode.parentNode);
    }
})



// show the calender when the date field is clicked and dont allow for due date < today
dueDate.addEventListener('focus', function(e){
    
    this.min= new Date().toISOString().split('T')[0];
    this.showPicker();
});



function openTodoForm(){

    if(todoSubject.value === ''){
        return alert("please add a subject");
    }
    formSubject.value = todoSubject.value;
    startForm.style.visibility = 'hidden';
    startForm.style.opacity = 0;
    startForm.style.height = '0px';
    

    todoscontainer.style.opacity = 0;
    todoscontainer.style.height = '0px';
    todoForm.style.height = 'auto';
    
}



// trash is where the deleted todos move to
function showTrashContainer() {

    if(trashcontainer.style.height == '0px' || trashcontainer.style.height == '') {
        startForm.style.visibility = 'hidden';
        startForm.style.opacity = 0;
        startForm.style.height = '0px';
        todoForm.style.height = '0px';
        todoscontainer.style.opacity = 0;
        trashcontainer.style.height = '60%';
        trashcontainer.style.width = '50%';
        trashcontainer.style.right = '25%';
        trashcontainer.style.bottom = '20%';
        trashcontainer.style.transform = 'skew(0deg)';
        trashcontainer.style.opacity = 1;


        for(var child of trashcontainer.children){
            child.style.opacity = 1;
            child.style.width = 'auto';
            child.style.height = 'auto';
        }

        return
    }    

    trashcontainer.style.transform = 'skew(50deg)';
    trashcontainer.style.height = '0px';
    trashcontainer.style.width = '0px';
    trashcontainer.style.right = '40px';
    trashcontainer.style.bottom = '40px';
    trashcontainer.style.opacity = 0;
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todoscontainer.style.opacity = 1;
    startForm.style.height = '40px';
    for(var child of trashcontainer.children){
        child.style.opacity = 0;
        child.style.width = '0px';
        child.style.height = '0px';
        child.style.overflow = 'hidden';
    }
}



function submitTodoForm() {

    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    startForm.style.height = '40px';

    todoForm.style.height = '0px';

    addTodo(formSubject.value, dueDate.value, todoDiscription.value);
}




function cancelTodoForm() {
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todoscontainer.style.opacity = 1;
    todoscontainer.style.height = 'auto';

    startForm.style.height = '40px';

    todoForm.style.height = '0px';

}




function addTodo(subject, duedate, Discription) {
    
    var todo = document.createElement('div');
    todo.classList = 'todo';
    var todoHeader = document.createElement('h1');
    var todoDueDate = document.createElement('a');
    var subjectContainer = document.createElement('div'); //this is a container for the todo subject and due date



    var todoCompleteBtn = document.createElement('button');
    var todoCancelBtn = document.createElement('button');
    todoCancelBtn.classList = "cancelTodo";
    todoCompleteBtn.classList = "completeTodo";
    
    var todoBtnContainer = document.createElement('div');

    // creating h1 elements to hold the todo button Icons
    var cancelBtnIcon = document.createElement('h1');
    cancelBtnIcon.classList = 'bi bi-x-square-fill';
    todoCancelBtn.appendChild(cancelBtnIcon);

    var completeBtnIcon = document.createElement('h1');
    completeBtnIcon.classList = 'bi bi-check-square-fill';
    todoCompleteBtn.appendChild(completeBtnIcon);


    var todoDiscription = document.createElement('p');


    todoHeader.innerHTML = subject;
    todoDueDate.innerHTML = duedate;
    todoDiscription.innerHTML = Discription; 



    subjectContainer.appendChild(todoHeader);
    subjectContainer.appendChild(todoDueDate);
    todo.appendChild(subjectContainer);
    todoBtnContainer.appendChild(todoCompleteBtn);
    todoBtnContainer.appendChild(todoCancelBtn);
    todo.appendChild(todoBtnContainer);
    todo.appendChild(todoDiscription);
    
    todoscontainer.appendChild(todo);
    // localStorage.setItem('todos', todoData.outerHTML);
    todoscontainer.style.opacity = 1;
    

}


function removeTodo(todo) {
    todo.style.opacity = 0;
    trashcontainer.appendChild(todo);
   

}


