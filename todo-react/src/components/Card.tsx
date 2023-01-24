import React, { useState } from "react";
import "./Card.css";
import { MdClose, MdDone, MdEdit } from "react-icons/md";
import { useRecoilState } from "recoil";
import { todoAtom } from "../todos";
import { Todo } from "todo";

const Card = ({ title, createdAt, id }: Todo) => {
  const [isDone, setIsDone] = useState(false);
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const toggleTodo = () => {
    setIsDone(!isDone);
  };

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const submitEditTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const handleEditButtonPress = () => {
    if (editMode) {
      submitEditTodo();
    }
    setEditMode(!editMode);
  };

  return (
    <div id="wrapper" className={`card ${isDone ? "done" : "undone"}`}>
      <div>
        <div style={{ zIndex: 99, width: "100%" }}>
          {editMode ? (
            <input type="text" value={newTitle} onChange={editTitle} />
          ) : (
            title
          )}
        </div>
        <div id="created-at">{createdAt.toLocaleDateString()}</div>
      </div>
      <div id="control-container">
        <MdEdit onClick={handleEditButtonPress} />
        <MdDone onClick={toggleTodo} />
        <MdClose onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Card;
