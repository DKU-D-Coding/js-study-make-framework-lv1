import Component from "./Component.js";

import Title from "./components/Title.js";
import AddForm from "./components/AddForm.js";
import TodoList from "./components/TodoList.js";

class App extends Component {}

new App(document.querySelector("#App"), ["Title", "AddForm", "TodoList"]);

export const title = new Title(document.querySelector("#Title"));
export const addForm = new AddForm(document.querySelector("#AddForm"));
export const todoList = new TodoList(document.querySelector("#TodoList"));
