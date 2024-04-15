const express = require("express");
const helmet = require("helmet");
const app = express();
const testRouter = require("./routes/example");
app.use(express.json());
app.use(helmet());

app.use("/api",testRouter);

//recupere le port dans le fichier .env
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});

