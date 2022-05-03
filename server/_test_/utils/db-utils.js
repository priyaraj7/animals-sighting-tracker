const { init } = require("../../db/db-connection");
async function setUpDB() {
  /* 
    1. create a new data base for each test runner
    2. expose the data base name 
    */
  const databaseName = `animal_sighting_tracker_${process.env.JEST_WORKER_ID}`;
  const dbClient = init({
    host: "localhost",
    port: 5432,
  });
  await dbClient.query(`DROP DATABASE IF EXISTS ${databaseName}`);
  console.log("deleted DB");
  await dbClient.query(`CREATE DATABASE ${databaseName}`);

  process.env.DB_URI = `postgres://localhost:5432/${databaseName}`;
  console.log(process.env.DB_URI);

  return new init({
    host: "localhost",
    port: 5432,
    database: databaseName,
  });
}

async function tearDownDB() {
  const databaseName = `animal_sighting_tracker_${process.env.JEST_WORKER_ID}`;
  const dbClient = init({
    host: "localhost",
    port: 5432,
  });
  await dbClient.query(`DROP DATABASE IF EXISTS ${databaseName}`);
}

module.exports = { setUpDB, tearDownDB };
