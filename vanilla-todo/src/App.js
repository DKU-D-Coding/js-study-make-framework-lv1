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
      <header id="Title">${Title()}</header>
      <div id="AddForm"></div>
      <ul id="TodoList"></ul>
    `;
  }
  declare() {
    const { todos, editing } = this.state;

    new AddForm($app.querySelector("#AddForm"), {
      addTodo: this.addTodo.bind(this),
    });
    new TodoList($app.querySelector("#TodoList"), {
      todos,
      editing,
      deleteTodo: this.deleteTodo.bind(this),
      toggleTodo: this.toggleTodo.bind(this),
      editTodo: this.editTodo.bind(this),
      startEditing: this.startEditing.bind(this),
    });
  }
  findTodo(todoId) {
    const { todos } = this.state;
    const todoIndex = todos.findIndex((value) => value.id === todoId);
    const todo = todos.find((value) => value.id === todoId);
    return { todo, index: todos[todoIndex] };
  }
  addTodo(content) {
    const newTodo = {
      content,
      id: Date.now(),
      done: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  deleteTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter((value) => value.id !== todoId),
    });
  }
  toggleTodo(todoId) {
    const found = this.findTodo(todoId);
    const oldTodo = found.todo;
    const newTodo = {
      ...oldTodo,
      done: !oldTodo.done,
    };

    const todos = [...this.state.todos];
    todos.splice(found.index, 1, newTodo);
    this.setState({ todos: todos });
  }
  editTodo(content) {
    const { todos, editing } = this.state;
    const newTodo = {
      ...editing,
      content,
    };

    const newTodos = [...todos];
    newTodos.splice(this.findTodo(editing.id).index, 1, newTodo);

    this.setState({ editing: null, todos: newTodos });
  }
  startEditing(todoId) {
    const editingTodo = this.findTodo(todoId).todo;
    this.setState({ editing: editingTodo });
  }
}

const $app = document.querySelector("#App");
new App($app);
