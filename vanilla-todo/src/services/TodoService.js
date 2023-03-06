class TodoService {
  #todos = [];

  get todos() {
    return this.#todos.map((todo) => Object.freeze(todo));
  }
  findTodo(todoId) {
    const todoIndex = this.#todos.findIndex((value) => value.id === todoId);
    const todo = this.#todos.find((value) => value.id === todoId);
    return { todo, index: this.#todos[todoIndex] };
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
    const found = this.findTodo(todoId);
    const oldTodo = found.todo;
    const newTodo = {
      ...oldTodo,
      done: !oldTodo.done,
    };

    const newTodos = [...this.#todos];
    newTodos.splice(found.index, 1, newTodo);

    this.#todos = newTodos;
    return this.todos;
  }
  editTodo(todo) {
    const currentEditing = this.findTodo(todo.id);

    const newTodo = {
      ...currentEditing.todo,
      content: todo.content,
    };

    const newTodos = [...this.#todos];
    newTodos.splice(currentEditing.index, 1, newTodo);

    this.#todos = newTodos;
    return this.todos;
  }
}

export default TodoService;
