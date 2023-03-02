import Component from "../Component.js";
import Selector from "../constants/Selector.js";
export default class AddForm extends Component {
  html() {
    return `
        <form id="addForm">
            <input placeholder="Enter Todo..." />
            <button type="submit">Submit</button>
        </form>`;
  }
  setEvent() {
    const handleSubmitAdding = (event) => {
      event.preventDefault();

      const $addForm = document.getElementById(Selector.ADD_FORM_ID);
      const $todoInput = $addForm.querySelector("input");

      this.props.addTodo($todoInput.value);

      $todoInput.value = "";
    };
    this.addEvent("submit", `#${Selector.ADD_FORM_ID}`, handleSubmitAdding);
  }
}
