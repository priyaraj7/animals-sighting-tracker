// import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Form from "./form/Form";
import DetailPage from "./detail/DetailPage";
import IndividualList from "./individual/Individual";

const Controller = () => {
  // let { id } = useParams();
  const navigate = useNavigate();

  const [sighting, setSighting] = useState([]);
  // const [sightingDetail, setSightingDetail] = useState(null);

  // Individual page functions

  const getAllSighting = async () => {
    const request = await fetch("/api/sighting");
    const result = await request.json();
    console.log(result);
    setSighting(result);
  };

  useEffect(() => {
    getAllSighting();
  }, []);

  // Form page functions

  const handleAddOnSubmit = async (newSighting) => {
    console.log(newSighting);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    };
    const request = await fetch("/api/sighting", requestOptions);
    console.log(request);
    await request.json();
    navigate("/", { replace: true });
  };

  const handleDeleteSighting = async (deleteId) => {
    // Simple DELETE HTTP request with async await

    let response = await fetch(`/api/sighting/${deleteId}`, {
      method: "DELETE",
    });
    // await response.json();
    // delete functionality
    const deleteSighting = sighting.filter(
      (sighting) => sighting.id !== deleteId
    );
    // navigate("../success", { replace: true });
    console.log(deleteSighting);
    setSighting(deleteSighting);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <IndividualList
            sighting={sighting}
            deleteSighting={handleDeleteSighting}
          />
        }
      />
      <Route path="add" element={<Form addNewSighting={handleAddOnSubmit} />} />
      <Route
        // index={true}
        path="detail/:id"
        element={<DetailPage />}
      />
      {/* <Route path="contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default Controller;
