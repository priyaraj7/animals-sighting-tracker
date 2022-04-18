import { useState, useEffect } from "react";

import "./DetailPage.css";

function DetailPage() {
  const [individual, setIndividual] = useState([]);

  // Access your API from  React app

  console.log(individual);

  const getAllSighting = async () => {
    const request = await fetch("/api/sighting");
    const result = await request.json();
    console.log(result);
    setIndividual(result);
  };

  useEffect(() => {
    getAllSighting(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  }, []);

  return (
    <div className="detailPage">
      <h1>Common Name: individual.common_name</h1>
      <div className="Flex">
        <p>Scientific Name: xyz</p>
        <p>Conservation Status: Endangered</p>
        <p>Population: 500</p>
        <p>Nick Name:</p>
        <p>Last Seen:</p>
        <p>Location:</p>
        <button className="deleteButton">Delete</button>
      </div>
      {/* <table>
        <tbody>
          <tr>
            <th>C N</th>
            <th> S N</th>
           
            <th>conservation Status</th>
          </tr>
          {individual.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.common_name}</td>
                <td>{val.scientific_name}</td>
             
                <td>{val.conservation_status}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default DetailPage;
