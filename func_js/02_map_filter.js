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

// take users over age 30
let temp_user = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age > 30) temp_user.push(users[i]);
}
console.log(temp_user);
// take user's name over age 30
let name = [];
for (let i = 0; i < temp_user.length; i++) {
  name.push(temp_user[i].name);
}
console.log(name);

// take users under age 30
let temp_user_under30 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) temp_user_under30.push(users[i]);
}
console.log(temp_user_under30);
// take user's name under age 30
let name_under30 = [];
for (let i = 0; i < temp_user_under30.length; i++) {
  name_under30.push(temp_user_under30[i].name);
}
console.log(name_under30);

// 2. refactoring _filter, _map
console.log("--------------------------filter");
function _filter(list, predict) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predict(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

console.log(
  _filter(users, function(item) {
    return item.age >= 30;
  })
);
console.log(
  _filter(users, function(item) {
    return item.age < 30;
  })
);
console.log(
  _filter([1, 2, 3, 4], function(item) {
    return item % 2;
  })
);
console.log(
  _filter([1, 2, 3, 4], function(item) {
    return !(item % 2);
  })
);

console.log("--------------------------map");
function _map(list, mapper) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

var over_30 = _filter(users, function(item) {
  return item.age >= 30;
});

console.log(
  _map(over_30, function(item) {
    return item.name;
  })
);

console.log(
  _map(over_30, function(item) {
    return item.age;
  })
);

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
