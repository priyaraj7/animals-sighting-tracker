const express = require("express");
const {
  getAllSpecies,
  addNewSpecies,
  updateSpecies,
  deleteSpecies,
} = require("../controller/speciesController");

const {
  getAllIndividuals,
  addNewIndividual,
  updateIndividual,
  deleteIndividual,
} = require("../controller/individuals");

const {
  getAllSighting,
  addNewSighting,
  updateSighting,
  deleteSighting,
} = require("../controller/sightings");

const router = express.Router();

// SPECIES ROUTE
router.get("/api/species", getAllSpecies);
router.post("/api/species", addNewSpecies);
router.put("/api/species/:id", updateSpecies);
router.delete("/api/species/:id", deleteSpecies);

// INDIVIDUAL ROUTE
router.get("/api/individual", getAllIndividuals);
router.post("/api/individual", addNewIndividual);
router.put("/api/individual/:id", updateIndividual);
router.delete("/api/individual/:id", deleteIndividual);

// SIGHTING ROUTE
router.get("/api/sighting", getAllSighting);
router.post("/api/sighting", addNewSighting);
router.put("/api/sighting/:id", updateSighting);
router.delete("/api/sighting/:id", deleteSighting);

module.exports = router;
