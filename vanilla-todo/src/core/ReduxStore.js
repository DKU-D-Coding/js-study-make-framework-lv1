import { deepCopy } from "../util/deepCopy.js";
import { setState } from "../util/setState.js";
import { observable } from "./observer.js";

const createStore = (reducer) => {
  const state = observable(reducer());

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(state, newState);
  };

  const getState = () => {
    return deepCopy(state);
  };

  return { dispatch, getState };
};

export { createStore };
