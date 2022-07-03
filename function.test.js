const functions = require("./function");
//toBe
test("Add two number", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("Add 1 + 1 to NOT equal 3", () => {
  expect(functions.add(2, 2)).not.toBe(3);
});
//toBeNull
test("Should be NULL", () => {
  expect(functions.isNull()).toBeNull();
});
//toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});
//toEqual
test("User Should be JS Object", () => {
  expect(functions.createUser()).toEqual();
});
//Less than and greater then

test("Should be under 1000", () => {
  const load1 = 100;
  const load2 = 900;
  expect(load1 + load2).toBeLessThanOrEqual(1000);
});

//Regex
test("There is no $ in i write code", () => {
  expect("i write code").not.toMatch(/[$]/);
});

//Arrays
test("Admin Should be in username", () => {
  const username = ["user", "guest", "admin"];
  expect(username).toContain("admin");
});
