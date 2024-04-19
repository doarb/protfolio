const express = require("express");
const router = express.Router();
const analysisControlers = require("../controlers/analysis");
const authWithToken = require("../../middlewares/authwithtoken");

router.post("/search", authWithToken.authenticateToken, analysisControlers.getSearchedAnalysis);

router.get("/:id", authWithToken.authenticateToken, analysisControlers.getAnalysis);

router.post("/", analysisControlers.createAnalysis);

module.exports = router;