const express = require("express");
const router = express.Router();
const presentationControlers = require("../controlers/presentation");
const authWithToken = require("../../middlewares/authwithtoken");

router.get("/", presentationControlers.getAllPresentations);

router.get("/:id", presentationControlers.getPresentation);

router.put("/:id", authWithToken.authenticateToken, presentationControlers.putPresentation);

router.delete("/:id", authWithToken.authenticateToken, presentationControlers.deletePresentation);

router.post("/", presentationControlers.createPresentation);

module.exports = router;