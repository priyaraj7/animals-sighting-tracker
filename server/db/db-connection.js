const { Pool } = require("pg");

let db;
function init(params) {
  if (params) {
    return new Pool({
      host: params.host,
      user: params.user,
      password: params.password,
      port: params.port,
      database: params.database,
    });
  }
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
