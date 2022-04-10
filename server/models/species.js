const db = require("../db/db-connection");

export const getAllSpecies = async () => {
    const { rows: species } = await db.query("SELECT * FROM species");
    return species;
}

export const addNewSpecies = async (name, commonName, scientificName, population, conservationStatus ) {
    const result = await db.query(
        "INSERT INTO species(common_name, scientific_name, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [
          newSpecies.commonName,
          newSpecies.scientificName,
          newSpecies.population,
          newSpecies.conservationStatus,
          newSpecies.createdOn,
        ]
      )
      return result;
}

