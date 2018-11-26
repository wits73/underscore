function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(b, a);
        };
  };
}

function _map(list, mapper) {
  let new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

function _filter(list, predi) {
  var new_list = [];
  _each(list, function(val) {
    if (predi(val)) new_list.push(val);
  });
  return new_list;
}

const _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});

const _length = _get("length");
function _each(list, iter) {
  for (let i = 0, len = _length(list); i < len; i++) {
    iter(list[i]);
  }
  return list;
}

_each(null, console.log);
_map(null, function(v) {
  return v;
});
_filter(null, v => {
  return v;
});
const slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _go(arg) {
  //console.log(arg);
  const fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
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

const _map_curryr = _curryr(_map);
const _filter_curryr = _curryr(_filter);

_go(
  null,
  _filter_curryr(v => {
    return v % 2;
  }),
  _map_curryr(v => v * v),
  console.log
);
