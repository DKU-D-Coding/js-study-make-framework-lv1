import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { useRecoilState } from "recoil";
import { todoAtom } from "./todos";

function App() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
      createdAt: new Date(),
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };

  return (
    <div>
      <header id="header-container">
        <h1>Todo App</h1>
      </header>
      {todos.map((todo) => (
        <Card key={todo.id} {...todo} />
      ))}
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <input
          id="add-todo"
          type="text"
          placeholder="add new todo..."
          value={newTodoTitle}
          onInput={(e) => setNewTodoTitle(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}

export default App;
