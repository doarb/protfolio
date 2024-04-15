const express = require("express");
const router = express.Router();
var authControler = require("../controlers/auth");

router.post("/login",authControler.login);

router.get("/refreshToken", authControler.refreshToken);

module.exports = router;
