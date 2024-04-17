const analysisService = require("../services/analysis");

const getAnalysis = async (req, res) => {
  try {
    let Analysis = await analysisService.getAnalysis(req.params.id);
    return res.status(200).json({ message: Analysis });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getSearchedAnalysis = async (req, res) => {
  try {
    let Analysis = await analysisService.getSearchedAnalysis(
      req.query.type,
      req.query.dateDeDebut,
      req.query.dateDeFin
    );
    return res.status(200).json({ message: Analysis });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createAnalysis = async (req, res) => {
  try {
    if (!req.body.type || !req.body.description || !req.body.date) {
      return res.status(400).json({ message: "type and description required" });
    }
    let Myanalysis = {
      type: req.body.type,
      description: req.body.description,
      date: req.body.date,
    };
    console.log(Myanalysis);
    let Analysis = await analysisService.createAnalysis(Myanalysis);
    return res.status(200).json({ message: Analysis });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAnalysis,
  getSearchedAnalysis,
  createAnalysis,
};
