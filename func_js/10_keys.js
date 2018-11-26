// Object.keys
console.log(Object.keys({ name: "10", age: 33 }));
console.log(Object.keys([1, 2, 3, 4]));
console.log(Object.keys(10));
// error  console.log(Object.keys(null));
console.log(_keys({ name: "10", age: 33 }));
console.log(_keys([1, 2, 3, 4]));
console.log(_keys(10));
console.log(_keys(null));

function _is_object(obj) {
  //return typeof obj == "object";
  return typeof obj == "object" && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}
