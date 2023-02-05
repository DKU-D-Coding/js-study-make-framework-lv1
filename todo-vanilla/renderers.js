import {
    handleCheckboxClick,
    handleDeleteButtonClick,
    handleEditButtonClick,
    handleSubmit,
} from "./event-handlers.js";

export const todoList = [];

/**
 * Renders the form
 */
export const renderForm = () => {
    const newTodoSection = document.querySelector("#new-stodo-input-section");
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.innerHTML = `
        <input
            id="new-todo-input"
            type="text"
            placeholder="할 일을 입력하세요"
        />
        <input type="submit" value="추가" />
    `;

    newTodoSection.appendChild(form);
};

/**
 * Renders Ul
 */
export const renderUl = () => {
    const todoUl = document.querySelector("#todo-list");
    todoUl.addEventListener("click", ({ target }) => {
        if (target.tagName === "BUTTON") {
            switch (target.role) {
                case "delete-button":
                    handleDeleteButtonClick(target.id);
                    break;
                case "edit-button":
                    handleEditButtonClick(target.id);
                    break;
            }
        } else if (target.type === "checkbox") {
            handleCheckboxClick(target.id);
        }
    });
};

/**
 * Renders the todo list
 */
export const renderTodoList = () => {
    const todoUl = document.querySelector("#todo-list");

    todoUl.innerHTML = todoList
        .map(
            ({ title, complete }, index) =>
                `<li>
                <span>${title}</span>
                <button role='edit-button' id='${index}'>
                수정
                </button>
                <button role='delete-button' id='${index}'>
                삭제
                </button>
                <input type="checkbox" id='${index}' ${complete && "checked"} />
                </li>`
        )
        .join("");
};
