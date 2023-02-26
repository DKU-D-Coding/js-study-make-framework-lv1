const todoService = {
  todos: [],
  findTodo(todoId) {
    const { todos } = this;
    const todoIndex = todos.findIndex((value) => value.id === todoId);
    const todo = todos.find((value) => value.id === todoId);
    return { todo, index: todos[todoIndex] };
  },
  addTodo(content) {
    const newTodo = {
      content,
      id: Date.now(),
      done: false,
    };
    this.todos = [...this.todos, newTodo];
  },
  deleteTodo(todoId) {
    this.todos = this.todos.filter((value) => value.id !== todoId);
  },
  toggleTodo(todoId) {
    const found = this.findTodo(todoId);
    const oldTodo = found.todo;
    const newTodo = {
      ...oldTodo,
      done: !oldTodo.done,
    };

    const newTodos = [...this.todos];
    newTodos.splice(found.index, 1, newTodo);

    this.todos = newTodos;
  },
  editTodo(content, id) {
    const { todos, editing } = this;
    const newTodo = {
      ...editing,
      content,
    };

    const newTodos = [...todos];
    newTodos.splice(this.findTodo(id).index, 1, newTodo);

    this.todos = newTodos;
    // this.setState({ editing: null, todos: newTodos });
  },
};
