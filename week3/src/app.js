import Component from "./Component.js";

import ItemAppender from "./ItemAppender.js";
import ItemsView from "./ItemsView.js";

class App extends Component {
    init() {
        this.state = {
            todoItems: [
                { name: "코딩하기", done: false, updateState: false },
                { name: "밥먹기", done: true, updateState: false },
                { name: "양치하기", done: false, updateState: false },
            ],
        };
    }

    template() {
        return `
            <h1>3주차 미션 - 투두리스트 </h1>

            <div id="item-appender"></div>
            <div id="items-view"></div>
        `;
    }

    mount() {
        //투두리스트 state를 불러옴
        const { todoItems } = this.state;
        const $itemAppender = this.$component.querySelector("#item-appender");
        const $itemsView = this.$component.querySelector("#items-view");

        // state를 props로 전달
        new ItemAppender($itemAppender);
        new ItemsView($itemsView, { todoItems });
    }

    setEvents() {
        this.appendTodoItem();
        this.deleteTodoItem();
        this.toggleTodoItem();
        this.updateTodoItem();
    }

    appendTodoItem() {
        const { todoItems } = this.state;
        const appendBtn = this.$component.querySelector("#append-btn");

        if (appendBtn) {
            appendBtn.addEventListener("click", () => {
                const newTodo =
                    this.$component.querySelector("#append-input").value;

                this.setState({
                    todoItems: [
                        ...todoItems,
                        { name: newTodo, done: false, updateState: false },
                    ],
                });
            });
        }
    }

    deleteTodoItem() {
        const { todoItems } = this.state;
        const $itemsView = this.$component.querySelector("#items-view");

        $itemsView.addEventListener("click", (event) => {
            if (event.target.id === "delete-btn") {
                const todoIndex = parseInt(
                    event.target.closest("li").getAttribute("data-id")
                );
                console.log(todoIndex);

                const deletedTodoItems = todoItems.filter(
                    (item, index) => index !== todoIndex
                );
                this.setState({ todoItems: deletedTodoItems });
            }
        });
    }

    toggleTodoItem() {
        const { todoItems } = this.state;
        const $itemsView = this.$component.querySelector("#items-view");

        $itemsView.addEventListener("change", (event) => {
            if (event.target.id === "toggle-btn") {
                const todoIndex = parseInt(
                    event.target.closest("li").getAttribute("data-id")
                );
                const toggledTodoItems = [...todoItems];
                toggledTodoItems[todoIndex] = {
                    ...toggledTodoItems[todoIndex],
                    done: !toggledTodoItems[todoIndex].done,
                };
                this.setState({ todoItems: toggledTodoItems });
            }
        });
    }

    updateTodoItem() {
        const { todoItems } = this.state;
        const $itemsView = this.$component.querySelector("#items-view");

        $itemsView.addEventListener("click", (event) => {
            if (event.target.id === "update-btn") {
                const todoIndex = parseInt(
                    event.target.closest("li").getAttribute("data-id")
                );

                const updatedTodoItems = [...todoItems];
                updatedTodoItems[todoIndex].updateState =
                    !updatedTodoItems[todoIndex].updateState;

                if (!updatedTodoItems[todoIndex].updateState) {
                    const $itemsTitle = this.$component.querySelector(
                        `#title-${todoIndex}`
                    );

                    updatedTodoItems[todoIndex].name = $itemsTitle.value;
                }

                this.setState({ todoItems: updatedTodoItems });
            }
        });
    }
}

new App(document.querySelector("#app"));
