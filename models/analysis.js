const mongoose = require("mongoose");

let AnalysisSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  description : { type: String, required: true },
  date: { type: String, required: true },
});

AnalysisSchema.virtual("element").get(function () {
  return {
    id: this.id,
    type: this.type,
    description: this.description,
    date: this.date,
  };
});

module.exports = mongoose.model("analyses", AnalysisSchema);
