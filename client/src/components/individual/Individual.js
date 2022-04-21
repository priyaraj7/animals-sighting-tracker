import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Individual.css";

const IndividualSightingList = ({ sighting, deleteSighting }) => {
  let [filterHealthy, setFilterHealthy] = useState(false);
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };

  const handleToggleHealthy = () => {
    setFilterHealthy(!filterHealthy);
  };

  return (
    <div className="Individual-List">
      <h1 className="List-Header">List of Sightings</h1>
      <div className="Table">
        <table>
          <tbody>
            <tr>
              <th>Nick Name</th>
              <th>Common Name</th>
              {/* <th>Health Status</th> */}
              <th>
                <button
                  onClick={() => {
                    handleToggleHealthy();
                  }}
                >
                  Heathy
                </button>
              </th>
              <th>Location</th>
              <th> Date and Time of Seen</th>
              <th>More Details</th>
              <th>Delete</th>
            </tr>
            {sighting
              .filter((s) => {
                if (filterHealthy) return s.healthy;
                return true;
              })
              .map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.common_name}</td>
                    <td>{val.healthy ? "Healthy" : "UnHealthy"}</td>
                    <td>{val.location}</td>
                    <td>{new Date(val.last_seen).toLocaleString()}</td>

                    <td>
                      <button onClick={() => routeChange(val.id)}>
                        Details
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteSighting(val.id)}>
                        delete
                      </button>
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
