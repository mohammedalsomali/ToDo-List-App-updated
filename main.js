
var todoSubject = document.querySelector('.TodoSubject');
var startForm = document.querySelector('.startForm');
var todoForm = document.querySelector('.TodoForm');
var formSubject = document.querySelector('.subject');
var todoDiscription= document.querySelector('.discription');
var userEmail = document.querySelector('.email');
var dueDate = document.querySelector('.dueDate');
var trashContainer = document.querySelector('.trash');
var todosContainer = document.querySelector('.Todos');
var testing;


document.querySelector('.trashBtn').addEventListener('click', showtrashContainer);
document.querySelector('.cancelBtn').addEventListener('click', cancelTodoForm);


document.addEventListener("click", (e)=> {
    if(e.target.classList.value == 'cancelTodo'){
        removeTodo(e.target.parentNode.parentNode);
    }
})

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("1");
    todoForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Cancel the default action
        submitTodoForm();
    });

});


document.addEventListener('DOMContentLoaded', (event) => {
    startForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Cancel the default action
        openTodoForm(); 
    });
});

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
    
    todoForm.style.height = '30rem';
    
}



// trash is where the deleted todos move to
function showtrashContainer() {

    if(trashContainer.style.height == '0px' || trashContainer.style.height == '') {
        startForm.style.visibility = 'hidden';
        startForm.style.opacity = 0;
        startForm.style.height = '0px';
        todoForm.style.height = '0px';
        todosContainer.style.opacity = 0;
        trashContainer.style.height = '90%';
        trashContainer.style.width = '90%';
        // trashContainer.style.right = '25%';
        // trashContainer.style.bottom = '20%';
        trashContainer.style.animation = 'showTrashAnimation 2s';
        trashContainer.style.opacity = 1;


        for(var child of trashContainer.children){
            child.style.opacity = 1;
            child.style.width = 'auto';
            child.style.height = 'auto';
        }

        return
    }    

   
    trashContainer.style.animation = 'none';
    trashContainer.style.animation = 'hideTrashAnimation 1.5s';
    // trashContainer.style.height = '0%';
    // trashContainer.style.width = '0%';
    // trashContainer.style.right = '40px';
    // trashContainer.style.bottom = '40px';
    trashContainer.style.opacity = 0;
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todosContainer.style.opacity = 1;
    startForm.style.height = '40px';
    for(var child of trashContainer.children){
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
    todosContainer.style.opacity = 1;
    todosContainer.style.height = 'auto';
    todoForm.style.height = '0px';

    addTodo(formSubject.value, dueDate.value, todoDiscription.value);
}




function cancelTodoForm() {
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todosContainer.style.opacity = 1;
    todosContainer.style.height = 'auto';

    startForm.style.height = '40px';

    todoForm.style.height = '0px';
    todoSubject.value = '';

}







function addTodo(subject, duedate, Discription) {
    
    var newTodo = document.getElementById('todoTemplate').cloneNode(true);
    newTodo.removeAttribute('id');
    newTodo.removeAttribute('class');
    newTodo.classList = 'todo';
    newTodo.children[0].children[0].innerHTML = subject;
    newTodo.children[0].children[1].innerHTML = duedate;
    newTodo.children[2].innerHTML = Discription;

    todosContainer.appendChild(newTodo);
    todosContainer.style.opacity =1;
    

}


function removeTodo(todo) {
    todo.style.opacity = 0;
    trashContainer.appendChild(todo);
   

}


