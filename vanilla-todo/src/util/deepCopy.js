export const deepCopy = (value) => {
  let deepCopyValue;
  if (Array.isArray(value)) {
    deepCopyValue = [];
    deepCopyArray(deepCopyValue, value);
  } else if (typeof value === "object" && value !== null) {
    deepCopyValue = {};
    deepCopyObject(deepCopyValue, value);
  } else {
    deepCopyValue = value;
  }
  return deepCopyValue;
};

const deepCopyArray = (deepCopyValue, arr) => {
  arr.forEach((v, i) => {
    if (typeof v === "object" && v !== null) {
      deepCopyValue[i] = deepCopy(v);
    } else {
      deepCopyValue[i] = v;
    }
  });
};

const deepCopyObject = (deepCopyValue, obj) => {
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "object" && v !== null) {
      deepCopyValue[k] = deepCopy(v);
    } else {
      deepCopyValue[k] = v;
    }
  }
};
