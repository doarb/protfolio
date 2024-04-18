const mongoose = require("mongoose");

let PresentationSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  Nom: { type: String, required: true },
  Prenom : { type: String, required: true },
  email : { type: String, required: true },
  Naissance: { type: String, required: true },
  listCompetences: { type: Array, required: true },
  description: { type: String, required: true }
});

PresentationSchema.virtual("element").get(function () {
  return {
    id: this.id,
    Nom: this.Nom,
    Prenom: this.Prenom,
    email: this.email,
    Naissance: this.Naissance,
    listCompetences: this.listCompetences,
    description: this.description
  };
});

module.exports = mongoose.model("presentations", PresentationSchema);
