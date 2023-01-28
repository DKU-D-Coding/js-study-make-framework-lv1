import { useState } from "react";
import styled from "styled-components";
import { Todo } from "todo";
import Card from "../components/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AppHeader = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const TodosContainer = styled.ul`
  min-width: 300px;
`;

const AddTodoForm = styled.form`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  display: flex;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
`;

const AddTodoInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  border: none;
  outline: none;
  background: transparent;
  ::placeholder {
    color: #2c3e506d;
  }
`;

const Home = () => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoMethods = {
    handleDeleteTodo: (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },

    handleEditTodo: (id: number, newTitle: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        )
      );
    },
    handleCompleteTodo: (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
      createdAt: new Date(),
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };

  return (
    <Wrapper>
      <AppHeader>
        <h1>Todo App</h1>
      </AppHeader>
      <TodosContainer>
        {todos.map((todo) => (
          <Card key={todo.id} {...todo} {...todoMethods} />
        ))}
      </TodosContainer>
      <AddTodoForm onSubmit={handleSubmit}>
        <AddTodoInput
          placeholder="add new todo..."
          value={newTodoTitle}
          onChange={({ currentTarget: { value } }) => setNewTodoTitle(value)}
        />
      </AddTodoForm>
    </Wrapper>
  );
};

export default Home;
