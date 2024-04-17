const Analysis = require("../../models/analysis");


const getAnalysis = async (id) => {
  return Analysis.findOne({ id: id })
    .then((analysis) => {
      if (!analysis) {
        return Promise.reject(new Error("Analysis not found"));
      }
      return analysis;
    })
    .catch((error) => {
      return Promise.reject(
        new Error("Error getting analysis" + error.message)
      );
    });
};

const getSearchedAnalysis = async (type, dateDeDebut, dateDeFin) => {
  let query = {};
  let dateParts;

  if (type && type != undefined) {
    query.type = type;
  }

  if (dateDeDebut) {
    dateParts = dateDeDebut.split("/");
    dateDeDebut = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  }

  if (dateDeFin) {
    dateParts = dateDeFin.split("/");
    dateDeFin = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  }

  if (dateDeDebut && dateDeFin) {
    dateParts = dateDeDebut.split("/");
    dateDeDebut = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    dateParts = dateDeFin.split("/");
    dateDeFin = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    query.date = { $gte: dateDeDebut, $lte: dateDeFin };
  } else if (dateDeDebut) {
    dateParts = dateDeDebut.split("/");
    dateDeDebut = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    query.date = { $gte: dateDeDebut };
  } else if (dateDeFin) {
    dateParts = dateDeFin.split("/");
    dateDeFin = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    query.date = { $lte: dateDeFin };
  }

  return Analysis.find(query);
};

const createAnalysis = async (analysis) => {
  if (!analysis.type || !analysis.description) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
  try {
    let analysisFind = await Analysis.find();
    let max = 0;
    analysisFind.forEach((element) => {
      if (element.id > max) {
        max = element.id;
      }
    });
    analysis.id = max + 1;
    return Analysis.create(analysis);
  } catch (error) {
    return Promise.reject(new Error("Erreur de paramêtre"));
  }
};

module.exports = {
  getAnalysis,
  getSearchedAnalysis,
  createAnalysis,
};
