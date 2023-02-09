export default class Component {
  $root;
  state;
  html;
  constructor($root) {
    this.$root = $root;
    this.init();
    this.render();
  }
  init() {}
  render() {
    this.$root.innerHTML = this.html;
  }
}
