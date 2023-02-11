export default class Component {
  $root;
  #state;
  constructor($root) {
    this.$root = $root;
    this.setState(this.initState());
    this.render();
    this.setEvent();
  }
  initState() {
    return {};
  }
  get state() {
    return this.#state;
  }
  setState(newState) {
    this.#state = { ...this.#state, ...newState };
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
}
