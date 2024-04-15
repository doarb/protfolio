const mongoose = require("mongoose");

let ProjectSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  thumbnail: { type: Buffer, required: true },
  title: { type: String, required: true },
  descriptionIntro: { type: String, required: true, length: 80},
  descriptionMain: { type: String, required: true, length: 250},
  listWord: { type: Array, required: true, length: 10},
  illutrations: { type: [Buffer], required: true, length: 6},
  link: { type: String},
});

ProjectSchema.virtual("element").get(function () {
  return {
    id: this.id,
    thumbnail: this.thumbnail,
    title: this.title,
    descriptionIntro: this.descriptionIntro,
    descriptionMain: this.descriptionMain,
    listWord: this.listWork,
    illutrations: this.illutrations,
    link: this.link,
  };
});

module.exports = mongoose.model("projects", ProjectSchema);
