import Component from "./core/Component.js";
import Title from "./components/Title.js";
import AddForm from "./components/AddForm.js";
import TodoList from "./components/TodoList.js";
import { CONTAINER } from "./constants/_index.js";
import { store } from "./store.js";
class App extends Component {
  html() {
    console.log(store.getState().todos, store.getState().editing);
    return `
      <header id="${CONTAINER.TITLE}">${Title()}</header>
      <div id="${CONTAINER.ADD_FORM}"></div>
      <ul id="${CONTAINER.TODO_LIST}"></ul>
    `;
  }
  mounted() {
    new AddForm($app.querySelector(`#${CONTAINER.ADD_FORM}`));
    new TodoList($app.querySelector(`#${CONTAINER.TODO_LIST}`));
  }
}

const $app = document.querySelector("#App");
new App($app);
