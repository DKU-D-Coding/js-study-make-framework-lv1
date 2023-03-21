import Component from "../core/Component.js";
import { CONTAINER, TODO_FILTER } from "../constants/_index.js";
import { SET_FILTER, store } from "../store.js";
export default class Filter extends Component {
  html() {
    return `
    <button id="${TODO_FILTER.TODO}">To do</button>
    <button id="${TODO_FILTER.DONE}">Done</button>
    <button id="${TODO_FILTER.ALL}">All</button>
        `;
  }
  event() {
    return [
      {
        type: "click",
        target: `#${CONTAINER.FILTER}`,
        handler: this.handleClickFilter.bind(this),
      },
    ];
  }
  handleClickFilter(event) {
    store.dispatch({
      type: SET_FILTER,
      payload: event.target.id,
    });
  }
}
