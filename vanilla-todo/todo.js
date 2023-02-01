const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

let todos = [];
let editing = null;

const deleteTodo = (todoId) => {
  todos.splice(
    todos.findIndex((value) => value.id === todoId),
    1
  );
  renderTodo();
};

const toggleTodo = (todoId) => {
  const oldTodo = todos.find((value) => value.id === todoId);
  const newTodo = {
    ...oldTodo,
    done: !oldTodo.done,
  };
  todos.splice(
    todos.findIndex((value) => value.id === todoId),
    1,
    newTodo
  );
  renderTodo();
};

const editTodo = (event) => {
  event.preventDefault();

  const newTodo = {
    ...editing,
    content: event.target[0].value,
  };

  todos.splice(
    todos.findIndex((value) => value.id === editing.id),
    1,
    newTodo
  );

  editing = null;

  renderTodo();
};

const startEditing = (todo) => {
  editing = todo;

  const editingTodo = document.getElementById(todo.id);
  const editForm = editingTodo.querySelector("form");
  const startEditingButton = editingTodo.querySelector(".startEditingButton");

  editForm.classList.remove("hidden");
  startEditingButton.classList.add("hidden");
};

const renderTodo = () => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoElement = document.createElement("li");
    todoElement.id = todo.id;

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.checked = todo.done;
    checkboxInput.addEventListener("change", () => toggleTodo(todo.id));

    const content = document.createElement("span");
    content.innerText = todo.content;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "삭제";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    const startEditingButton = document.createElement("button");
    startEditingButton.type = "button";
    startEditingButton.classList.add("startEditingButton");
    startEditingButton.innerText = "수정";
    startEditingButton.addEventListener("click", () => startEditing(todo));

    const editForm = document.createElement("form");
    const editInput = document.createElement("input");
    editInput.value = todo.content;

    const submitEditingButton = document.createElement("button");
    submitEditingButton.type = "submit";
    submitEditingButton.innerText = "완료";

    editForm.addEventListener("submit", editTodo);

    editForm.appendChild(editInput);
    editForm.appendChild(submitEditingButton);

    todoElement.appendChild(checkboxInput);
    todoElement.appendChild(content);
    todoElement.appendChild(editForm);
    todoElement.appendChild(startEditingButton);
    todoElement.appendChild(deleteButton);

    if (todo.done) {
      todoElement.classList.add("done");
    } else {
      todoElement.classList.remove("done");
    }

    if (editing && editing.id === todo.id) {
      editForm.classList.remove("hidden");
      startEditingButton.classList.add("hidden");
    } else {
      editForm.classList.add("hidden");
      startEditingButton.classList.remove("hidden");
    }

    todoList.appendChild(todoElement);
  });
};

const addTodo = (event) => {
  event.preventDefault();

  const newTodo = {
    content: todoInput.value,
    id: Date.now(),
    done: false,
  };
  todoInput.value = "";

  todos.push(newTodo);
  renderTodo();
};

todoForm.addEventListener("submit", addTodo);
