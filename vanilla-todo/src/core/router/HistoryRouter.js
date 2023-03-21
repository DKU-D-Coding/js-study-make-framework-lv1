import { CUSTOM_EVENT } from "../../constants/_index.js";
import { deepCopy } from "../../util/deepCopy.js";

const locationChange = new CustomEvent(CUSTOM_EVENT.LOCATION_CHANGE);

export default class HistoryRouter {
  #url;
  constructor() {
    this.#url = new URL(window.location.href);
    window.addEventListener("popstate", (e) => {
      const {
        target: {
          location: { pathname, search },
        },
      } = e;

      this.#setUrl(pathname + search);
    });
  }
  get path() {
    return this.#url.pathname;
  }
  get queryString() {
    const queryString = {};
    for (const [key, value] of this.#url.searchParams.entries()) {
      queryString[key] = value;
    }
    return deepCopy(queryString);
  }
  #setUrl(url) {
    this.#url.href = this.#url.origin + url;
    window.dispatchEvent(locationChange);
  }
  push(url) {
    if (typeof url !== "string") {
      throw Error("URL은 string 형식이어야 합니다.");
    }

    this.#setUrl(url);

    if (url === location.href) {
      history.replaceState({}, "", url);
    } else {
      history.pushState({}, "", url);
    }
  }
}
