import HistoryRouter from "./core/router/HistoryRouter.js";
import { Main, Move } from "./pages/_index.js";

export const router = new HistoryRouter();

const $app = document.querySelector("#App");

const renderPath = () => {
  switch (router.path) {
    case "/":
      new Main($app);
      return;
    case "/move":
      new Move($app);
      return;
    default:
      return;
  }
};

renderPath();

window.addEventListener("locationChange", renderPath);
