// import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./form/Form";
import DetailPage from "./detail/DetailPage";
import IndividualList from "./individual/Individual";

const Controller = () => {
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
  };

  return (
    <Routes>
      <Route path="/" element={<IndividualList />} />
      <Route
        path="/add"
        element={<Form addNewSighting={handleAddOnSubmit} />}
      />
      <Route
        // index={true}
        path="/detail/:id"
        element={
          <DetailPage
          // events={events}
          // handleToggleFavorite={handleToggleFavorite}
          // handleDeleteEvent={handleDeleteEvent}
          />
        }
      />
    </Routes>
  );
};

export default Controller;
