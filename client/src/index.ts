// This is unused, reports no matter what.
const a = 1;

const foo = {
  bar: 2,
};

// This is a type-aware rule violation (dot-notation), but it won't show up via the LSP:
console.log(foo['bar']);
