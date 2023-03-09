import Component from "../core/Component.js";
import Title from "../components/Title.js";
import AddForm from "../components/AddForm.js";
import TodoList from "../components/TodoList.js";
import { CONTAINER } from "../constants/_index.js";
import { store } from "../store.js";
import { router } from "../route.js";

export default class Main extends Component {
  html() {
    console.log(store.getState());
    return `
    <button id="move">move</button>
      <header id="${CONTAINER.TITLE}">${Title()}</header>
      <div id="${CONTAINER.ADD_FORM}"></div>
      <ul id="${CONTAINER.TODO_LIST}"></ul>
    `;
  }
  mounted() {
    new AddForm(document.querySelector(`#${CONTAINER.ADD_FORM}`));
    new TodoList(document.querySelector(`#${CONTAINER.TODO_LIST}`));
  }
  event() {
    return [
      {
        type: "click",
        target: "#move",
        handler: () => {
          router.push("/move");
        },
      },
    ];
  }
}
