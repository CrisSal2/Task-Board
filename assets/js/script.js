// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const submit = document.querySelector('.btn-primary');


// Todo: create a function to generate a unique task id
function generateTaskId() {

    var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
  do {
    var ascicode = Math.floor((Math.random() * 42) + 48);
    if (ascicode < 58 || ascicode > 64) {
      idstr += String.fromCharCode(ascicode);
    }
  } while (idstr.length < 32);

  return (idstr);
}
console.log(generateTaskId());


// Todo: create a function to create a task card

function createTaskCard(task) {
  const mainEl = document.querySelector("#todo-cards");
  const task = document.createElement("div");
  const title = document.createElement("h1");
  const date = document.createElement("h2");
  const todo = document.createElement("p");

  title.textContent = task.title;
  date.textContent = task.date;
  todo.textContent = task.content;

  mainEl.append(task);
  task.append(h1El, h2El, paraEl);

  task.setAttribute('class', 'card');

}



/* {
const tasks = JSON.parse(localStorage.getItem("tasks"));

const mainEl = document.querySelector("#todo-cards");

for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    const divEl = document.createElement("div");
    const pEl = document.createElement("p");
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");

    h3El.textContent = task.date;
    h2El.textContent = task.title;
    pEl.textContent = task.content;

    mainEl.append(divEl);
    divEl.append(h2El, h3El, pEl);

    divEl.setAttribute('class', 'card');

}
} */
/* function createTaskCard(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

}

$( function() {
  $( "#sortable" ).sortable({
    revert: true
  });
  $( "#draggable" ).draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
} ); */

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const titleInput = document.querySelector('#title-of-task');
    const dateInput = document.querySelector('#datepicker');
    const taskInput = document.querySelector('#task-text');

    tasks.push({

      title: titleInput.value,
      date: dateInput.value,
      task: taskInput.value,

    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createTaskCard();
}

submit.addEventListener('click', handleAddTask);

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

})