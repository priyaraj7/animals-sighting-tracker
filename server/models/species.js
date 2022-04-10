const db = require("../db/db-connection");

const getAllSpecies = async () => {
  const { rows: species } = await db.query("SELECT * FROM species");
  return species;
};

const addNewSpecies = async (newSpecies) => {
  const result = await db.query(
    "INSERT INTO species(common_name, scientific_name, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [
      newSpecies.commonName,
      newSpecies.scientificName,
      newSpecies.population,
      newSpecies.conservationStatus,
      newSpecies.createdOn,
    ]
  );
  return result;
};

const updateSpecies = async (id, updateSpecies) => {
  const result = await db.query(
    `UPDATE species SET common_name=$1, scientific_name=$2, population= $3, conservation_status= $4, created_on= $5 WHERE id= $6 RETURNING *`,
    [
      updateSpecies.commonName,
      updateSpecies.scientificName,
      updateSpecies.population,
      updateSpecies.conservationStatus,
      updateSpecies.createdOn,
      id,
    ]
  );
  return result;
};

const deleteSpecies = async (id) => {
  const result = await db.query(`DELETE FROM species WHERE id = $1`, [id]);
  return result;
};

module.exports = {
  getAllSpecies,
  addNewSpecies,
  updateSpecies,
  deleteSpecies,
};
