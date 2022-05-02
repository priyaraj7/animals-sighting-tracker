const controller = require("../../controller/speciesController");
const model = require("../../models/species");
jest.mock("../../models/species");

describe("Species controller", () => {
  test("getAllSpecies", async () => {
    const data = [
      {
        common_name: "Leopard, indian",
        scientific_name: "Panthera pardus",
        population: "500",
        conservation_status: "US",
        created_on: "2022-01-21T08:00:00.000Z",
      },
      {
        common_name: "Vine snake (unidentified)",
        scientific_name: "Oxybelis sp.",
        population: "985",
        conservation_status: "US",
        created_on: "2022-02-15T08:00:00.000Z",
      },
    ];
    model.getAllSpecies.mockResolvedValue(data);

    await expect(controller.getAllSpecies());
  });
});
