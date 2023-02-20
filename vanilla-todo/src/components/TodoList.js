import Component from "../Component.js";
import { SELECTOR } from "../constants/Selector.js";
import EditForm from "./EditForm.js";

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
 <div id="EditForm-${id}"></div>
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

  declare() {
    const { editing, editTodo } = this.props;
    new EditForm($app.querySelector("#EditForm"), {
      editing,
      editTodo: editTodo.bind(this),
    });
  }

  event() {
    return [
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
