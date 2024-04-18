const presentations = require("../../models/presentation");

const getAllPresentations = async () => {
  return presentations.find();
};

const getPresentation = async (id) => {
  return presentations
    .findOne({ id: id })
    .then((presentation) => {
      if (!presentation) {
        return Promise.reject(new Error("Presentation not found"));
      }
      return presentation;
    })
    .catch((error) => {
      return Promise.reject(
        new Error("Error getting presentation" + error.message)
      );
    });
};

const createPresentation = async (presentation) => {
  if (
    !presentation.Nom ||
    !presentation.Prenom ||
    !presentation.Naissance ||
    !presentation.listCompetences ||
    !presentation.description
  ) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
  try {
    let presentations = await presentations.find();
    let max = 0;
    presentations.forEach((element) => {
      if (element.id > max) {
        max = element.id;
      }
    });
    presentation.id = max + 1;
    return presentations.create(presentation);
  } catch (error) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
};

const putPresentation = async (presentation) => {
  return presentations.updateOne({ id: presentation.id }, presentation);
};

const deletePresentation = async (id) => {
  try {
    await presentations.deleteOne({ id: id });
    return "Presentation deleted successfully";
  } catch (error) {
    return Promise.reject(new Error("Error deleting presentation"));
  }
};

module.exports = {
  getAllPresentations,
  getPresentation,
  createPresentation,
  putPresentation,
  deletePresentation,
};
