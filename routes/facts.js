const express = require("express");

const app = express.Router();

const {
  getAllFacts,
  getOneFact,
  createFact,
  getRandomFact,
} = require("../controllers/facts");

app.route("/").get(getAllFacts).post(createFact);
app.route("/random").get(getRandomFact);
app.route("/:id").get(getOneFact);

module.exports = app;
