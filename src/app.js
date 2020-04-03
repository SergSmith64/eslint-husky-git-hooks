/* eslint-disable arrow-parens */
/* eslint-disable quotes */
const a = 1;

let x = 200;

x++;

function foo(name) {
  const lastName = name;
  const n = x - a;
  return lastName + n;
}

foo("John");

// ___window___ - "browser": true
// eslint-disable-next-line no-console
console.log(x, a);
// console.log(window)

const arrow = y => {
  return y + 1;
};
arrow(2);

const obj = {
  name: "Bob"
};
obj.name = "Ken";
