const axios = require("axios");
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (value) => value,
  createUser: () => {
    firstName: "J";
    lastName: "S";
  },
  fetchUser: async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error");
  },
};

module.exports = functions;
