const db = require("../db/db-connection");
const model = require("../models/sightings");

//  Get all sighting
const getAllSighting = async (req, res) => {
  try {
    const result = await model.getSightings();
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

//create the POST request
const addNewSighting = async (req, res) => {
  const newSighting = {
    dateTime: req.body.lastSeen,
    location: req.body.location,
    healthy: req.body.healthy,
    email: req.body.email,
    individualId: req.body.individual_id,
    createdOn: req.body.created_on || new Date().toISOString(),
    sighterId: req.body.sighter_id,
  };
  console.log([newSighting.healthy, newSighting.location]);
  const result = await model.addNewSighting(newSighting);
  console.log(result.rows[0]);
  res.json(result.rows[0]);
};

// Put request - Update to an specific individual
const updateSighting = async (req, res) => {
  const id = req.params.id;
  const update = {
    dateTime: req.body.date_time,
    location: req.body.location,
    healthy: req.body.healthy,
    individualId: req.body.individual_id,
    createdOn: req.body.created_on,
    email: req.body.email,
  };
  console.log("These are the request params that the server is receiving", id);

  try {
    const result = await model.updateSighting(id, update);

    console.log(result.rows[0]);
    res.send(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

const deleteSighting = async (req, res) => {
  const id = req.params.id;

  console.log("Delete request is receiving", id);

  try {
    await model.deleteSighting(id);

    res.status(200).send(`sighting deleted with ID: ${id}`);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

const getSightingDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await model.getSightingDetails(id);
    console.log(result);
    if (result) return res.status(200).send(JSON.stringify(result));
  } catch (error) {
    res.status(404).send("Sighting not found");
  }
};

module.exports = {
  getAllSighting,
  // getSighting,
  addNewSighting,
  updateSighting,
  deleteSighting,
  getSightingDetails,
};
