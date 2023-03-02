import Component from "../Component.js";
import Selector from "../constants/Selector.js";

export default class TodoList extends Component {
  html() {
    return this.props.todos
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
        this.props.editing && this.props.editing.id === id
          ? `class="${Selector.EDIT_FORM_CLASSNAME}"`
          : `class="${Selector.EDIT_FORM_CLASSNAME} hidden"`
      }>
        <input value="${content}">
        <button type="submit">Submit</button>
      </form>
      <button type="button" ${
        this.props.editing && this.props.editing.id === id
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
    const { deleteTodo, toggleTodo, editTodo, startEditing } = this.props;

    const getTodoElementId = (todoElement) => {
      return Number(todoElement.id);
    };

    const handleClickDelete = (event) => {
      const {
        target: { parentNode: $targetTodo },
      } = event;

      deleteTodo(getTodoElementId($targetTodo));
    };

    const handleChangeToggle = (event) => {
      const {
        target: { parentNode: $labelElement },
      } = event;

      const $targetTodo = $labelElement.parentNode;

      toggleTodo(getTodoElementId($targetTodo));
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

      startEditing(getTodoElementId($targetTodo));
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
