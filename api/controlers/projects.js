const projectService = require("../services/projects");

const getAllProjects = async (req, res) => {
  try {
    let projects = await projectService.getAllProjects();
    return res.status(200).json({ projects });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    let project = await projectService.getProject(req.params.id);
    return res.status(200).json({ project });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    console.log(req.body);
    
    let project = {
      thumbnail: req.body.thumbnail,
      title: req.body.title,
      descriptionIntro: req.body.descriptionIntro,
      descriptionMain: req.body.descriptionMain,
      listWord: req.body.listWord,
      illutrations: req.body.illutrations,
    };
    console.log(project);

    let projects = await projectService.createProject(project);
    return res.status(200).json({ projects });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const putProject = async (req, res) => {
  try {
    let project = {
      id: req.params.id,
      thumbnail: req.body.thumbnail,
      title: req.body.title,
      descriptionIntro: req.body.descriptionIntro,
      descriptionMain: req.body.descriptionMain,
      listWord: req.body.listWord,
      illustrations: req.body.illustrations,
    };
    let projects = await projectService.putProject(project);
    return res.status(200).json({ projects });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    let projects = await projectService.deleteProject(req.params.id);
    return res.status(200).json({ projects });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  putProject,
  deleteProject,
};