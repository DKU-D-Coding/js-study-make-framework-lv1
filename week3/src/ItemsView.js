import Component from "./Component.js";

export default class ItemsView extends Component {
    template() {
        const { todoItems } = this.$props;

        return `
        <ul>
            ${todoItems
                .map(
                    ({ done, name, updateState }, index) => `
                <li data-id="${index}">
                    <input type="checkbox" ${
                        done ? "checked" : ""
                    } id="toggle-btn" ${updateState ? "class='updated'" : ""}/>
                    <input type="text" ${
                        done ? "class='todo checked'" : "class='todo'"
                    } id="title-${index}" value="${name}" ${
                        updateState ? "" : "readOnly"
                    } />
                    <button class="btn" id="update-btn">${
                        updateState ? "완료" : "수정"
                    }</button>
                    <button class="btn deleteBtn" id="delete-btn">삭제</button>
                </li>`
                )
                .join("")}
        </ul>

        `;
    }
}
