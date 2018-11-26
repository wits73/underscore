//const fs = require("fs");
//const data_html = fs.readFileSync("./a.html", "utf8");

// array_like, arguments, document.querySelectorAll
console.log(
  [1, 2, 3, 4].map(function(val) {
    return val + 10;
  })
);

console.log(
  [1, 2, 3, 4].filter(function(val) {
    return val % 2;
  })
);
//? how to get html file in js
//console.log(document.querySelector("*"));
