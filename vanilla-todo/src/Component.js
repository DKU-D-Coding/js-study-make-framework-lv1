export default class Component {
  $root;
  #children;
  #state;
  #html;
  constructor($root, children) {
    this.$root = $root;
    this.#children = children;
    this.init();
    this.render();
  }
  init() {
    this.setHtml();
  }
  get state() {
    return this.#state;
  }
  setState(newState) {
    this.#state = { ...this.#state, ...newState };
  }
  setHtml(html) {
    if (this.#children) {
      const childNodes = this.#children
        .map((child) => `<div id="${child}"></div>`)
        .join("");

      if (this.#html) {
        this.#html = html + childNodes;
        return;
      }
      this.#html = childNodes;
      return;
    }
    if (html) {
      this.#html = html;
    }
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
  render() {
    if (this.#html) {
      this.$root.innerHTML = this.#html;
    }
  }
}
