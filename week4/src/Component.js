import { observable, observe } from "./Observer.js";

export default class Component {
    $component;
    $props;
    state;

    constructor($component, $props) {
        this.$component = $component;
        this.$props = $props;
        this.init();
        this.updateState();
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
        // this.state = observable({
        //     todoItems: [
        //         { name: "코딩하기", done: false, updateState: false },
        //         { name: "밥먹기", done: true, updateState: false },
        //         { name: "양치하기", done: false, updateState: false },
        //     ],
        // });
    }

    setEvents() {}

    updateState() {
        observe(() => {
            this.render();
            console.log("렌더링");
        });
    }
}
