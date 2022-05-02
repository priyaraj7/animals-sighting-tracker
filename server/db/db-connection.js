const { Pool } = require("pg");

let db;
function init() {
  if (!db) {
    console.log("DBURI", process.env.DB_URI);
    db = new Pool({
      connectionString: process.env.DB_URI,
    });
  }
  return db;
}

function reset() {
  db.end();
  db = null;
}

module.exports = { init, reset };
