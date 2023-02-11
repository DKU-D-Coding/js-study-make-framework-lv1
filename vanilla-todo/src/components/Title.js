import Component from "../Component.js";
export default class Title extends Component {
  init() {
    this.setHtml(`
        <h1>To do List</h1>`);
  }
}
