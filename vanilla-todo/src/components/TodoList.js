import Component from "../Component.js";
import Selector from "../constants/Selector.js";

export default class TodoList extends Component {
  initState() {
    return {
      todos: [],
      editing: null,
    };
  }
  html() {
    return this.state.todos
      .map(
        ({ id, content, done }) => `
    <li id="${id}" ${done ? 'class="done"' : ""}>
    <label>
      <input type="checkbox" ${done ? "checked" : ""}  class="${
          Selector.TOGGLE_CLASSNAME
        }">
      <span>${content}</span>
    </label>
      <form ${
        this.state.editing && this.state.editing.id === id
          ? `class="${Selector.EDIT_FORM_CLASSNAME}`
          : `class="${Selector.EDIT_FORM_CLASSNAME} hidden"`
      }>
        <input value="${content}">
        <button type="submit">Submit</button>
      </form>
      <button type="button" ${
        this.state.editing && this.state.editing.id === id
          ? `class="${Selector.EDIT_BUTTON_CLASSNAME} hidden"`
          : `class="${Selector.EDIT_BUTTON_CLASSNAME}"`
      }>Edit</button>
      <button type="button" class="${
        Selector.DELETE_BUTTON_CLASSNAME
      }">Delete</button>
    </li>
  `
      )
      .join("");
  }

  setEvent() {
    const findTodo = (todoId) => {
      const todo = this.state.todos.find((value) => value.id === todoId);
      return todo;
    };

    const findTodoIndex = (todoId) => {
      const todoIndex = this.state.todos.findIndex(
        (value) => value.id === todoId
      );
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
      this.setState({
        todos: this.state.todos.filter((value) => value.id !== todoId),
      });
      this.render();
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
      const newTodo = {
        ...oldTodo,
        done: !oldTodo.done,
      };

      const oldTodos = [...this.state.todos];
      oldTodos.splice(todoIndex, 1, newTodo);
      this.setState({ todos: oldTodos });
      this.render();
    };

    const editTodo = (content) => {
      const newTodo = {
        ...this.state.editing,
        content,
      };

      const newTodos = [...this.state.todos];
      newTodos.splice(findTodoIndex(this.state.editing.id), 1, newTodo);

      this.setState({ editing: null, todos: newTodos });

      this.render();
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

    const paintEditForm = (todoId) => {
      const $editingTodo = document.getElementById(todoId);
      const $editForm = $editingTodo.querySelector("form");
      const $editingButton = $editingTodo.querySelector(
        Selector.EDIT_BUTTON_CLASSNAME
      );

      $editForm.classList.remove("hidden");
      $editingButton.classList.add("hidden");
    };

    const startEditing = (todo) => {
      this.setState({ editing: todo });

      paintEditForm(todo.id);
    };
    this.addEvent(
      "submit",
      `.${Selector.EDIT_FORM_CLASSNAME}`,
      handleSubmitEditing
    );
    this.addEvent(
      "click",
      `.${Selector.EDIT_BUTTON_CLASSNAME}`,
      handleClickStartEditing
    );
    this.addEvent(
      "click",
      `.${Selector.DELETE_BUTTON_CLASSNAME}`,
      handleClickDelete
    );
    this.addEvent(
      "change",
      `.${Selector.TOGGLE_CLASSNAME}`,
      handleChangeToggle
    );
  }
}
