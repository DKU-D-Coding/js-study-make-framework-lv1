export const frozen = (value) => {
  let frozenValue;
  if (Array.isArray(value)) {
    frozenValue = [];
    frozenArray(frozenValue, value);
  } else if (typeof value === "object" && value !== null) {
    frozenValue = {};
    frozenObject(frozenValue, value);
  } else {
    frozenValue = value;
  }
  return frozenValue;
};

const frozenArray = (frozenValue, arr) => {
  arr.forEach((v, i) => {
    if (typeof v === "object" && v !== null) {
      frozenValue[i] = frozen(v);
    } else {
      frozenValue[i] = v;
    }
  });
};

const frozenObject = (frozenValue, obj) => {
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "object" && v !== null) {
      frozenValue[k] = frozen(v);
    } else {
      frozenValue[k] = v;
    }
  }
};
