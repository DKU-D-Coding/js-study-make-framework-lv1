import { todoList } from "./renderers.js";
import {
    addItem,
    deleteItem,
    editItem,
    toggleComplete,
} from "./service-logic.js";

/**
 * Handles the submit event of the form
 * @param {SubmitEvent} event
 */
export const handleSubmit = (event) => {
    event.preventDefault();

    const input = document.querySelector("input");
    const todo = input.value;
    input.value = "";

    addItem(todo, todoList);
};

/**
 * Handles the click event of the delete button
 * @param {string} index
 */
export const deleteButtonClick = (index) => {
    deleteItem(index);
};

/**
 * Handles the click event of the checkbox
 * @param {string} index
 */
export const checkboxClick = (index) => {
    toggleComplete(index);
};

/**
 * Handles the click event of the edit button
 * @param {string} index
 */
export const editButtonClick = (index) => {
    const newTitle = prompt("수정할 내용을 입력하세요");
    editItem(index, newTitle);
};
