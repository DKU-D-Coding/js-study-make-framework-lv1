const MILLISEC = 1000;
const FRAMES = 60;
const MILLI_PER_FRAME = MILLISEC / FRAMES;

let currentObserver = null;

const observe = (observer) => {
  currentObserver = observer;
  observer();
  currentObserver = null;
};

const batch = (callback, limit = MILLI_PER_FRAME) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, limit);
  };
};

const observable = (props) => {
  let observers = new Set();
  const state = new Proxy(
    { ...props },
    {
      get(target, prop) {
        if (typeof currentObserver === "function") {
          observers.add(batch(currentObserver));
        }
        return target[prop];
      },
      set(obj, prop, value) {
        obj[prop] = value;
        observers.forEach((observer) => observer());
        return true;
      },
    }
  );

  return state;
};

export { observable, observe };
