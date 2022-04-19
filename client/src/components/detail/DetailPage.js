import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    getSightingDetail();
  }, []);

  return sightingDetail ? (
    <div className="detailPage">
      <h1>Sighting Detail</h1>
      <h1>{sightingDetail.name}</h1>
      <div className="detailList">
        <p>Scientific Name: {sightingDetail.scientific_name}</p>
        <p>Common Name: {sightingDetail.common_name}</p>
        <p>Conservation Status: Endangered</p>
        <p>Population: {sightingDetail.population}</p>
        <p>Nick Name: {sightingDetail.name}</p>
        <p>Last Seen: {sightingDetail.last_seen}</p>
        <p>Location:{sightingDetail.location}</p>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default DetailPage;
