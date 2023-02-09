export default class Component {
  $root;
  children;
  state;
  html;
  constructor($root, children) {
    this.$root = $root;
    this.children = children;
    this.init();
    this.render();
  }
  init() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
  setHtml(html) {
    this.html = html;
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
    this.$root.innerHTML = this.html;
  }
}
