import Component from "../core/Component.js";

export default class ItemAppender extends Component {
    template() {
        return `
        <div class="input-container">
            <input type="text" placeholder="새로운 할 일을 입력해주세요" id="todoInput" class="appender"/>
            <button class="btn append-btn" onclick="addTodo()">추가</button>
        </div>
        `;
    }

    setEvent() {
        const { addItem } = this.$props;
        this.addEvent("keyup", ".appender", ({ key, target }) => {
            if (key !== "Enter") return;
            addItem(target.value);
        });
    }
}
