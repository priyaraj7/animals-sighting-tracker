import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Individual.css";

const IndividualSightingList = ({ sighting }) => {
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };

  // const [sighting, setSighting] = useState([]);

  // const getAllSighting = async () => {
  //   const request = await fetch("/api/sighting");
  //   const result = await request.json();
  //   console.log(result);
  //   setSighting(result);
  // };

  // useEffect(() => {
  //   getAllSighting();
  // }, []);

  return (
    <div className="Individual-List">
      <h1 className="List-Header">List of Sightings</h1>
      <div className="Table">
        <table>
          <tbody>
            <tr>
              <th>Nick Name</th>
              <th>Common Name</th>
              <th>Health Status</th>
              <th>Location</th>
              <th> Date and Time of Seen</th>
              <th>More Details</th>
            </tr>
            {sighting.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.common_name}</td>
                  <td>{val.healthy ? "Healthy" : "UnHealthy"}</td>
                  <td>{val.location}</td>
                  <td>{new Date(val.last_seen).toLocaleString()}</td>

                  <td>
                    <button onClick={() => routeChange(val.id)}>Details</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndividualSightingList;
