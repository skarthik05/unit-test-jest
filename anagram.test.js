const isAnagram = require("./anagram");

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("cinema is an  anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("ant is an  anagram of tan", () => {
  expect(isAnagram("ant", "tan")).toBeTruthy();
});
test("ok is NOT an  anagram of okay", () => {
  expect(isAnagram("oki", "okay")).toBeFalsy();
});
