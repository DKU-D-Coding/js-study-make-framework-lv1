import React, { useState } from "react";
import "./App.css";
import AddingInput from "./components/AddingInput";
import Card from "./components/Card";

function App() {
    const [listId, setListId] = useState(0);

    const [todoList, setTodoList] = useState([
        // { id: 0, title: "hello1", done: false },
        // { id: 1, title: "hello2", done: false },
        // { id: 2, title: "hello3", done: false },
    ]);

    return (
        <div className="App">
            <h3>1주차 React 실습 - 할 일</h3>
            <AddingInput
                listId={listId}
                setListId={setListId}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            {todoList.map((el) => (
                <Card
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    done={el.done}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            ))}
        </div>
    );
}

export default App;

// - [ ]
//     - [ ]  목록
//     - [ ]  추가
//     - [ ]  수정
//     - [ ]  삭제
//     - [ ]  토글
