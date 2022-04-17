import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Individual.css";

const IndividualSightingList = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/api/species`;
    navigate(path);
  };

  const [sighting, setSighting] = useState([]);
  // const [selectedIndividual, setSelectedIndividual] = useState("");

  // Access your API from  React app

  console.log(sighting);

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
      {/* <h1>Common Name: individual.common_name</h1>
      <div className="Flex">
        <p>Scientific Name: xyz</p>
        <p>Conservation Status: Endangered</p>
        <p>Population: 500</p>
        <p>Wiki Link</p>
      </div> */}

      {/* <img
          id="eb-stat-ctn"
          src="https://webstats.eb.com/webstats/stats.gif?a=-1&amp;ac=%20&amp;d=www.britannica.com&amp;od=www.britannica.com&amp;h=58&amp;rf=https%3A%2F%2Fwww.google.com%2F&amp;rq=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Ftiger&amp;s=B9D40F5F-3EAC-4DE6-B2F3-12DA57A1F5D6&amp;json=%20"
          alt=""
        /> */}
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
              {/* <th>Observer Name</th>
              <th>Observer Email</th> */}
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
            {sighting.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.common_name}</td>
                  <td>{val.healthy}</td>
                  <td>{val.location}</td>
                  <td>{val.last_seen}</td>
                  {/* <td>{val.observerName}</td>
                  <td>{val.observerEmail}</td>
                  <td>{val.observerName}</td> */}
                  {/* <td>{val.observerEmail}</td> */}
                  <td>
                    <button onClick={routeChange}>Details</button>
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
