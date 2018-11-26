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

/*
function _curry(fn) {
  return function(a, b) {
    if (arguments.length == 2) return fn(a, b);
    return function(b) {
      return fn(a, b);
    };
  };
}
*/

const temp_add = function(a, b) {
  return a + b;
};
console.log(temp_add(1, 5));

const add = _curry(function(a, b) {
  return a + b;
});
console.log(add(1, 5));

const add10 = add(10);
console.log(add10(5));
console.log(add(5)(3));

console.log("---------------------------------------");

const sub = _curryr(function(a, b) {
  return a - b;
});

console.log(sub(7, 3));
const sub7 = sub(7);
console.log(sub7(3));
