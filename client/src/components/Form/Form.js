import { useEffect, useState } from "react";
// import { useReducer } from "react";
// import { useForm } from "react-hook-form";
// import DateTimePicker from "react-datetime-picker";
import "./Form.css";

const Form = ({ addNewSighting }) => {
  // const initialValues = {
  //   id: "",
  //   common_name: "",
  //   last_seen: "",
  //   scientific_name: "",
  //   name: "",
  //   location: "",
  //   healthy: false,
  //   email: "",
  // };

  // debugger;

  // STATE
  const [species, setSpecies] = useState([]);
  const [individuals, setIndividuals] = useState([]);
  // const [inputValues, setInputValues] = useState(initialValues);
  const [selectedSpecies, setSelectedSepcies] = useState(null);

  const [selectedIndividual, setSelectedIndividual] = useState("");

  const [healthy, setHealthy] = useState(false);
  const [location, setLocation] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getAllSpecies = async () => {
      const request = await fetch("/api/species");
      const result = await request.json();
      setSpecies(result);
    };
    getAllSpecies();
  }, []);

  useEffect(() => {
    const getIndividualsOfSpecies = async () => {
      const request = await fetch(`/api/individual/${selectedSpecies}`);
      const result = await request.json();
      setIndividuals(result);
    };
    if (selectedSpecies) getIndividualsOfSpecies();
  }, [selectedSpecies]);

  // const test = (ev) => {
  //   ev.preventDefault();
  //   return false;
  // };
  console.log(individuals);
  return (
    <>
      <div className="FormPage">
        <h1 className="h1">Form</h1>
        <form
          className="Form"
          onSubmit={(ev) => {
            ev.preventDefault();

            addNewSighting({
              healthy,
              lastSeen,
              location,
              email,
              individual_id: selectedIndividual,
            });
          }}
        >
          <fieldset>
            <legend>Please enter the individual information</legend>

            <label>Select common Name</label>
            <select
              name="species_id"
              onChange={(e) => setSelectedSepcies(e.target.value)}
            >
              <option>Select one</option>
              {species.map((animal) => (
                <option key={animal.id} value={animal.id}>
                  {animal.common_name}
                </option>
              ))}
            </select>

            <label>Nick Name</label>
            <select
              name="individual_id"
              value={selectedIndividual}
              onChange={(ev) => setSelectedIndividual(ev.target.value)}
            >
              <option>Select one</option>
              {individuals.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.nick_name}
                </option>
              ))}
            </select>
            {/* <input
              // {...register("nickName", { required: true })}
              placeholder="Nick Name"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            /> */}
            {/* {errors.nickName?.type === "required" && "Nick Name is required"} */}

            <label>Status</label>
            <select
              // {...register("healthy")}
              value={healthy}
              onChange={(e) => setHealthy(e.target.value)}
              placeholder="Select Health Status"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            <label>Date and time of last seen</label>
            <input
              type="datetime-local"
              max={new Date().toISOString().slice(0, -5)}
              value={lastSeen}
              onChange={(e) => {
                setLastSeen(e.target.value);
              }}
            />

            <label>Location</label>
            <textarea
              // {...register("Location")}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
            {/* <label>date & Time Seen</label> */}
          </fieldset>

          <br />
          {/* SIGHTER INFORMATION */}
          <fieldset>
            <legend>Please give observer information</legend>

            <label>Email</label>
            <input
              // {...register("email", { required: true })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {/* {errors.email && "email is required"} */}
          </fieldset>

          <button className="FormSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
