const User = require("../../models/users");
const bcrypt = require("bcrypt");

const getAllUser = async () => {
  return User.find()
    .then((users) => {
      return users.map((user) => user.element);
    })
    .catch((error) => {
      return Promise.reject(new Error("Error getting users" + error.message));
    });
};

const getUser = async (id) => {
  return User.findOne({ id: id })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("User not found"));
      }
      return user.element;
    })
    .catch((error) => {
      return Promise.reject(new Error("Error getting user" + error.message));
    });
};

const getUserByEmail = async (email) => {
  return User.findOne({ email: email }).then((user) => {
    if (!user) {
      return undefined;
    }
    return user;
  });
};

const createUser = async (user) => {
  if (!user.name || !user.email || !user.password || !user.role) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }

  const userExist = await User.findOne({ email: user.email });
  if (userExist) {
    return Promise.reject(new Error("User already exists"));
  }
  try {
    const hashedPassword = await hashPassword(user.password);
    if (!hashedPassword) {
      return Promise.reject(new Error("Error hashing password"));
    }
    let users = await User.find();
    let max = 0;
    users.forEach((element) => {
      if (element.id > max) {
        max = element.id;
      }
    });
    user.id = max + 1;
    user.password = hashedPassword;
    return User.create(user);
  } catch (error) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
};

const putUser = async (user) => {
  const hashedPassword = await hashPassword(user.password);
  if (!hashedPassword) {
    return Promise.reject(new Error("Error hashing password"));
  }
  user.password = hashedPassword;
  return User.updateOne({ id: user.id }, user);
};

const deleteUser = async (id) => {
  try {
    await User.deleteOne({ id: id });
    return "Users deleted successfully";
  } catch (error) {
    return Promise.reject(new Error("Error deleting users"));
  }
};

const authenticate = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return Promise.reject(new Error("User not found"));
    }

    // Use bcrypt to compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return Promise.reject(new Error("Email or Password incorrect"));
    }

    return user;
  } catch (error) {
    return { error: "Error while authenticating user" };
  }
};

async function hashPassword(password) {
  const saltRounds = 16;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

module.exports = {
  getAllUser,
  getUser,
  getUserByEmail,
  deleteUser,
  createUser,
  putUser,
  authenticate,
};
