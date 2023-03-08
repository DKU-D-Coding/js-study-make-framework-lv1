function debounce(func) {
    let frameId;
    return function () {
        if (frameId) {
            cancelAnimationFrame(frameId);
        }
        frameId = requestAnimationFrame(func);
    };
}

let currentObserver = null;

export const observe = (func) => {
    currentObserver = debounce(func);
    func();
    currentObserver = null;
};

export const observable = (obj) => {
    const observers = new Map();

    return new Proxy(obj, {
        get(target, key) {
            const value = target[key];

            if (value !== null && typeof value === "object")
                return observable(value);

            if (currentObserver && typeof observers !== "undefined") {
                if (!observers.has(key)) observers.set(key, new Set());

                observers.get(key).add(currentObserver);
            }

            return value;
        },
        set(target, key, value) {
            target[key] = value;

            if (observers.has(key))
                observers.get(key).forEach((observer) => observer());

            return true;
        },
    });
};

// const state = observable({
//     todoItems: [
//         { name: "코딩하기", done: false, updateState: false },
//         { name: "밥먹기", done: true, updateState: false },
//         { name: "양치하기", done: false, updateState: false },
//     ],
// });

// observe(() =>
//     console.log(state.todoItems[0].name + " 로그가 실행이 됐습니다.")
// );

// state.todoItems[0].name = "todo";
// state.todoItems[0].name = "todo1";
// state.todoItems[0].name = "todo2";

// requestAnimationFrame(() => {
//     state.todoItems[0].name = "todo3";
// });
