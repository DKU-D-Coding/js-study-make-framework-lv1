import { observable, observe } from "./observer.js";

export default class Component {
  $root;
  #state;
  #props;
  constructor($root, props) {
    this.$root = $root;
    this.#props = props;
    this.#state = observable(this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.declare();
    });
  }
  initState() {
    return {};
  }
  get state() {
    return this.#state;
  }
  get props() {
    return this.#props;
  }
  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (this.#state[key] === undefined) continue;
      this.#state[key] = value;
    }
  }
  html() {
    return `<div></div>`;
  }
  render() {
    this.$root.innerHTML = this.html();
  }
  setEvent() {}
  addEvent(eventType, targetSelector, callback) {
    document.body.addEventListener(eventType, (event) => {
      if (!event.target.closest(targetSelector)) {
        return;
      }
      callback(event);
    });
  }
  declare() {}
}
