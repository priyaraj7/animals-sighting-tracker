const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("../server/db/db-connection.js");
const allRouter = require("./routes/routes");

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My ExpressJS" });
});

app.use("/", allRouter);

// ----------------------------- Individuals -----------------------------

//  Get all Individuals
app.get("/api/species", cors(), async (req, res) => {
  try {
    const { rows: species } = await db.query("SELECT * FROM species");
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//create the POST request
app.post("/api/species", cors(), async (req, res) => {
  const newSpecies = {
    commonName: req.body.common_name,
    scientificName: req.body.scientific_name,
    population: req.body.population,
    conservationStatus: req.body.conservation_status,
    createdOn: req.body.created_on,
  };
  console.log([newSpecies.commonName, newSpecies.scientificName]);
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
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// Put request - Update to an specific species
app.put("/api/species/:id", cors(), async (req, res) => {
  const speciesId = req.params.id;
  const updateSpecies = {
    commonName: req.body.common_name,
    scientificName: req.body.scientific_name,
    population: req.body.population,
    conservationStatus: req.body.conservation_status,
    createdOn: req.body.created_on,
  };
  console.log(
    "These are the request params that the server is receiving",
    speciesId
  );

  const query = `UPDATE species SET common_name=$1, scientific_name=$2, population= $3, conservation_status= $4, created_on= $5 WHERE id=${speciesId} RETURNING *`;
  console.log(query);
  const values = [
    updateSpecies.commonName,
    updateSpecies.scientificName,
    updateSpecies.population,
    updateSpecies.conservationStatus,
    updateSpecies.createdOn,
  ];
  try {
    const update = await db.query(query, values);
    console.log(update.rows[0]);
    res.send(update.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

app.delete("/api/species/:id", cors(), async (req, res) => {
  const speciesId = req.params.id;

  console.log("Delete request is receiving", speciesId);

  const query = `DELETE FROM species WHERE id = $1`;
  console.log(query);
  const values = [speciesId];
  try {
    const deleteSpecies = await db.query(query, values);

    res.status(200).send(`species deleted with ID: ${speciesId}`);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// ----------------------------- Sightings -----------------------------

// ----------------------------- Sighter -----------------------------

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
