let s = "hello";
let n = 20;
let b = true;
let arr = [1,2,3];
let obj = {a:1};
let nl = null;
let u;

console.table({
  string: {value: s, type: typeof s},
  number: {value: n, type: typeof n},
  boolean: {value: b, type: typeof b},
  array: {value: arr, type: Array.isArray(arr)},
  object: {value: obj, type: typeof obj},
  null: {value: nl, type: typeof nl},
  undefined: {value: u, type: typeof u}
});
