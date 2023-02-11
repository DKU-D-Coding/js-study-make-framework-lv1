export default class Component {
  $root;
  #children;
  #state;
  constructor($root, children) {
    this.$root = $root;
    this.#children = children;
    this.init();
    this.render();
    this.setEvent();
  }
  init() {}
  get state() {
    return this.#state;
  }
  setState(newState) {
    this.#state = { ...this.#state, ...newState };
  }
  html() {
    return `<div></div>`;
  }
  template() {
    if (this.#children) {
      const childNodes = this.#children
        .map((child) => `<div id="${child}"></div>`)
        .join("");

      return this.html() + childNodes;
    }
    return this.html();
  }
  render() {
    this.$root.innerHTML = this.template();
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
}
