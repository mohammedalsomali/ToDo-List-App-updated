
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

document.querySelector('.startTodoBtn')?.addEventListener('click', openTodoForm);
document.querySelector('.trashBtn').addEventListener('click', showTrashContainer);
document.querySelector('.cancelBtn').addEventListener('click', cancelTodoForm);


document.addEventListener("click", (e)=> {
    var clickedBtn = document.querySelector('.danger');
    testing = e.target;
    if(e.target == clickedBtn){
        console.log("yay");
    }
})

document.addEventListener('DOMContentLoaded', (event) => {
    todoForm.addEventListener("submit", function(e) {
        e.preventDefault() // Cancel the default action
        submitTodoForm();
    });
});

// show the calender when the date field is clicked and dont allow for due date < today
dueDate.addEventListener('focus', function(e){
    
    this.min= new Date().toISOString().split('T')[0];
    this.showPicker();
});



function openTodoForm(){

    startForm.style.visibility = 'hidden';
    startForm.style.opacity = 0;
    startForm.style.height = '0px';
    todoscontainer.style.opacity = 0;

    formSubject.value = todoSubject.value;

    todoForm.style.height = '60%';
    
}




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

        for(var child of trashcontainer.children){
            child.style.opacity = 1;
        }

        return
    }    

    trashcontainer.style.transform = 'skew(55deg)';
    trashcontainer.style.height = '0px';
    trashcontainer.style.width = '0px';
    trashcontainer.style.right = '40px';
    trashcontainer.style.bottom = '40px';
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

    addTodo(formSubject.value, dueDate.value, todoDiscription.value);
}




function cancelTodoForm() {
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todoscontainer.style.opacity = 1;
    startForm.style.height = '40px';

    todoForm.style.height = '0px';

}




function addTodo(subject, duedate, Discription) {
    
    var todo = document.createElement('div');
    todo.className = 'todo';
    var todoHeader = document.createElement('h1');
    var todoDueDate = document.createElement('a');
    var todoDiscription = document.createElement('p');
    var todoCompleteBtn = document.createElement('button');
    var todoCancelBtn = document.createElement('button');
    todoCancelBtn.innerHTML = "cancel"
    todoCancelBtn.classList = "danger";
    todoCompleteBtn.classList = "btn btn-primary";
    

    todoHeader.innerHTML = subject;
    todoDueDate.innerHTML = duedate;
    todoDiscription.innerHTML = Discription; 


    todo.appendChild(todoHeader);
    todo.appendChild(todoDueDate);
    todo.appendChild(todoDiscription);
    todo.appendChild(todoCompleteBtn);
    todo.appendChild(todoCancelBtn);
    todoscontainer.appendChild(todo);
    // localStorage.setItem('todos', todoData.outerHTML);
    todoscontainer.style.opacity = 1;
    

}


function removeTodo() {
    // todo.style.opacity = 0;
    // trashcontainer.appendChild(todo);
    console.log("yay!!! it working");

}


