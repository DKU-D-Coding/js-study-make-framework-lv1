import React, {useState, useRef} from "react";

const Card = (props) => {
    const [editState, setEditState] = useState(false);
    const inputRef = useRef(null);
    
    const toggleHandler = (id) => {
        props.setTodoList(()=> props.todoList.map((todo)=>
            todo.id === id ? {...todo, done: !todo.done} : todo
        ))
    }

    const onRemove = (id) => {
        // console.log(id);
        props.setTodoList(props.todoList.filter((todo) => todo.id !== id))
    };

    const editHandler = (id) => {
        props.setTodoList(()=> props.todoList.map((todo)=>
            todo.id === id ? {...todo, title: inputRef.current.value} : todo
        ))
    }

    const onEdit = () => {
        setEditState(!editState);
    }

    return (
        <div>
            <input type={"checkbox"} value={props.done} onChange={() => toggleHandler(props.id)}/>
            
            {
                editState === false ? (
                    <span>{props.done !== true ? props.title : "완료되었습니다"}</span>
                ) : (
                    <input
                type={"text"}
                ref={inputRef}
                value={props.done !== true ? props.title : "완료되었습니다"}
                onChange={() => editHandler(props.id)}
                />
                )
            }
            
            
            <button onClick={onEdit}>{editState === false ? "수정" : "완료"}</button>
            <button onClick={() => onRemove(props.id)}>삭제</button>
        </div>
    );
};

export default Card;