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

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((value) => value.id !== id);
    setTodos(newTodos);
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
          <li key={id}>
            {content}
            <button type="button" onClick={() => handleDeleteTodo(id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
