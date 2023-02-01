const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

let todos = [];

const deleteTodo = (todoId) => {
  todos.splice(
    todos.findIndex((value) => value.id === todoId),
    1
  );
  renderTodo();
};

const toggleTodo = (todoId) => {
  const oldTodo = todos.find((value) => value.id === todoId);
  todos.splice(
    todos.findIndex((value) => value.id === todoId),
    1,
    { ...oldTodo, done: !oldTodo.done }
  );
  renderTodo();
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

    todoElement.appendChild(checkboxInput);
    todoElement.appendChild(content);
    todoElement.appendChild(deleteButton);

    if (todo.done) {
      todoElement.style.textDecorationLine = "line-through";
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
