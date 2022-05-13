const { init } = require("../../db/db-connection");
let counter = 0;
async function setUpDB() {
  /* 
    1. create a new data base for each test runner
    2. expose the data base name 
    */
  const databaseName = `animal_sighting_tracker_${counter++}`;
  const dbClient = init({
    host: "localhost",
    port: 5432,
  });
  await dbClient.query(`DROP DATABASE IF EXISTS ${databaseName}`);
  console.log("deleted DB");
  await dbClient.query(`CREATE DATABASE ${databaseName}`);

  process.env.DB_URI = `postgres://localhost:5432/${databaseName}`;
  process.env.DB_NAME = databaseName;
  console.log(process.env.DB_URI);

  return new init({
    host: "localhost",
    port: 5432,
    database: databaseName,
  });
}

async function tearDownDB(dbClient) {
  await dbClient.end();
  const newClient = init({
    host: "localhost",
    port: 5432,
  });
  await newClient.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
}

module.exports = { setUpDB, tearDownDB };
