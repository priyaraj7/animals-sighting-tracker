const db = require("../db/db-connection");

const getSightings = async () => {
  const { rows: sighting } = await db.query(`SELECT\ 
    sightings.id, sightings.date_time as last_seen, sightings.healthy, sightings.location, individuals.nick_name as name, species.common_name, species.scientific_name\ 
  FROM\ 
    sightings\
  RIGHT JOIN individuals\
     ON individuals.id = sightings.individual_id\
  LEFT JOIN species\
    ON species.id = individuals.species_id`);
  return sighting;
};

// const getSighting = async (id) => {
//   const { rows: sighting } = await db.query(
//     `SELECT\
//     sightings.date_time as last_seen, sightings.healthy, sightings.location, individuals.nick_name as name, species.common_name, species.scientific_name\
//   FROM\
//     sightings\
//   where id=$1
//   RIGHT JOIN individuals\
//      ON individuals.id = sightings.individual_id\
//   LEFT JOIN species\
//     ON species.id = individuals.species_id`,
//     [id]
//   );
//   return sighting;
// };

const addNewSighting = async (newSighting) => {
  const result = await db.query(
    "INSERT INTO sightings(date_time, location, healthy,individual_id, created_on, email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      newSighting.dateTime,
      newSighting.location,
      newSighting.healthy,
      newSighting.individualId,
      newSighting.createdOn,
      newSighting.email,
    ]
  );
  return result;
};

const updateSighting = async (id, update) => {
  const result = await db.query(
    `UPDATE sightings SET date_time =$1, location=$2, healthy=$3,individual_id=$4, created_on=$5, sighter_id =$6 WHERE id= $7 RETURNING *`,
    [
      update.dateTime,
      update.location,
      update.healthy,
      update.individualId,
      update.createdOn,
      update.sighterId,
      id,
    ]
  );
  return result;
};

const deleteSighting = async (id) => {
  const result = await db.query(`DELETE FROM sightings WHERE id = $1`, [id]);
  return result;
};

const getSightingDetails = async (id) => {
  try {
    const result = await db.query(
      `SELECT\
    sightings.date_time as last_seen, sightings.healthy, sightings.location, sightings.id, individuals.nick_name as name, species.common_name, species.scientific_name, species.population\ 
  FROM\
    sightings\
  RIGHT JOIN individuals\
    ON individuals.id = sightings.individual_id\
  LEFT JOIN species\
    ON species.id = individuals.species_id\
  WHERE sightings.id = $1`,
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getSightings,
  // getSighting,
  addNewSighting,
  updateSighting,
  deleteSighting,
  getSightingDetails,
};
