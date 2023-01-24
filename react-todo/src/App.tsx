import { FormEvent, useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [toDos, setTodos] = useState([""]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const LS_TAG = "toDos";

  useEffect(() => {
    const stoargeToDos = localStorage.getItem(LS_TAG);
    if (stoargeToDos !== null) {
      setTodos(JSON.parse(stoargeToDos));
    }
  }, []);

  const createToDo = (e: FormEvent) => {
    e.preventDefault();
    if (text !== "") {
      const newToDos = [text, ...toDos];
      saveToDos(newToDos);
      setText("");
    }
  };

  const startEditToDo = (index: number) => {
    setEditIndex(index);
    setEditing(true);
    setText(toDos[index]);
  };

  const finishEditToDo = (e: FormEvent) => {
    e.preventDefault();
    const newToDos = toDos;
    newToDos[editIndex] = text;
    saveToDos(newToDos);
    setEditing(false);
    setText("");
  };

  const deleteToDo = (index: number) => {
    const newToDos = toDos.filter((toDo) => toDo !== toDos[index]);
    saveToDos(newToDos);
  };

  const saveToDos = (newToDos: string[]) => {
    setTodos(newToDos);
    localStorage.setItem(LS_TAG, JSON.stringify(newToDos));
  };

  return (
    <>
      <header>
        <h1>To Do React!</h1>
      </header>
      <main>
        <form onSubmit={editing ? finishEditToDo : createToDo}>
          {editing ? <h3>Edit to do</h3> : <h3>Add your to do</h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <ul>
          {toDos.map((toDo, index) =>
            toDo === "" ? null : (
              <li key={index}>
                <span>{toDo}</span>
                <span onClick={() => startEditToDo(index)}> ✏️</span>
                <span onClick={() => deleteToDo(index)}> ✅</span>
              </li>
            )
          )}
        </ul>
      </main>
    </>
  );
};

export default App;
