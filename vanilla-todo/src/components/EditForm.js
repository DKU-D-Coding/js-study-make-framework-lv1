import Component from "../core/Component.js";
import { SELECTOR } from "../constants/_index.js";
import { store, EDIT_TODO, SET_EDITING_NULL } from "../store.js";

export default class EditForm extends Component {
  html() {
    const { editingId, todos } = store.getState();
    if (!editingId) {
      return;
    }

    const editingTodo = todos.find((value) => value.id === editingId);

    return `
        <form class="${SELECTOR.EDIT_FORM_CLASSNAME}">
          <input value="${editingTodo.content}">
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
    store.dispatch({
      type: EDIT_TODO,
      payload: {
        content: event.target[0].value,
        id: store.getState().editingId,
      },
    });
    store.dispatch({
      type: SET_EDITING_NULL,
    });
  }
}
