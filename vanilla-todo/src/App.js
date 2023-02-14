import Component from "./Component.js";

import Title from "./components/Title.js";
import AddForm from "./components/AddForm.js";
import TodoList from "./components/TodoList.js";

class App extends Component {
  initState() {
    return {
      todos: [],
      editing: null,
    };
  }
  html() {
    return `
      <header id="Title"></header>
      <div id="AddForm"></div>
      <ul id="TodoList"></ul>
        `;
  }
  declare() {
    new Title($app.querySelector("#Title"));
    new AddForm($app.querySelector("#AddForm"), {
      addTodo: (content) => {
        const newTodo = {
          content,
          id: Date.now(),
          done: false,
        };
        this.setState({ todos: [...this.state.todos, newTodo] });
      },
    });
    new TodoList($app.querySelector("#TodoList"), {
      state: this.state,
      setState: this.setState,
    });
  }
}

const $app = document.querySelector("#App");
new App($app);
