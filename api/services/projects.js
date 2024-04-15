const Project = require("../../models/projects");

const getAllProjects = async () => {
  return Project.find();
};

const getProject = async (id) => {
  return Project.findOne({ id: id })
    .then((project) => {
      if (!project) {
        return Promise.reject(new Error("Project not found"));
      }
      return project;
    })
    .catch((error) => {
      return Promise.reject(new Error("Error getting project" + error.message));
    });
};

const createProject = async (project) => {
  if (
    !project.thumbnail ||
    !project.title ||
    !project.descriptionIntro ||
    !project.descriptionMain ||
    !project.listWord ||
    !project.illutrations
  ) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
  try {
    let projects = await Project.find();
    let max = 0;
    projects.forEach((element) => {
      if (element.id > max) {
        max = element.id;
      }
    });
    project.id = max + 1;
    return Project.create(project);
  } catch (error) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
};

const putProject = async (project) => {
  return Project.updateOne({ id: project.id }, project);
};

const deleteProject = async (id) => {
  try {
    await Project.deleteOne({ id: id });
    return "Project deleted successfully";
  } catch (error) {
    return Promise.reject(new Error("Error deleting project"));
  }
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  putProject,
  deleteProject,
};
