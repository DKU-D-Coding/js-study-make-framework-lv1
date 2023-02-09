import Component from "../src/Component.js";
import Title from "./components/Title.js";
import AddForm from "./components/AddForm.js";
import TodoList from "./components/TodoList.js";

class App extends Component {}

new App(document.querySelector("#App"), ["Title", "AddForm", "TodoList"]);

new Title(document.querySelector("#Title"));
new AddForm(document.querySelector("#AddForm"));
new TodoList(document.querySelector("#TodoList"));
