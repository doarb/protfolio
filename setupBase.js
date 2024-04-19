const users = require("./api/services/users");

const setupBase = async () => {
  const user = {
    name: "John Doe",
    email: process.env.USER_ADMIN,
    password: process.env.PASSWORD_ADMIN,
    role: "admin",
  };
  if(await users.getUserByEmail(user.email) === undefined) {
    await users.createUser(user);
  }
};

module.exports = { setupBase };
