import { observable, observe } from "./observer.js";

class Component {
  $root;
  #state;
  #props;
  constructor($root, props) {
    this.$root = $root;
    this.#props = props;
    this.#state = observable(this.initState());
    observe(() => {
      this.#render();
      this.#setEvent();
      this.mounted();
    });
  }
  get state() {
    return Object.freeze({ ...this.#state });
  }
  get props() {
    return Object.freeze({ ...this.#props });
  }
  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (!this.#state.hasOwnProperty(key)) continue;
      this.#state[key] = value;
    }
  }
  #render() {
    this.$root.innerHTML = this.html() || "";
  }
  addEvent(eventType, targetSelector, callback) {
    const listener = (event) => {
      if (!event.target.closest(targetSelector)) {
        return;
      }
      callback(event);
    };

    if (this.$root) {
      this.$root.addEventListener(eventType, listener);
    }
  }
  #setEvent() {
    const events = this.event();
    if (!events) {
      return;
    }
    events.forEach((event) => {
      this.addEvent(event.type, event.target, event.handler);
    });
  }
  initState() {
    return {};
  }
  html() {}
  event() {}
  mounted() {}
}

export default Component;
