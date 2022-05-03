// we will use supertest to test HTTP requests/responses
// const request = require("supertest");
const sqlFixtures = require("sql-fixtures");
// we also need our app for the correct routes!
// const app = require("../server");
const model = require("../../models/species");
const { tearDownDB, setUpDB } = require("../utils/db-utils");
let dbClient;
describe("Species Model", () => {
  beforeAll(async () => {
    dbClient = await setUpDB();
  });

  afterAll(async () => {
    await tearDownDB();
  });

  beforeEach(async () => {
    // process.env.DB_URI =
    //   "postgres://localhost:5432/animal_sighting_tracker_test_data";
    await dbClient.query(
      "drop table if exists species; \
        create table species (\
          id SERIAL PRIMARY KEY,\
          common_name VARCHAR(50),\
          scientific_name VARCHAR(50),\
          population VARCHAR(50),\
          conservation_status VARCHAR(2),\
          created_on TIMESTAMP WITH TIME zone DEFAULT CURRENT_TIMESTAMP\
      );"
    );

    // const dbConfig = {
    //   client: "pg",
    //   connection: {
    //     host: "localhost",
    //     database: "animal_sighting_tracker_test_data",
    //     port: 5432,
    //   },
    // };

    // const dataSpec = {
    //   species: {
    //     common_name: "Leopard, indian",
    //     scientific_name: "Panthera pardus",
    //     population: 500,
    //     conservation_status: "CN",
    //     created_on: "1/21/2022",
    //   },
    // };
    // console.log("Creating fixture");
    // await sqlFixtures.create(dbConfig, dataSpec).then(() => {
    //   console.log("in promise");
    // });
    //console.log("done Creating fixture");
  });

  test("returns all species", async () => {
    await dbClient.query(
      "insert into species\
            (common_name, scientific_name, population, conservation_status, created_on)\
            values ('Leopard, indian', 'Panthera pardus', '500', 'US', '1/21/2022'),\
            ('Vine snake (unidentified)', 'Oxybelis sp.', '985', 'US', '2/15/2022'),\
            ('European badger', 'Meles meles', '489', 'US', '10/27/2021');"
    );
    // const response = await request(app).get("/api/species");
    // expect(response.body.length).toBe(2);
    // expect(response.body[0]).toHaveProperty("id");
    // expect(response.body[0]).toHaveProperty("common_name");
    // expect(response.body[0]).toHaveProperty("scientific_name");
    // expect(response.body[0]).toHaveProperty("population");
    // expect(response.body[0]).toHaveProperty("conservation_status");
    // expect(response.body[0]).toHaveProperty("created_on");
    // expect(response.statusCode).toBe(200);
    const result = await model.getAllSpecies();
    expect(result).toHaveLength(3);
  });
});
