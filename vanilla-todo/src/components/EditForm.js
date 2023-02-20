import Component from "../Component.js";
export default class EditForm extends Component {
  html() {
    return `
        <form class="${SELECTOR.EDIT_FORM_CLASSNAME} ${
      this.props.editing && this.props.editing.id === id ? "" : "hidden"
    }">
        <input value="${content}">
        <button type="submit">Submit</button>
      </form>
        `;
  }
  event() {
    return [
      {
        type: "submit",
        target: `.${SELECTOR.EDIT_FORM_CLASSNAME}`,
        handler: this.handleSubmitEditing,
      },
    ];
  }

  handleSubmitEditing(event) {
    event.preventDefault();

    const content = event.target[0].value;
    this.props.editTodo(content);
  }
}
