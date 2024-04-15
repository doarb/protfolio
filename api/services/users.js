const User = require("../../models/users");

const getAllUser = async () => {
  return User.find();
};

const getUser = async (id) => {
  return User.findOne({ id: id })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("User not found"));
      }
      return user;
    })
    .catch((error) => {
      return Promise.reject(new Error("Error getting user" + error.message));
    });
};

const createUser = async (user) => {
  if (!user.name || !user.email || !user.password || !user.role) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
  try {
    let users = await User.find();
    let max = 0;
    users.forEach((element) => {
      if (element.id > max) {
        max = element.id;
      }
    });
    user.id = max + 1;
    return User.create(user);
  } catch (error) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
};

const putUser = async (user) => {
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

module.exports = {
  getAllUser,
  getUser,
  deleteUser,
  createUser,
  putUser,
};
