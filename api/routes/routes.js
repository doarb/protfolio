const express = require("express");
const router = express.Router();

//Déclaration de toutes les routes
const usersRoutes = require("./users");
const projectsRoutes = require("./projects");
const analysisRoutes = require("./analysis");
const authRoutes = require("./auth");


router.use("/users", usersRoutes);
router.use("/projects", projectsRoutes);
router.use("/auth", authRoutes);
router.use("/analysis", analysisRoutes);

module.exports = router;
