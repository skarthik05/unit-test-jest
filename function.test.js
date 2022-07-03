const functions = require("./function");

test("Add two number", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("Add 1 + 1 to NOT equal 3", () => {
  expect(functions.add(2, 2)).not.toBe(3);
});
test("To be NULL", () => {
  expect(functions.isNull()).toBeNull();
});
