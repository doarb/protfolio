const usersService = require("../services/users");

const getAllUser = async (req, res) => {
  try {
    let User = await usersService.getAllUser();
    return res.status(200).json({ message: User });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    let User = await usersService.getUser(req.params.id);
    return res.status(200).json({ message: User });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    let Myuser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    let User = await usersService.createUser(Myuser);
    return res.status(200).json({ message: User });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    let Myuser = {
      id: req.params.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    let User = await usersService.putUser(Myuser);
    return res.status(200).json({ message: User });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    let User = await usersService.deleteUser(req.params.id);
    return res.status(200).json({ message: User });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllUser,
  getUser,
  deleteUser,
  createUser,
  putUser,
};
