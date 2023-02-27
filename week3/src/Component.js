export default class Component {
    $component;
    $props;
    state;

    constructor($component, $props) {
        this.$component = $component;
        this.$props = $props;
        this.init();
        this.render();
    }

    template() {
        return "<div></div>";
    }

    mount() {
        /* 하위 컴포넌트 마운트 */
    }

    render() {
        this.$component.innerHTML = this.template();
        this.mount();
        this.setEvents();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    init() {
        //state 초기화
        this.state = {};
    }

    setEvents() {}
}
