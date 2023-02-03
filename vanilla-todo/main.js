// Import elements
const toDoForm = document.getElementById("todo-form"),
  toDoTitle = toDoForm.querySelector("h3"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.getElementById("todo-list");

// Constants
const LS_TAG = "todos";

// State
let toDos = [];
let isEditing = false;
let editingId = null;

// Functions

function saveToDos() {
  localStorage.setItem(LS_TAG, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function renderToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.innerText = newToDo.text;
  const editButton = document.createElement("span");
  editButton.innerText = " 🖊️";
  editButton.addEventListener("click", startEditToDo);
  const deleteButton = document.createElement("span");
  deleteButton.innerText = " ✅";
  deleteButton.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}

function createToDo() {
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  renderToDo(newToDoObj);
  saveToDos();
  toDoInput.value = "";
}

function startEditToDo(event) {
  isEditing = true;
  toDoTitle.innerText = "Edit To Do";
  const parent = event.target.parentElement;
  editingId = parent.id;
  toDoInput.value = parent.querySelector(".todo-text").innerText;
}

function finishEditToDo() {
  const editted = toDoInput.value;
  const edittedToDo = toDos.find((toDo) => toDo.id === parseInt(editingId));
  edittedToDo.text = editted;
  const li = document.getElementById(editingId);
  li.querySelector(".todo-text").innerText = editted;
  saveToDos();
  isEditing = false;
  toDoTitle.innerText = "Add your To Do";
  toDoInput.value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  if (isEditing) {
    finishEditToDo();
  } else {
    createToDo();
  }
}

// Event Listeners
toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(LS_TAG);

if (savedToDos !== null) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(renderToDo);
}
