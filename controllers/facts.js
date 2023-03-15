const Fact = require("../schemas/Fact");
const mongoose = require("mongoose");

const getAllFacts = async (req, res) => {
  try {
    const facts = await Fact.find();

    if (!facts.length) {
      return res.status(400).json({ error: "No facts found" });
    }

    res.status(200).json(facts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneFact = async (req, res) => {
  try {
    const fact = await Fact.findById(req.params.id);

    if (!fact) {
      return res.status(404).json({ error: "nope, doesn't exist" });
    }

    res.status(200).json(fact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRandomFact = async (req, res) => {
  try {
    const facts = await Fact.find();
    if (!facts.length) {
      return res.status(400).json({ error: "No facts found" });
    }
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.status(200).json(randomFact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFact = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res
      .status(400)
      .json({ error: "An empty field is not much of a fun fact!" });
  }

  const fact = await Fact.create({ text });
  res.status(201).json(fact);
};

module.exports = { getAllFacts, getOneFact, getRandomFact, createFact };
