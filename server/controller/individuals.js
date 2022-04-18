const db = require("../db/db-connection");
const model = require("../models/individuals");
//  Get all individual

const getAllIndividuals = async (req, res) => {
  try {
    const result = await model.getIndividual();
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

const getIndividualsOfSpecies = async (req, res) => {
  try {
    const speciesId = req.params.id;
    const result = await model.getIndividualsOfSpecies(speciesId);
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

//create the POST request
const addNewIndividual = async (req, res) => {
  const newIndividual = {
    nickName: req.body.nick_name,
    seenOn: req.body.seen_on,
    speciesId: req.body.species_id,
  };
  console.log([newIndividual.nickName, newIndividual.seenOn]);
  const result = await model.addNewIndividual(newIndividual);
  console.log(result.rows[0]);
  res.json(result.rows[0]);
};

// Put request - Update to an specific individual
const updateIndividual = async (req, res) => {
  const id = req.params.id;
  const updateIndividual = {
    nickName: req.body.nick_name,
    seenOn: req.body.seen_on,
    speciesId: req.body.species_id,
  };
  console.log("These are the request params that the server is receiving", id);

  try {
    const update = await model.updateIndividual(id, updateIndividual);

    console.log(update.rows[0]);
    res.send(update.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

const deleteIndividual = async (req, res) => {
  const id = req.params.id;

  console.log("Delete request is receiving", id);

  try {
    const deleteIndividual = await model.deleteIndividual(id);

    res.status(200).send(`individuals deleted with ID: ${id}`);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

module.exports = {
  getAllIndividuals,
  addNewIndividual,
  updateIndividual,
  deleteIndividual,
  getIndividualsOfSpecies,
};
