
let todoSubject = document.querySelector('.TodoSubject');
let startForm = document.querySelector('.startForm');
let todoForm = document.querySelector('.TodoForm');
let formSubject = document.querySelector('.subject');
let todoDiscription= document.querySelector('.discription');
let userEmail = document.querySelector('.email');
let dueDate = document.querySelector('.dueDate');
let trashContainer = document.querySelector('.trash');
let todosContainer = document.querySelector('.Todos');
let pageContainer = document.querySelector('.pageContainer');
let trashBtn = document.querySelector('.trashBtn');


trashBtn.addEventListener('click', showtrashContainer);
document.querySelector('.cancelBtn').addEventListener('click', cancelTodoForm);

document.addEventListener("click", (e)=> {
    if(e.target.classList.value == 'completeTodo'){
        completeTodo(e.target.parentNode.parentNode);
    }
})


document.addEventListener("click", (e)=> {
    if(e.target.classList.value == 'cancelTodo'){
        if(e.target.parentNode.parentNode.parentNode.className == 'Todos'){
            moveTodototrash(e.target.parentNode.parentNode);
        }
        else{
            e.target.parentNode.parentNode.remove();
            trashBtn.value = trashContainer.children.length;

        }
    }
})

// prevent the form from refreshing the page on submit
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("1");
    todoForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Cancel the default action
        submitTodoForm();
    });

});

// line-24
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
    console.log("before");
    if(trashContainer.classList == 'hideTrash' || trashContainer.classList == 'trash') {
        startForm.style.visibility = 'hidden';
        startForm.style.opacity = 0;
        startForm.style.height = '0px';
        todoForm.style.height = '0px';
        todosContainer.style.opacity = 0;
        trashContainer.classList = 'showTrash';



        for(let child of trashContainer.children){
            
            child.style.width = '80%';
            child.style.height = 'auto';
        }

        return
    }    
    

   
    trashContainer.classList = 'hideTrash';
    startForm.style.visibility = 'visible';
    startForm.style.opacity = 1;
    todosContainer.style.opacity = 1;
    startForm.style.height = '40px';
    for(let child of trashContainer.children){
        
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
    startForm.reset();
    addTodo(formSubject.value, dueDate.value, todoDiscription.value);
}




function addTodo(subject, duedate, Discription) {
    
    let newTodo = document.createElement('div');
    newTodo.className = 'todo';

    let todoSubjectContainer = document.createElement('div');
    let todoSubject = document.createElement('h1');
    todoSubject.innerHTML = subject;
    let todoDueDate = document.createElement('a');
    todoDueDate.innerHTML = "DUE "+ duedate;
    todoSubjectContainer.appendChild(todoSubject);
    todoSubjectContainer.appendChild(todoDueDate);

    let todoBtnContainer = document.createElement('div');
    let todoCompleteBtn = document.createElement('button');
    todoCompleteBtn.className = 'completeTodo';
    let completeBtnIcon = document.createElement('h1');
    completeBtnIcon.className = 'bi bi-check-square-fill';
    todoCompleteBtn.appendChild(completeBtnIcon);
    let todoCancelBtn = document.createElement('button');
    todoCancelBtn.className = 'cancelTodo';
    let cancelBtnIcon = document.createElement('h1');
    cancelBtnIcon.className = 'bi bi-x-square-fill';
    todoCancelBtn.appendChild(cancelBtnIcon);
    todoBtnContainer.appendChild(todoCompleteBtn);
    todoBtnContainer.appendChild(todoCancelBtn);

    let todoDiscription = document.createElement('p');
    todoDiscription.innerHTML = Discription;

    newTodo.appendChild(todoSubjectContainer);
    newTodo.appendChild(todoBtnContainer);
    newTodo.appendChild(todoDiscription);


    todosContainer.appendChild(newTodo);
    todosContainer.style.opacity =1;
    

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



function completeTodo(todo){
    document.querySelectorAll('canvas').remove();
    todo.style.opacity = 0;
    todo.addEventListener('transitionend', ()=> {
        todo.remove();}
    );
    
    const fireworks = new Fireworks.default(pageContainer, {
        decay: {min:0.001, max: 0.05}
    });

    fireworks.launch(45);
    
    
}


function moveTodototrash(todo) {

    trashContainer.appendChild(todo);
    trashBtn.value = trashContainer.children.length;

}


