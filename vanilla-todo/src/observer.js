const MILLISEC = 1000;
const FRAMES = 60;
const MILLI_PER_FRAME = MILLISEC / FRAMES;

const batch = (callback, limit = MILLI_PER_FRAME) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, limit);
  };
};

let observers = [];

const observable = (props) => {
  const state = new Proxy(
    { ...props },
    {
      set(obj, prop, value) {
        obj[prop] = value;
        observers.forEach((observer) => observer());
        return true;
      },
    }
  );

  return state;
};

const observe = (observer) => {
  observers.push(batch(observer));
};

const state = observable({
  a: 1,
  b: 2,
});

observe(() => console.log(state.a, state.b));

const requestAnimationFrame = (callback, delay = MILLI_PER_FRAME) => {
  setTimeout(() => {
    callback();
  }, delay);
};

const main = () => {
  state.a = 2;
  state.b = 3;
  requestAnimationFrame(() => {
    state.a = 10;
  });
};

main();
