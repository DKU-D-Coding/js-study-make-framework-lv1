import Component from "../core/Component.js";

export default class Items extends Component {
    template() {
        const { todoItems } = this.$props;
        return `
        <ul>
            ${todoItems
                .map(
                    ({ seq, contents, done, update }) => `
                    <li data-seq="${seq}">

                        <input type="checkbox" ${
                            done ? "checked" : ""
                        } id="toggle-btn" ${update ? "class='updated'" : ""}/>

                        <input type="text" id="title${seq}" ${
                        done ? "class='todo checked'" : "class='todo'"
                    } value=${contents} ${update ? "" : "readOnly"} />

                        <button class="btn" id='update-btn'>${
                            update ? "완료" : "수정"
                        }</button>

                        <button class="btn deleteBtn" id='delete-btn'>삭제</button>
                    </li>
                `
                )
                .join("")}
        </ul>
    `;
    }

    setEvent() {
        const { updateItem, deleteItem, toggleItem } = this.$props;

        this.addEvent("click", "#update-btn", ({ target }) => {
            updateItem(Number(target.closest("[data-seq]").dataset.seq));
        });

        this.addEvent("click", "#delete-btn", ({ target }) => {
            deleteItem(Number(target.closest("[data-seq]").dataset.seq));
        });

        this.addEvent("click", "#toggle-btn", ({ target }) => {
            toggleItem(Number(target.closest("[data-seq]").dataset.seq));
        });
    }
}
