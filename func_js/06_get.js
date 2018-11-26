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

function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(b, a);
        };
  };
}

function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}

const user1 = users[0];
console.log(user1.name);
console.log(_get(user1, "name"));

console.log(_get(users[10], "name"));

const cusGet = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});
console.log("----------------------------------------------------");
console.log(cusGet("name")(user1));
const get_name = cusGet("name");
console.log(get_name(user1));

console.log("--------------------------result");
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
    _get("name")
    /*
    function(item) {
      return item.name;
    }
    */
  )
);
