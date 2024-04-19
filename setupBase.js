const users = require("./api/services/users");

const setupBase = async () => {
  const user = {
    name: "John Doe",
    email: "test@gmail.com",
    password: "123456",
    role: "users",
  };
  if(await users.getUserByEmail(user.email) === undefined) {
    await users.createUser(user);
  }
};

module.exports = { setupBase };
