import { frozen } from "../util/fronzen.js";
import { observable } from "./observer.js";

const createStore = (reducer) => {
  const state = observable(reducer());

  const dispatch = (action) => {
    const newState = reducer(state, action);
    for (const [key, value] of Object.entries(newState)) {
      if (!state.hasOwnProperty(key)) continue;
      state[key] = value;
    }
  };

  const getState = () => {
    return frozen(state);
  };

  return { dispatch, getState };
};

export { createStore };
