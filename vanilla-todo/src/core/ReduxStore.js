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
    const fronzenState = new Proxy(
      { ...state },
      {
        get(obj, prop) {
          return obj[prop];
        },
        set() {
          return false;
        },
      }
    );
    return fronzenState;
  };

  return { dispatch, getState };
};

export { createStore };
