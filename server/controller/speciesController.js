const db = require("../db/db-connection");
const model = require("../models/species");

//  Get all species
const getAllSpecies = async (req, res) => {
  try {
    const { rows: species } = await db.query("SELECT * FROM species");
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

//create the POST request
// const addNewSpecies = async (req, res) => {
//   const newSpecies = {
//     commonName: req.body.common_name,
//     scientificName: req.body.scientific_name,
//     population: req.body.population,
//     conservationStatus: req.body.conservation_status,
//     createdOn: req.body.created_on,
//   };
//   // console.log([newSpecies.commonName, newSpecies.scientificName]);

//   const result = await model.addNewSpecies(...newSpecies);
//   // console.log(result.rows[0]);
//   res.json(result.rows[0]);
// };

// const deleteSpecies = async (req, res) => {
//   const id = req.params.id;

//   console.log("Delete request is receiving", id);

//   try {
//     const deleteSpecies = await model.deleteSpecies(id);

//     res.status(200).send(`species deleted with ID: ${id}`);
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }
// };

module.exports = {
  getAllSpecies,
  // addNewSpecies,
  // // updateSpecies,
  // deleteSpecies,
};
