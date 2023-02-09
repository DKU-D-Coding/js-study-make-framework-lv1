const ADD_FORM_ID = "addForm";
const EDIT_FORM_CLASSNAME = "editForm";
const EDIT_BUTTON_CLASSNAME = "editing";
const TOGGLE_CLASSNAME = "toggle";
const DELETE_BUTTON_CLASSNAME = "delete";

const $addForm = document.getElementById(ADD_FORM_ID);
const $todoInput = $addForm.querySelector("input");
const $todoList = document.getElementById("todoList");

let todos = [];
let editing = null;

const findTodo = (todoId) => {
  const todo = todos.find((value) => value.id === todoId);
  return todo;
};

const findTodoIndex = (todoId) => {
  const todoIndex = todos.findIndex((value) => value.id === todoId);
  return todoIndex;
};

const getTodoElementId = (todoElement) => {
  return Number(todoElement.id);
};

const handleClickDelete = (event) => {
  const {
    target: { parentNode: $targetTodo },
  } = event;

  deleteTodo(getTodoElementId($targetTodo));
};

const deleteTodo = (todoId) => {
  todos.splice(findTodoIndex(todoId), 1);
  renderTodo();
};

const handleChangeToggle = (event) => {
  const {
    target: { parentNode: $labelElement },
  } = event;

  const $targetTodo = $labelElement.parentNode;

  toggleTodo(getTodoElementId($targetTodo));
};

const toggleTodo = (todoId) => {
  const todoIndex = findTodoIndex(todoId);
  const oldTodo = findTodo(todoId);
  console.log(todoIndex, oldTodo);
  const newTodo = {
    ...oldTodo,
    done: !oldTodo.done,
  };
  todos.splice(todoIndex, 1, newTodo);
  renderTodo();
};

const editTodo = (content) => {
  const newTodo = {
    ...editing,
    content,
  };

  todos.splice(findTodoIndex(editing.id), 1, newTodo);

  editing = null;

  renderTodo();
};

const handleSubmitEditing = (event) => {
  event.preventDefault();

  const content = event.target[0].value;
  editTodo(content);
};

const handleClickStartEditing = (event) => {
  const {
    target: { parentNode: $targetTodo },
  } = event;

  startEditing(findTodo(getTodoElementId($targetTodo)));
};

const startEditing = (todo) => {
  editing = todo;

  const editingTodo = document.getElementById(todo.id);
  const editForm = editingTodo.querySelector("form");
  const editingButton = editingTodo.querySelector(EDIT_BUTTON_CLASSNAME);

  editForm.classList.remove("hidden");
  editingButton.classList.add("hidden");
};

const addTodo = () => {
  editing = null;

  const newTodo = {
    content: $todoInput.value,
    id: Date.now(),
    done: false,
  };
  $todoInput.value = "";

  todos.push(newTodo);
  renderTodo();
};

const handleSubmitAdding = (event) => {
  event.preventDefault();

  addTodo();
};

const addEvent = (eventType, targetSelector, callback) => {
  document.body.addEventListener(eventType, (event) => {
    if (!event.target.closest(targetSelector)) {
      return;
    }
    callback(event);
  });
};

addEvent("submit", `#${ADD_FORM_ID}`, handleSubmitAdding);
addEvent("submit", `.${EDIT_FORM_CLASSNAME}`, handleSubmitEditing);
addEvent("click", `.${EDIT_BUTTON_CLASSNAME}`, handleClickStartEditing);
addEvent("click", `.${DELETE_BUTTON_CLASSNAME}`, handleClickDelete);
addEvent("change", `.${TOGGLE_CLASSNAME}`, handleChangeToggle);

const renderTodo = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, done }) => `
    <li id="${id}" ${done ? 'class="done"' : ""}>
    <label>
      <input type="checkbox" ${
        done ? "checked" : ""
      }  class="${TOGGLE_CLASSNAME}">
      <span>${content}</span>
    </label>
      <form ${
        editing && editing.id === id
          ? `class="${EDIT_FORM_CLASSNAME}`
          : `class="${EDIT_FORM_CLASSNAME} hidden"`
      }>
        <input value="${content}">
        <button type="submit">완료</button>
      </form>
      <button type="button" ${
        editing && editing.id === id
          ? `class="${EDIT_BUTTON_CLASSNAME} hidden"`
          : `class="${EDIT_BUTTON_CLASSNAME}"`
      }>수정</button>
      <button type="button" class="${DELETE_BUTTON_CLASSNAME}">삭제</button>
    </li>
  `
    )
    .join("");
};
