import Component from "../Component.js";
import { SELECTOR } from "../constants/_index.js";
export default class AddForm extends Component {
  html() {
    return `
        <form id="${SELECTOR.ADD_FORM_ID}">
            <input placeholder="Enter Todo..." />
            <button type="submit">Submit</button>
        </form>`;
  }
  event() {
    return [
      {
        type: "submit",
        target: `#${SELECTOR.ADD_FORM_ID}`,
        handler: this.handleSubmitAdding,
      },
    ];
  }

  handleSubmitAdding(event) {
    event.preventDefault();

    const $addForm = document.getElementById(SELECTOR.ADD_FORM_ID);
    const $todoInput = $addForm.querySelector("input");

    this.props.addTodo($todoInput.value);

    $todoInput.value = "";
  }
}
