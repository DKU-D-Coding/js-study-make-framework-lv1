import React, { useState } from "react";

const AddingInput = (props) => {
    const [newTodo, setNewTodo] = useState({ id: props.listId, title: "", done: false });

    const inputHandler = (e) => {
        setNewTodo({...newTodo, title: e.target.value});
    }

    const addTodo = () => {
        props.setTodoList([...props.todoList, newTodo]);
        
        setNewTodo({id: props.listId + 1, title: "", done: false});

        props.setListId(props.listId + 1);
    }

    return (
        <>
            <input type="text" value={newTodo.title} onChange={inputHandler}/>
            <button onClick={addTodo}>추가</button>
        </>
    );
};

export default AddingInput;