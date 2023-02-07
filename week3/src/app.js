import Component from "./core/Component.js";

import Items from "./components/Items.js";
import ItemAppender from "./components/ItemAppender.js";

export default class App extends Component {
    setup() {
        this.$state = {
            items: [],
        };
    }

    template() {
        return `
        <h2>3주차 JavaScript 실습 - 할 일</h2>
        
        <header data-component="item-appender"></header>
        <main data-component="items"></main>
    `;
    }

    // mounted에서 자식 컴포넌트를 마운트 해줘야 한다.
    mounted() {
        const { todoItems, addItem, updateItem, deleteItem, toggleItem } = this;
        const $itemAppender = this.$target.querySelector(
            '[data-component="item-appender"]'
        );
        const $items = this.$target.querySelector('[data-component="items"]');

        new ItemAppender($itemAppender, {
            addItem: addItem.bind(this),
        });

        new Items($items, {
            todoItems,
            updateItem: updateItem.bind(this),
            deleteItem: deleteItem.bind(this),
            toggleItem: toggleItem.bind(this),
        });
    }

    get todoItems() {
        const { items } = this.$state;
        return items;
    }

    addItem(contents) {
        const { items } = this.$state;
        const seq = Math.max(0, ...items.map((v) => v.seq)) + 1;
        const done = false;
        const update = false;
        this.setState({
            items: [...items, { seq, contents, done, update }],
        });
        this.$target.querySelector("#todoInput").value = "";
    }

    updateItem(seq) {
        const items = [...this.$state.items];
        const index = items.findIndex((v) => v.seq === seq);
        items[index].update = !items[index].update;
        items[index].contents = this.$target.querySelector(
            "#title" + (index + 1)
        ).value;
        this.setState({ items });
    }

    deleteItem(seq) {
        const items = [...this.$state.items];
        items.splice(
            items.findIndex((v) => v.seq === seq),
            1
        );
        this.setState({ items });
    }

    toggleItem(seq) {
        const items = [...this.$state.items];
        const index = items.findIndex((v) => v.seq === seq);
        items[index].done = !items[index].done;
        this.setState({ items });
    }
}
