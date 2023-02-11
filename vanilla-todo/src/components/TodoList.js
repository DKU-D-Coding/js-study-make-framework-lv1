import Component from "../Component.js";
import Selector from "../constants/Selector.js";

export default class TodoList extends Component {
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
  init() {
    this.setState({
      todos: [],
      editing: null,
    });
  }
}
