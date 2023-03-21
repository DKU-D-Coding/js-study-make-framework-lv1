import Component from "../core/Component.js";
import { SELECTOR, CONTAINER } from "../constants/_index.js";
import EditForm from "./EditForm.js";
import { store, SET_EDITING, SET_TODO, todoService } from "../store.js";

export default class TodoList extends Component {
  html() {
    const { todos, editingId } = store.getState();
    return todos
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
          editingId === id ? "hidden" : ""
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
    const { editingId } = store.getState();

    if (!editingId) {
      return;
    }

    const $editForm = document.querySelector(
      `#${CONTAINER.EDIT_FORM}-${editingId}`
    );

    new EditForm($editForm);
  }

  event() {
    return [
      {
        type: "click",
        target: `.${SELECTOR.EDIT_BUTTON_CLASSNAME}`,
        handler: this.handleClickStartEditing.bind(this),
      },
      {
        type: "click",
        target: `.${SELECTOR.DELETE_BUTTON_CLASSNAME}`,
        handler: this.handleClickDelete.bind(this),
      },
      {
        type: "change",
        target: `.${SELECTOR.TOGGLE_CLASSNAME}`,
        handler: this.handleChangeToggle.bind(this),
      },
    ];
  }

  getTodoIdFrom($targetElement) {
    const $todoElement = $targetElement.closest(".todoItem");
    return Number($todoElement.id);
  }

  handleClickStartEditing(event) {
    const { target } = event;
    store.dispatch({ type: SET_EDITING, payload: this.getTodoIdFrom(target) });
  }

  handleClickDelete(event) {
    const { target } = event;
    store.dispatch({
      type: SET_TODO,
      payload: todoService.deleteTodo(this.getTodoIdFrom(target)),
    });
  }

  handleChangeToggle(event) {
    const { target } = event;
    store.dispatch({
      type: SET_TODO,
      payload: todoService.toggleTodo(this.getTodoIdFrom(target)),
    });
  }
}
