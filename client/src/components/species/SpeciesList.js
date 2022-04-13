import "./SpeciesList.css";

// Example of a data array that
// you might receive from an API
const data = [
  {
    CommonName: "Anom",
    ScientificName: "some Latin",
    Species: "Insect",
    conservationStatus: "VA",
  },
  {
    CommonName: "Anom",
    ScientificName: "some Latin",
    Species: "Fish",
    conservationStatus: "VA",
  },
  {
    CommonName: "Anom",
    ScientificName: "some Latin",
    Species: "Mammals",
    conservationStatus: "VA",
  },
];

function SpeciesList() {
  return (
    <div className="SpeciesList">
      <table>
        <tbody>
          <tr>
            <th>C N</th>
            <th> S N</th>
            <th>Species</th>
            <th>conservation Status</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.CommonName}</td>
                <td>{val.ScientificName}</td>
                <td>{val.Species}</td>
                <td>{val.conservationStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SpeciesList;
