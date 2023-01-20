import { ChangeEvent, FormEvent, useState } from "react";

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editing, setEditing] = useState<Todo | null>(null);

  const changeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTodo(value);
  };

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    const newTodos = [
      ...todos,
      { id: todos.length, content: todo, isDone: false },
    ];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((value) => value.id !== id);
    setTodos(newTodos);
  };

  const startEditing = (todo: Todo) => {
    setEditing(todo);
  };

  const changeEditing = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (!editing) {
      return;
    }

    setEditing({ ...editing, content: value });
  };

  const completeEditing = (e: FormEvent) => {
    e.preventDefault();

    if (!editing) {
      return;
    }
    const newTodos = [
      ...todos.filter((value) => value.id !== editing.id),
      editing,
    ];

    setTodos(newTodos);
    setEditing(null);
  };

  const toggleIsDone = (e: ChangeEvent<HTMLInputElement>, todo: Todo) => {
    const {
      target: { checked },
    } = e;

    const newTodos = [
      ...todos.filter((value) => value.id !== todo.id),
      { ...todo, isDone: checked },
    ];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          onChange={changeTodo}
          value={todo}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos
          .sort((a, b) => a.id - b.id)
          .map((value) => (
            <li key={value.id}>
              {editing && editing.id === value.id ? (
                <form onSubmit={completeEditing}>
                  <input
                    type="text"
                    placeholder="할 일을 수정하세요."
                    onChange={changeEditing}
                    value={editing.content}
                  />
                  <button type="submit">완료</button>
                </form>
              ) : (
                <>
                  <label>
                    <input
                      type="checkbox"
                      checked={value.isDone}
                      onChange={(e) => toggleIsDone(e, value)}
                    />
                    <span>{value.content}</span>
                  </label>
                  <button type="button" onClick={() => startEditing(value)}>
                    수정
                  </button>
                  <button type="button" onClick={() => deleteTodo(value.id)}>
                    삭제
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
