const express = require("express");
const router = express.Router();

//Déclaration de toutes les routes
const usersRoutes = require("./users");

router.use("/users", usersRoutes);

module.exports = router;
