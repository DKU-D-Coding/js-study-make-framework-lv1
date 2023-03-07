class TodoService {
  #todos = [];

  get todos() {
    return this.#todos.map((todo) => Object.freeze(todo));
  }
  findTodo(todoId) {
    const todoIndex = this.#todos.findIndex((value) => value.id === todoId);
    return { todo: this.#todos[todoIndex], index: todoIndex };
  }
  addTodo(content) {
    const newTodo = {
      content,
      id: Date.now(),
      done: false,
    };
    this.#todos = [...this.#todos, newTodo];

    return this.todos;
  }
  deleteTodo(todoId) {
    this.#todos = this.#todos.filter((value) => value.id !== todoId);
    return this.todos;
  }
  toggleTodo(todoId) {
    const { index, todo } = this.findTodo(todoId);
    const newTodos = [...this.#todos];
    newTodos[index] = { ...todo, done: !todo.done };
    this.#todos = newTodos;
    return this.todos;
  }
  editTodo(newTodo) {
    const { id, content } = newTodo;
    const { index, todo: oldTodo } = this.findTodo(id);
    const newTodos = [...this.#todos];
    newTodos[index] = { ...oldTodo, content };
    this.#todos = newTodos;
    return this.todos;
  }
}

export default TodoService;
