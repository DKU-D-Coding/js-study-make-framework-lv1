import Component from "./Component.js";

import Title from "./components/Title.js";
import AddForm from "./components/AddForm.js";
import TodoList from "./components/TodoList.js";

class App extends Component {
  html() {
    return `
            <header id="Title"></header>
            <div id="AddForm"></div>
            <ul id="TodoList"></ul>
        `;
  }
}

const $app = document.querySelector("#App");
new App($app);

export const title = new Title($app.querySelector("#Title"));
export const addForm = new AddForm($app.querySelector("#AddForm"));
export const todoList = new TodoList($app.querySelector("#TodoList"));
