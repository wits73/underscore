// remove for from _filter and _map
const users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 }
];

function _filter(list, predict) {
  let new_list = [];
  _each(list, function(val) {
    if (predict(val)) new_list.push(val);
  });
  return new_list;
}

function _map(list, mapper) {
  let new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

console.log("--------------------------result");
console.log(
  _map(
    _filter(users, function(item) {
      return item.age >= 30;
    }),
    function(item) {
      return item.name;
    }
  )
);

function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(b, a);
        };
  };
}
const cusGet = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});

console.log("--------------------------result");
console.log(
  _map(
    _filter(users, function(item) {
      return item.age >= 30;
    }),
    cusGet("name")
    /*
    function(item) {
      return item.name;
    }
    */
  )
);

/*
function _filter(list, predict) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predict(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

function _map(list, mapper) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

*/
