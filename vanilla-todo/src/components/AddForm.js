import Component from "../Component.js";
import Selector from "../constants/Selector.js";
import { todoList } from "../App.js";
export default class AddForm extends Component {
  html() {
    return `
        <form id="addForm">
            <input placeholder="Enter Todo..." />
            <button type="submit">Submit</button>
        </form>`;
  }
  setEvent() {
    const addTodo = () => {
      const $addForm = document.getElementById(Selector.ADD_FORM_ID);
      const $todoInput = $addForm.querySelector("input");

      todoList.setState({ editing: null });

      const newTodo = {
        content: $todoInput.value,
        id: Date.now(),
        done: false,
      };
      $todoInput.value = "";

      todoList.setState({ todos: [...todoList.state.todos, newTodo] });
      todoList.render();
    };

    const handleSubmitAdding = (event) => {
      event.preventDefault();

      addTodo();
    };
    this.addEvent("submit", `#${Selector.ADD_FORM_ID}`, handleSubmitAdding);
  }
}
