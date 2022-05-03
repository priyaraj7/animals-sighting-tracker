const model = require("../../models/individuals");
const { setUpDB, tearDownDB } = require("../utils/db-utils");

jest.setTimeout(30000);
let dbClient;
describe("Individual Model", () => {
  beforeAll(async () => {
    dbClient = await setUpDB();
  });

  afterAll(async () => {
    await tearDownDB();
  });

  beforeEach(async () => {
    await dbClient.query(
      "drop table if exists individuals; \
        create table individuals (\
          id SERIAL PRIMARY KEY,\
          nick_name VARCHAR(50),\
          seen_on TIMESTAMP,\
          species_id INT\
      );"
    );
    console.log("Created table");
  });

  test("returns all individuals", async () => {
    await dbClient.query(
      "insert into individuals\
            (nick_name, seen_on, species_id)\
            values ('Anny', '1/1/2022', 1),\
            ('Gabriell', '10/15/2021', 2),\
            ('Nani', '7/2/2021', 1);"
    );
    const result = await model.getIndividual();
    expect(result).toHaveLength(3);
    expect(result[0].nick_name).toEqual("Anny");
  });
});
