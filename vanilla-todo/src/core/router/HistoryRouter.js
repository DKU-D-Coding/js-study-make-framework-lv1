import { frozen } from "../../util/fronzen.js";

const locationChange = new CustomEvent("locationChange");

export default class HistoryRouter {
  #path = "/";
  #queryString = {};
  constructor() {
    window.addEventListener("popstate", (e) => {
      this.#setUrl(e.target.location.pathname);
    });
  }
  get path() {
    return this.#path;
  }
  get queryString() {
    return frozen(this.#queryString);
  }
  #parse(url) {
    const splitUrl = url.split("?");
    const path = splitUrl[0];
    const queryString = {};

    if (splitUrl.length > 1) {
      splitUrl[1].split("&").forEach((query) => {
        const [key, value] = query.split("=");
        if (key && value) {
          queryString[key] = value;
        }
      });
    }

    return { path, queryString };
  }

  #setUrl(url) {
    const { path, queryString } = this.#parse(url);

    this.#path = path;
    this.#queryString = queryString;
    window.dispatchEvent(locationChange);
  }
  push(url) {
    if (typeof url !== "string") {
      throw Error("URL은 string 형식이어야 합니다.");
    }

    this.#setUrl(url);

    if (url === location.pathname) {
      history.replaceState({}, "", url);
    } else {
      history.pushState({}, "", url);
    }
  }
}
