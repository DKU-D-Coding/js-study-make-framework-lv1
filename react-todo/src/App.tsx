import {
  BaseSyntheticEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const LS_TAG = "toDos";

interface ToDo {
  id: number;
  text: string;
}

function App() {
  const [text, setText] = useState("");
  const [toDos, setTodos] = useState<ToDo[]>([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);

  useEffect(() => {
    const stoargeToDos = localStorage.getItem(LS_TAG);
    setTodos(stoargeToDos ? JSON.parse(stoargeToDos) : []);
  }, []);

  const toDoStorage = {
    getOne(id: number) {
      const find = toDos.find((toDo) => toDo.id === id);
      return find ? find : null;
    },
    replace(toDos: ToDo[]) {
      localStorage.setItem(LS_TAG, JSON.stringify(toDos));
      setTodos(toDos);
    },
  };

  const createToDo = () => {
    if (text !== "") {
      const newToDo: ToDo = { id: Date.now(), text };
      toDoStorage.replace([newToDo, ...toDos]);
      setText("");
    }
  };

  const startEditToDo = (id: number) => {
    const thisToDo = toDoStorage.getOne(id);
    if (thisToDo) {
      setEditing(true);
      setEditingId(id);
      setText(thisToDo.text);
    }
  };

  const finishEditToDo = () => {
    toDos.find((toDo) => toDo.id === editingId)!.text = text;
    toDoStorage.replace(toDos);
    setEditing(false);
    setText("");
  };

  const deleteToDo = (id: number) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    toDoStorage.replace(newToDos);
  };

  const title = useMemo(
    () => (editing ? "Edit to do" : "Add your to do"),
    [editing]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editing ? finishEditToDo() : createToDo();
  };

  const handleText = useCallback((e: BaseSyntheticEvent) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <header>
        <h1>To Do React!</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <h3>{title}</h3>
          <input type="text" value={text} onChange={handleText} />
        </form>
        <ul>
          {toDos.map((toDo) => (
            <li key={toDo.id}>
              <span>{toDo.text}</span>
              <span onClick={() => startEditToDo(toDo.id)}> ✏️</span>
              <span onClick={() => deleteToDo(toDo.id)}> ✅</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
