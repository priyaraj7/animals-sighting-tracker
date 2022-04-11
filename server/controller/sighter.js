const db = require("../db/db-connection");
const model = require("../models/sighter");

//  Get all sighting
const getAllSighter = async (req, res) => {
  try {
    const result = await model.getSighter();
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

//create the POST request
const addNewSighter = async (req, res) => {
  const add = {
    email: req.body.email,
  };
  console.log([add.email]);
  const result = await model.addNewSighter(add);
  console.log(result.rows[0]);
  res.json(result.rows[0]);
};

// Put request - Update to an specific individual
const updateSighter = async (req, res) => {
  const id = req.params.id;
  const update = {
    email: req.body.email,
  };
  console.log("These are the request params that the server is receiving", id);

  try {
    const result = await model.updateSighter(id, update);

    console.log(result.rows[0]);
    res.send(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

const deleteSighter = async (req, res) => {
  const id = req.params.id;

  console.log("Delete request is receiving", id);

  try {
    await model.deleteSighter(id);

    res.status(200).send(`sighter deleted with ID: ${id}`);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

module.exports = {
  getAllSighter,
  addNewSighter,
  updateSighter,
  deleteSighter,
};
