const setState = (state, newState) => {
  for (const [key, value] of Object.entries(newState)) {
    if (!state.hasOwnProperty(key)) continue;
    state[key] = value;
  }
};

export { setState };
