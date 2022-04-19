import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Individual.css";

const IndividualSightingList = () => {
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };

  const [sighting, setSighting] = useState([]);
  // const [selectedIndividual, setSelectedIndividual] = useState("");

  // Access your API from  React app

  // console.log(sighting);

  const getAllSighting = async () => {
    const request = await fetch("/api/sighting");
    const result = await request.json();
    console.log(result);
    setSighting(result);
  };

  useEffect(() => {
    getAllSighting(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  }, []);

  // add individual sighting
  // const saveIndividual = () => {
  //   fetch("/api/sighting", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: formData, // Use your own property name / key
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setData(result.rows))
  //     .catch((err) => console.log("error"));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   saveIndividual(); // Save games when form is submitted
  // };

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
                  <td>{val.healthy}</td>
                  <td>{val.location}</td>
                  <td>{val.last_seen}</td>

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
