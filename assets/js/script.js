// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const addBtn = document.querySelector('.btn');
const submit = document.querySelector('#submit');


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
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function openModal(event) {
  event.preventDefault();

  backdrop.style.display = 'block';
  modal.style.display = 'block';

}
addBtn.addEventListener('click', openModal);


function handleAddTask(event){
    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const titleInput = document.querySelector('#title-of-task');
    const dateInput = document.querySelector('#date-text');
    const taskInput = document.querySelector('#task-text');

    tasks.push({

      title: titleInput.value,
      date: dateInput.value,
      task: taskInput.value,

    });

    backdrop.style.display = 'none';
    modal.style.display = 'none';

    localStorage.setItem('tasks', JSON.stringify(tasks));
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

});
