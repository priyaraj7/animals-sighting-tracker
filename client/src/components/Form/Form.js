import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
// import DateTimePicker from "react-datetime-picker";
import "./Form.css";

const Form = ({ addNewSighting }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const initialState = {
    id: "",
    common_name: "",
    last_seen: "",
    scientific_name: "",
    name: "",
    location: "",
    healthy: false,
    email: "",
  };

  const [species, setSpecies] = useState([]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "species_id":
        const s = species.find(
          (sp) => sp.id === Number.parseInt(action.payload, 10)
        );
        return {
          ...state,
          species_id: action.payload,
          common_name: s.common_name,
          scientific_name: s.scientific_name,
        };
        return state;
      case "nickName":
        return { ...state, name: action.payload };
      case "heathStatus":
        return { ...state, healthy: action.payload };
      case "dateTime":
        return { ...state, last_seen: action.payload };
      case "location":
        return { ...state, location: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "last_seen":
        return { ...state, last_seen: action.payload };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  // STATE
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    const getAllSpecies = async () => {
      const request = await fetch("/api/species");
      const result = await request.json();
      setSpecies(result);
    };
    getAllSpecies();
  }, []);

  console.log(state);

  // const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="FormPage">
        <h1 className="h1">Form</h1>
        <form className="Form" onSubmit={handleSubmit(addNewSighting)}>
          <fieldset>
            <legend>Please enter the individual information</legend>

            <label>Select common Name</label>
            <select
              name="species_id"
              onChange={(event) =>
                dispatch({
                  type: "species_id",
                  payload: event.target.value,
                })
              }
            >
              {species.map((animal) => (
                <option key={animal.id} value={animal.id}>
                  {animal.common_name}
                </option>
              ))}
            </select>
            {/* <input
              {...register("commonName", { required: true })}
              readOnly
              value={state.common_name}
              placeholder="Select the Common Name"
            />
            {errors.commonName?.type === "required" &&
              "Common name is required"} */}

            {/* <label>Scientific Name</label> */}
            {/* <input
              {...register("scientificName", { required: true })}
              readOnly
              value={state.scientific_name}
              placeholder="Select the Scientific Name"
            />
            {errors.scientificName && "Scientific name is required"} */}

            <label>Nick Name</label>
            <input
              {...register("nickName", { required: true })}
              value={state.name}
              onChange={(event) =>
                dispatch({ type: "nickName", payload: event.target.value })
              }
              placeholder="Nick Name"
            />
            {errors.nickName?.type === "required" && "Nick Name is required"}

            <label>Status</label>
            <select
              {...register("healthy")}
              value={state.healthy}
              onChange={(event) =>
                dispatch({ type: "heathStatus", payload: event.target.value })
              }
              placeholder="Select Health Status"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            <label>Date and time of last seen</label>
            <input
              type="datetime-local"
              value={state.last_seen}
              max={new Date().toISOString().slice(0, -5)}
              onChange={(ev) =>
                dispatch({ type: "last_seen", payload: ev.target.value })
              }
            />

            <label>Location</label>
            <textarea
              {...register("Location")}
              value={state.location}
              onChange={(event) =>
                dispatch({ type: "location", payload: event.target.value })
              }
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
              {...register("email", { required: true })}
              value={state.email}
              onChange={(event) =>
                dispatch({ type: "email", payload: event.target.value })
              }
              placeholder="Email"
            />
            {errors.email && "email is required"}
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
