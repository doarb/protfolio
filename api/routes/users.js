const express = require("express");
const router = express.Router();
const usersControlers = require("../controlers/users");
const authWithToken = require("../../middlewares/authwithtoken");


router.get("/",usersControlers.getAllUser);

router.get("/:id", authWithToken.authenticateToken,usersControlers.getUser);

router.put("/:id",usersControlers.putUser);

router.delete("/:id",usersControlers.deleteUser);

router.post("/",usersControlers.createUser);

module.exports = router;