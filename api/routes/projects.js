const express = require("express");
const router = express.Router();
const projectsControlers = require("../controlers/projects");
const authWithToken = require("../../middlewares/authwithtoken");

router.get("/",projectsControlers.getAllProjects);

router.get("/:id",projectsControlers.getProject);

router.put("/:id",authWithToken.authenticateToken,projectsControlers.putProject);

router.delete("/:id",authWithToken.authenticateToken,projectsControlers.deleteProject);

router.post("/",authWithToken.authenticateToken,projectsControlers.createProject);

module.exports = router;