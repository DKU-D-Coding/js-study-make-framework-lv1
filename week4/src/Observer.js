let currentObserver = null;

export const observe = (fn) => {
    currentObserver = fn;
    fn();
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
