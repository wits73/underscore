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

const slice = Array.prototype.slice;

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
    console.log(list);
  }
  _each(list, function(val) {
    memo = iter(memo, val);
  });
  return memo;
}

function _pipe() {
  const fns = arguments;
  return function(arg) {
    return _reduce(
      fns,
      function(arg, fn) {
        return fn(arg);
      },
      arg
    );
  };
}

const f1 = _pipe(
  function(a) {
    return a + 1;
  },
  function(a) {
    return a + 2;
  },
  function(a) {
    return a * a;
  }
);

console.log(f1(1));

function _go(arg) {
  //console.log(arg);
  const fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}

_go(
  3,
  function(a) {
    return a + 1;
  },
  function(a) {
    return a + 2;
  },
  function(a) {
    return a * a;
  },
  console.log
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

const _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

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

console.log(
  _map(
    _filter(users, function(item) {
      return item.age >= 30;
    }),
    _get("name")
  )
);

console.log(
  _map(
    _filter(users, function(item) {
      return item.age < 30;
    }),
    _get("age")
  )
);

const _map_curryr = _curryr(_map);
const _filter_curryr = _curryr(_filter);

_go(
  users,
  function(users) {
    return _filter(users, function(user) {
      return user.age >= 30;
    });
  },
  function(users) {
    return _map(users, _get("name"));
  },
  console.log
);

_go(
  users,
  _filter_curryr(function(user) {
    return user.age >= 30;
  }),
  _map_curryr(_get("name")),
  console.log
);

_go(
  users,
  function(users) {
    return _filter(users, function(user) {
      return user.age < 30;
    });
  },
  function(users) {
    return _map(users, _get("age"));
  },
  console.log
);

_go(
  [1, 2, 3, 4],
  _filter_curryr(function(v) {
    return v % 2;
  }),
  _map_curryr(function(v) {
    return v * v;
  }),
  console.log
);
