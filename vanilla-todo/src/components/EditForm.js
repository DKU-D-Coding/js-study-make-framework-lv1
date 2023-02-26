import Component from "../Component.js";
import { SELECTOR } from "../constants/_index.js";
export default class EditForm extends Component {
  html() {
    if (!this.props.editing) {
      return;
    }

    const { editing } = this.props;

    return `
        <form class="${SELECTOR.EDIT_FORM_CLASSNAME}">
        <input value="${editing.content}">
        <button type="submit">Submit</button>
      </form>
        `;
  }
  event() {
    return [
      {
        type: "submit",
        target: `.${SELECTOR.EDIT_FORM_CLASSNAME}`,
        handler: this.handleSubmitEditing.bind(this),
      },
    ];
  }

  handleSubmitEditing(event) {
    event.preventDefault();

    const content = event.target[0].value;
    this.props.editTodo(content);
  }
}
