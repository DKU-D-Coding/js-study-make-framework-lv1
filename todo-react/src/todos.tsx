import { atom } from "recoil";
import { Todo } from "todo";

export const todoAtom = atom<Todo[]>({
  key: "todoAtom",
  default: [],
});
