import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./DetailPage.css";

function DetailPage() {
  let { id } = useParams();
  const [sightingDetail, setSightingDetail] = useState(null);

  // Access your API from  React app

  console.log(sightingDetail);

  const getSightingDetail = async () => {
    const request = await fetch(`/api/sighting/${id}`);
    const result = await request.json();
    console.log(result);
    setSightingDetail(result);
    console.log(sightingDetail);
  };

  useEffect(() => {
    getSightingDetail(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  }, []);

  return sightingDetail ? (
    <div className="detailPage">
      {/* <p>sightingDetail</p> */}
      <h1>Common Name: individual.common_name</h1>
      <div className="Flex">
        <p>Scientific Name: {sightingDetail.scientific_name}</p>
        <p>Conservation Status: Endangered</p>
        <p>Population: 500</p>
        <p>Nick Name: {sightingDetail.name}</p>
        <p>Last Seen: {sightingDetail.scientific_name}</p>
        <p>Location:{sightingDetail.location}</p>
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
  ) : (
    <div>loading</div>
  );
}

export default DetailPage;
