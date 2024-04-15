const express = require("express");
const router = express.Router();
const usersControlers = require("../controlers/users");
const authWithToken = require("../../middlewares/authwithtoken");


router.get("/",authWithToken.authenticateToken,usersControlers.getAllUser);

router.get("/:id", authWithToken.authenticateToken,usersControlers.getUser);

router.put("/:id",authWithToken.authenticateToken, usersControlers.putUser);

router.delete("/:id", authWithToken.authenticateToken,usersControlers.deleteUser);

router.post("/", authWithToken.authenticateToken,usersControlers.createUser);

module.exports = router;