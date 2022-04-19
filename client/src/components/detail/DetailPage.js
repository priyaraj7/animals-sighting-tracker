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

  const handleDeleteSighting = async (deleteId) => {
    // Simple DELETE HTTP request with async await

    let response = await fetch(`/api/sighting/${id}`, {
      method: "DELETE",
    });
    await response.json();
    // delete functionality
    const deleteSighting = sightingDetail.filter(
      (sighting) => sighting.id !== deleteId
    );
    console.log(deleteSighting);
    setSightingDetail(deleteSighting);
  };

  return sightingDetail ? (
    <div className="detailPage">
      <h1>sightingDetail</h1>
      <h1>{sightingDetail.name}</h1>
      <div className="detailList">
        <p>Scientific Name: {sightingDetail.scientific_name}</p>
        <p>Common Name: {sightingDetail.common_name}</p>
        <p>Conservation Status: Endangered</p>
        <p>Population: {sightingDetail.population}</p>
        <p>Nick Name: {sightingDetail.name}</p>
        <p>Last Seen: {sightingDetail.last_seen}</p>
        <p>Location:{sightingDetail.location}</p>
        <button
          className="deleteButton"
          onClick={() => handleDeleteSighting(sightingDetail.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default DetailPage;
