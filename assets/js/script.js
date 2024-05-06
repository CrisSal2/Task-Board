// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const submit = document.querySelector('.btn-primary');

const titleInput = $('#title-of-task');
const dateInput = $('#datepicker');
const taskInput = $('#task-text');
const taskForm = $('#task-form');
const addTask = $('#addTask');


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

/* function createTaskCard(task) {
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

} */


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
addTask.on('click', handleAddTask);

function handleAddTask(event) {
  event.preventDefault();

  const taskTitle = titleInput.val().trim();
  const taskDate = dateInput.val();
  const taskText = taskInput.val().trim();

  let newTask = {
    id: generateTaskId(),
    title: taskTitle,
    text: taskText,
    dueDate: taskDate,
  };

  function pullTasks() {
    let taskList = JSON.parse(localStorage.getItem('tasks'));
  
      if (!taskList) {
          taskList = [];
      }
      return taskList;
  }

  const taskList = pullTasks();
  taskList.push(newTask);

  function pushTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  pushTasks(taskList);
  
  renderTaskList();

  titleInput.val('');
  dateInput.val('');
  taskInput.val('');

  taskForm.closest('.modal').modal('hide');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

})