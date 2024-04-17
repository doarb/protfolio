const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

const mongoDB = require("./loaders/mongoDB");
const testRouter = require("./api/routes/routes");



app.use("/api",testRouter);

//recupere le port dans le fichier .env
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World!");
});


mongoDB.connectToDatabase().then(() => { 
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});


