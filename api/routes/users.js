const express = require("express");
const router = express.Router();
const usersControlers = require("../controlers/users");

router.get("/",usersControlers.getAllUser);

router.get("/:id",usersControlers.getUser);

router.put("/:id",usersControlers.putUser);

router.delete("/:id",usersControlers.deleteUser);

router.post("/",usersControlers.createUser);

module.exports = router;