import Component from "../Component.js";

export default class AddForm extends Component {
  init() {
    this.setHtml(`
        <form id="addForm">
            <input placeholder="Enter Todo..." />
            <button type="submit">Submit</button>
        </form>`);
  }
}
