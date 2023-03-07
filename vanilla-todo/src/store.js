import { createStore } from "./core/ReduxStore.js";
import TodoService from "./services/TodoService.js";

export const todoService = new TodoService();

const initState = {
  todos: todoService.todos,
  editingId: null,
};

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_EDITING = "SET_EDITING";
export const SET_EDITING_NULL = "SET_EDITING_NULL";

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: action.payload };
    case DELETE_TODO:
      return { ...state, todos: action.payload };
    case TOGGLE_TODO:
      return { ...state, todos: action.payload };
    case EDIT_TODO:
      return { ...state, todos: action.payload };
    case SET_EDITING:
      return { ...state, editingId: action.payload };
    case SET_EDITING_NULL:
      return { ...state, editingId: null };
    default:
      return state;
  }
});
