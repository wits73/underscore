let users = [
  { id: 10, name: "ID", age: 36 },
  { id: 20, name: "BJ", age: 32 },
  { id: 30, name: "JM", age: 32 },
  { id: 40, name: "PJ", age: 27 },
  { id: 50, name: "HA", age: 25 },
  { id: 60, name: "JE", age: 26 },
  { id: 70, name: "JI", age: 31 },
  { id: 80, name: "MP", age: 23 },
  { id: 90, name: "FP", age: 13 }
];

function _curry(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(a, b);
        };
  };
}

function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(b, a);
        };
  };
}

// 1. 수집하기 - map, values, pluck 등
function _map(list, mapper) {
  var new_list = [];
  _each(list, function(val, key) {
    new_list.push(mapper(val, key));
  });
  return new_list;
}

function _is_object(obj) {
  return typeof obj === "object" && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

function _each(list, iter) {
  var keys = _keys(list);
  for (var i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]], keys[i]);
  }
  return list;
}

function _identity(val) {
  return val;
}

let _mapCurryr = _curryr(_map);
let _valuesMapCurryr = _mapCurryr(_identity);

console.log(
  _map(users, function(user) {
    return user;
  })
);

// values
function _values(data) {
  return _map(data, _identity);
}

console.log(users[0]);
console.log(_keys(users[0]));
console.log(_values(users[0]));
console.log(_mapCurryr(_identity)(users[0]));
console.log(_valuesMapCurryr(users[0]));
