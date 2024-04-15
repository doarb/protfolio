const express = require("express");
const router = express.Router();

//Déclaration de toutes les routes
const usersRoutes = require("./users");
const projectsRoutes = require("./projects");

router.use("/users", usersRoutes);
router.use("/projects", projectsRoutes);

module.exports = router;
