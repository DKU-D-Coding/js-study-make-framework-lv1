import Component from "./Component.js";

export default class App extends Component {
  init() {
    this.state = {
      todos: [],
    };
    this.html = todos
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
        <button type="submit">완료</button>
      </form>
      <button type="button" ${
        editing && editing.id === id
          ? `class="${EDIT_BUTTON_CLASSNAME} hidden"`
          : `class="${EDIT_BUTTON_CLASSNAME}"`
      }>수정</button>
      <button type="button" class="${DELETE_BUTTON_CLASSNAME}">삭제</button>
    </li>
  `
      )
      .join("");
  }
}
