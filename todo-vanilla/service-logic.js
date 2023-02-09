import { renderTodoList } from "./renderers.js";
import { todoList } from "./renderers.js";

/**
 * Adds a new todo item to the list
 * @param {string} title
 * @param {[{
 * title: string,
 * complete: boolean,
 * }]} todos
 *
 */
export const addItem = (title) => {
    const newTodo = {
        title,
        complete: false,
    };

    todoList.push(newTodo);

    renderTodoList();
};

/**
 * Deletes a todo item from the list
 * @param {string} index
 */
export const deleteItem = (index) => {
    const intIndex = parseInt(index);
    todoList.splice(intIndex, 1);

    renderTodoList();
};

/**
 * Toggles the complete status of a todo item
 * @param {string} index
 */
export const toggleComplete = (index) => {
    const intIndex = parseInt(index);
    const todo = todoList[intIndex];

    todo.complete = !todo.complete;

    renderTodoList();
};

/**
 * Edits the title of a todo item
 * @param {string} index
 * @param {string} newTitle
 */
export const editItem = (index, newTitle) => {
    const intIndex = parseInt(index);
    const todo = todoList[intIndex];

    todo.title = newTitle;

    renderTodoList();
};
