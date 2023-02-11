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

new App(document.querySelector("#App"));

export const title = new Title(document.querySelector("#Title"));
export const addForm = new AddForm(document.querySelector("#AddForm"));
export const todoList = new TodoList(document.querySelector("#TodoList"));
