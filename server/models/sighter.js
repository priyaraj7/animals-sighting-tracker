const db = require("../db/db-connection");

const getSighter = async () => {
  const { rows: sighting } = await db.query("SELECT * FROM sighters");
  return sighting;
};

const addNewSighter = async (add) => {
  const result = await db.query(
    "INSERT INTO sighters(email) VALUES($1) RETURNING *",
    [add.email]
  );
  return result;
};

const updateSighter = async (id, update) => {
  const result = await db.query(
    `UPDATE sighters SET email =$1 WHERE id= $2 RETURNING *`,
    [update.email, id]
  );
  return result;
};

const deleteSighter = async (id) => {
  const result = await db.query(`DELETE FROM sighters WHERE id = $1`, [id]);
  return result;
};

module.exports = {
  getSighter,
  addNewSighter,
  updateSighter,
  deleteSighter,
};
