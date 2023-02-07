import Component from "../core/Component.js";

export default class ItemAppender extends Component {
    template() {
        return `
        <div class="input-container">
            <input type="text" placeholder="새로운 할 일을 입력해주세요" id="todoInput" class="appender"/>
            <button class="btn append-btn" id="append-btn">추가</button>
        </div>
        `;
    }

    setEvent() {
        const { addItem } = this.$props;

        this.addEvent("click", "#append-btn", ({ target }) => {
            addItem(this.$target.querySelector("#todoInput").value);
        });

        this.addEvent("click", ".deleteBtn", ({ target }) => {
            const items = [...this.$state.items];
            items.splice(target.dataset.index, 1);
            this.setState({ items });
        });
    }
}
