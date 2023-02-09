export default class TodoList extends Component {
  init() {
    this.setState({
      todos: [],
      editing: null,
    });
    this.setHtml(
      this.state.todos
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
        <button type="submit">Submit</button>
      </form>
      <button type="button" ${
        editing && editing.id === id
          ? `class="${EDIT_BUTTON_CLASSNAME} hidden"`
          : `class="${EDIT_BUTTON_CLASSNAME}"`
      }>Edit</button>
      <button type="button" class="${DELETE_BUTTON_CLASSNAME}">Delete</button>
    </li>
  `
        )
        .join("")
    );
  }
}
