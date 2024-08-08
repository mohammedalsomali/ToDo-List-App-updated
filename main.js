
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

// document.querySelector('.startTodoBtn').addEventListener('click', openTodoForm);
document.querySelector('.trashBtn').addEventListener('click', showtrashContainer);
document.querySelector('.cancelBtn').addEventListener('click', cancelTodoForm);
// document.querySelector('.addTodo').addEventListener('click', submitTodoForm);

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
        // openTodoForm(); 
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
        trashContainer.style.height = '60%';
        trashContainer.style.width = '50%';
        trashContainer.style.right = '25%';
        trashContainer.style.bottom = '20%';
        trashContainer.style.transform = 'skew(0deg)';
        trashContainer.style.opacity = 1;


        for(var child of trashContainer.children){
            child.style.opacity = 1;
            child.style.width = 'auto';
            child.style.height = 'auto';
        }

        return
    }    

    trashContainer.style.transform = 'skew(50deg)';
    trashContainer.style.height = '0px';
    trashContainer.style.width = '0px';
    trashContainer.style.right = '40px';
    trashContainer.style.bottom = '40px';
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

}




// function addTodo(subject, duedate, Discription) {
    
//     var todo = document.createElement('div');
//     todo.classList = 'todo';
//     var todoHeader = document.createElement('h1');
//     var todoDueDate = document.createElement('a');
//     var subjectContainer = document.createElement('div'); //this is a container for the todo subject and due date



//     var todoCompleteBtn = document.createElement('button');
//     var todoCancelBtn = document.createElement('button');
//     todoCancelBtn.classList = "cancelTodo";
//     todoCompleteBtn.classList = "completeTodo";
    
//     var todoBtnContainer = document.createElement('div');

//     // creating h1 elements to hold the todo button Icons
//     var cancelBtnIcon = document.createElement('h1');
//     cancelBtnIcon.classList = 'bi bi-x-square-fill';
//     todoCancelBtn.appendChild(cancelBtnIcon);

//     var completeBtnIcon = document.createElement('h1');
//     completeBtnIcon.classList = 'bi bi-check-square-fill';
//     todoCompleteBtn.appendChild(completeBtnIcon);


//     var todoDiscription = document.createElement('p');


//     todoHeader.innerHTML = subject;
//     todoDueDate.innerHTML = duedate;
//     todoDiscription.innerHTML = Discription; 



//     subjectContainer.appendChild(todoHeader);
//     subjectContainer.appendChild(todoDueDate);
//     todo.appendChild(subjectContainer);
//     todoBtnContainer.appendChild(todoCompleteBtn);
//     todoBtnContainer.appendChild(todoCancelBtn);
//     todo.appendChild(todoBtnContainer);
//     todo.appendChild(todoDiscription);
    
//     todosContainer.appendChild(todo);
//     // localStorage.setItem('todos', todoData.outerHTML);
//     todosContainer.style.opacity = 1;
    

// }



function addTodo(subject, duedate, Discription) {
    
    var newTodo = document.getElementById('todoTemplate').cloneNode(true);
    todosContainer.appendChild(newTodo);
    todosContainer.style.opacity =1;
    

}


function removeTodo(todo) {
    todo.style.opacity = 0;
    trashContainer.appendChild(todo);
   

}


