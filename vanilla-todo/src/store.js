import { createStore } from "./core/ReduxStore.js";
import TodoService from "./services/TodoService.js";

export const todoService = new TodoService();

const initState = {
  todos: todoService.todos,
  editingId: null,
  filter: null,
};

export const SET_TODO = "SET_TODO";
export const SET_EDITING = "SET_EDITING";
export const SET_EDITING_NULL = "SET_EDITING_NULL";
export const SET_FILTER = "SET_FILTER";

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, todos: action.payload };
    case SET_EDITING:
      return { ...state, editingId: action.payload };
    case SET_EDITING_NULL:
      return { ...state, editingId: null };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
});
