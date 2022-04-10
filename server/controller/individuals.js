const db = require("../db/db-connection");

//  Get all individual

const getAllIndividuals = async (req, res) => {
  try {
    const { rows: individuals } = await db.query("SELECT * FROM individuals");
    res.send(individuals);
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
  const result = await db.query(
    "INSERT INTO individuals(nick_name, seen_on, species_id) VALUES($1, $2, $3) RETURNING *",
    [newIndividual.nickName, newIndividual.seenOn, newIndividual.speciesId]
  );
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

  const query = `UPDATE individuals SET nick_name=$1, seen_on=$2, species_id= $3 WHERE id= $4 RETURNING *`;
  console.log(query);
  const values = [
    updateIndividual.nickName,
    updateIndividual.seenOn,
    updateIndividual.speciesId,
    id,
  ];
  try {
    const update = await db.query(query, values);
    console.log(update);
    console.log(update.rows[0]);
    res.send(update.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

const deleteIndividual = async (req, res) => {
  const speciesId = req.params.id;

  console.log("Delete request is receiving", speciesId);

  const query = `DELETE FROM individuals WHERE id = $1`;
  console.log(query);
  const values = [speciesId];
  try {
    const deleteIndividual = await db.query(query, values);

    res.status(200).send(`individuals deleted with ID: ${speciesId}`);
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
};
