import Component from "./Component.js";

export default class ItemAppender extends Component {
    template() {
        return `
        <div class="input-container">
            <input type="text" placeholder="새로운 할 일을 입력해주세요" id="append-input" class="append-input"/>
            <button class="btn" id="append-btn">추가</button>
        </div>
        `;
    }
}
