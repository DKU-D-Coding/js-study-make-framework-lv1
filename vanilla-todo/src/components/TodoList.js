import Component from "../Component.js";
import { SELECTOR } from "../constants/Selector.js";

export default class TodoList extends Component {
  html() {
    return this.props.todos
      .map(
        ({ id, content, done }) => `
    <li id="${id}" ${done ? 'class="done"' : ""}>
    <label>
      <input type="checkbox" ${done ? "checked" : ""}  class="${
          SELECTOR.TOGGLE_CLASSNAME
        }">
      <span>${content}</span>
    </label>
      <form class="${SELECTOR.EDIT_FORM_CLASSNAME} ${
          this.props.editing && this.props.editing.id === id ? "" : "hidden"
        }">
        <input value="${content}">
        <button type="submit">Submit</button>
      </form>
      <button type="button" class="${SELECTOR.EDIT_BUTTON_CLASSNAME} ${
          this.props.editing && this.props.editing.id === id ? "hidden" : ""
        }">Edit</button>
      <button type="button" class="${
        SELECTOR.DELETE_BUTTON_CLASSNAME
      }">Delete</button>
    </li>
  `
      )
      .join("");
  }

  event() {
    return [
      {
        type: "submit",
        target: `.${SELECTOR.EDIT_FORM_CLASSNAME}`,
        handler: this.handleSubmitEditing,
      },
      {
        type: "click",
        target: `.${SELECTOR.EDIT_BUTTON_CLASSNAME}`,
        handler: this.handleClickStartEditing,
      },
      {
        type: "click",
        target: `.${SELECTOR.DELETE_BUTTON_CLASSNAME}`,
        handler: this.handleClickDelete,
      },
      {
        type: "change",
        target: `.${SELECTOR.TOGGLE_CLASSNAME}`,
        handler: this.handleChangeToggle,
      },
    ];
  }

  getTodoElementId(todoElement) {
    return Number(todoElement.id);
  }

  handleSubmitEditing(event) {
    event.preventDefault();

    const content = event.target[0].value;
    this.props.editTodo(content);
  }

  handleClickStartEditing(event) {
    const {
      target: { parentNode: $targetTodo },
    } = event;

    this.props.startEditing(getTodoElementId($targetTodo));
  }

  handleClickDelete(event) {
    const {
      target: { parentNode: $targetTodo },
    } = event;

    this.props.deleteTodo(getTodoElementId($targetTodo));
  }

  handleChangeToggle(event) {
    const {
      target: { parentNode: $labelElement },
    } = event;

    const $targetTodo = $labelElement.parentNode;

    this.props.toggleTodo(getTodoElementId($targetTodo));
  }
}
