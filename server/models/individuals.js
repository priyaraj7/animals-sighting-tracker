const db = require("../db/db-connection");

const getIndividual = async () => {
  const { rows: individual } = await db.query("SELECT * FROM individuals");
  return individual;
};

const getIndividualsOfSpecies = async (speciesId) => {
  const { rows: individual } = await db.query(
    "SELECT * FROM individuals where species_id=$1",
    [speciesId]
  );
  return individual;
};

// const addNewIndividual = async (newIndividual) => {
//   const result = await db.query(
//     "INSERT INTO individuals(nick_name, seen_on, species_id) VALUES($1, $2, $3) RETURNING *",
//     [newIndividual.nickName, newIndividual.seenOn, newIndividual.speciesId]
//   );
//   return result;
// };

// const updateIndividual = async (id, updateIndividual) => {
//   const result = await db.query(
//     `UPDATE individuals SET nick_name=$1, seen_on=$2, species_id= $3 WHERE id= $4 RETURNING *`,
//     [
//       updateIndividual.nickName,
//       updateIndividual.seenOn,
//       updateIndividual.speciesId,
//       id,
//     ]
//   );
//   return result;
// };

// const deleteIndividual = async (id) => {
//   const result = await db.query(`DELETE FROM individuals WHERE id = $1`, [id]);
//   return result;
// };

module.exports = {
  getIndividual,
  // addNewIndividual,
  // updateIndividual,
  // deleteIndividual,
  getIndividualsOfSpecies,
};
