const reverseString = require("./reversestring");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverse with UpperCase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
