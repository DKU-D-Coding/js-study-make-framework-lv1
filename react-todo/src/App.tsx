import { ChangeEvent, FormEvent, useState } from "react";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTodo(value);
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();

    const newTodos = [...todos, { id: todos.length, content: todo }];
    setTodos(newTodos);
    setTodo("");
  };

  return (
    <div>
      <h1>To do List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          onChange={handleChangeTodo}
          value={todo}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
