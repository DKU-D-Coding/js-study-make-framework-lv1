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
    return this.props.state.todos
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
        this.props.state.editing && this.props.state.editing.id === id
          ? `class="${Selector.EDIT_FORM_CLASSNAME}"`
          : `class="${Selector.EDIT_FORM_CLASSNAME} hidden"`
      }>
        <input value="${content}">
        <button type="submit">Submit</button>
      </form>
      <button type="button" ${
        this.props.state.editing && this.props.state.editing.id === id
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
      const todo = this.props.state.todos.find((value) => value.id === todoId);
      return todo;
    };

    const findTodoIndex = (todoId) => {
      const todoIndex = this.props.state.todos.findIndex(
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
      this.props.setState({
        todos: this.props.state.todos.filter((value) => value.id !== todoId),
      });
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

      const oldTodos = [...this.props.state.todos];
      oldTodos.splice(todoIndex, 1, newTodo);
      this.props.setState({ todos: oldTodos });
    };

    const editTodo = (content) => {
      const newTodo = {
        ...this.props.state.editing,
        content,
      };

      const newTodos = [...this.props.state.todos];
      newTodos.splice(findTodoIndex(this.props.state.editing.id), 1, newTodo);

      this.props.setState({ editing: null, todos: newTodos });
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
      this.props.setState({ editing: todo });
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
