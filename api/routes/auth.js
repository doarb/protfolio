const express = require("express");
const router = express.Router();
var authControler = require("../controlers/auth");
const authWithToken = require("../../middlewares/authwithtoken");


router.post("/login",authControler.login);

router.get("/refreshToken", authControler.refreshToken);

router.get("/logCheck", authWithToken.authenticateTokenCheck);


module.exports = router;
