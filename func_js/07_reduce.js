function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

function _curry(fn) {
  return function(a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function(b) {
          return fn(a, b);
        };
  };
}

const slice = Array.prototype.slice;
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

const add = _curry(function(a, b) {
  return a + b;
});

console.log(_reduce([1, 2, 3, 4], add, 0));
console.log(_reduce([1, 2, 3, 4], add));

/*
function _reduce(list, iter, momo){
}

console.log(
    _reduce([1,2,3], add, 0)
)

memo = add(0,1);
memo = add(memo,2);
memo = add(momo,3);
return memo;
*/
