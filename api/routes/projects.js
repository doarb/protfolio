const express = require("express");
const router = express.Router();
const projectsControlers = require("../controlers/projects");

router.get("/",projectsControlers.getAllProjects);

router.get("/:id",projectsControlers.getProject);

router.put("/:id",projectsControlers.putProject);

router.delete("/:id",projectsControlers.deleteProject);

router.post("/",projectsControlers.createProject);

module.exports = router;