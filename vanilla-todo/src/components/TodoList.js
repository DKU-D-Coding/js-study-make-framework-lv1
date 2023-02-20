import Component from "../Component.js";
import { SELECTOR, CONTAINER } from "../constants/_index.js";
import EditForm from "./EditForm.js";

export default class TodoList extends Component {
  html() {
    return this.props.todos
      .map(
        ({ id, content, done }) => `
    <li id="${id}" class="todoItem ${done ? "done" : ""}">
      <label>
        <input type="checkbox" ${done ? "checked" : ""} class="${
          SELECTOR.TOGGLE_CLASSNAME
        }">
        <span>${content}</span>
      </label>
      <div id="${CONTAINER.EDIT_FORM}-${id}"></div>
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

  mounted() {
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

  getTodoIdFrom($targetElement) {
    const $todoElement = $targetElement.closest(".todoItem");
    return Number($todoElement.id);
  }

  handleClickStartEditing(event) {
    const { target } = event;
    this.props.startEditing(this.getTodoIdFrom(target));
  }

  handleClickDelete(event) {
    const { target } = event;
    this.props.deleteTodo(this.getTodoIdFrom(target));
  }

  handleChangeToggle(event) {
    const { target } = event;
    this.props.toggleTodo(this.getTodoIdFrom(target));
  }
}
