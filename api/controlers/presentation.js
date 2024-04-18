const presentationService = require("../services/presentation");

const getAllPresentations = async (req, res) => {
  try {
    let presentations = await presentationService.getAllPresentations();
    return res.status(200).json({ presentations });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


const getPresentation = async (req, res) => {
  try {
    let presentation = await presentationService.getPresentation(req.params.id);
    return res.status(200).json({ presentation });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createPresentation = async (req, res) => {
  try {
    let presentation = {
      Nom: req.body.Nom,
      Prenom: req.body.Prenom,
      Naissance: req.body.Naissance,
      listCompetences: req.body.listCompetences,
      description: req.body.description,
    };

    let presentations = await presentationService.createPresentation(presentation);
    return res.status(200).json({ presentations });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const putPresentation = async (req, res) => {
  try {
    let presentation = {
      id: req.params.id,
      Nom: req.body.Nom,
      Prenom: req.body.Prenom,
      Naissance: req.body.Naissance,
      listCompetences: req.body.listCompetences,
      description: req.body.description,
    };
    let presentations = await presentationService.putPresentation(presentation);
    return res.status(200).json({ presentations });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deletePresentation = async (req, res) => {
  try {
    let presentations = await presentationService.deletePresentation(req.params.id);
    return res.status(200).json({ presentations });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllPresentations,
  getPresentation,
  createPresentation,
  putPresentation,
  deletePresentation,
};