const mongoose = require("mongoose");

let ProjectSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  thumbnail: { type: Image, required: true },
  title: { type: String, required: true },
  descriptionIntro: { type: String, required: true },
  descriptionMain: { type: String, required: true },
  listWork: { type: Array, required: true },
  illutrations: { type: Array, required: true },
});

ProjectSchema.virtual("element").get(function () {
  return {
    id: this.id,
    thumbnail: this.thumbnail,
    title: this.title,
    descriptionIntro: this.descriptionIntro,
    descriptionMain: this.descriptionMain,
    listWork: this.listWork,
    illutrations: this.illutrations,
  };
});

module.exports = mongoose.model("projects", ProjectSchema);
