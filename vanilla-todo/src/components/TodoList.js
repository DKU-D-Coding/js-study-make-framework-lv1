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
    const { deleteTodo, toggleTodo, editTodo, startEditing } = this.props;

    const getTodoElementId = (todoElement) => {
      return Number(todoElement.id);
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

    return [
      {
        type: "submit",
        target: `.${SELECTOR.EDIT_FORM_CLASSNAME}`,
        handler: handleSubmitEditing,
      },
      {
        type: "click",
        target: `.${SELECTOR.EDIT_BUTTON_CLASSNAME}`,
        handler: handleClickStartEditing,
      },
      {
        type: "click",
        target: `.${SELECTOR.DELETE_BUTTON_CLASSNAME}`,
        handler: handleClickDelete,
      },
      {
        type: "change",
        target: `.${SELECTOR.TOGGLE_CLASSNAME}`,
        handler: handleChangeToggle,
      },
    ];
  }
}
