import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="FormPage">
      <h1 className="h1">Form</h1>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Please give the individual information</legend>
          <label>Common Name</label>
          <input {...register("commonName", { required: true })} />
          {errors.commonName?.type === "required" && "Common name is required"}

          <label>Scientific Name</label>
          <input {...register("scientificName", { required: true })} />
          {errors.lastName && "Scientific name is required"}

          <label>Nick Name</label>
          <input {...register("nickName", { required: true })} />

          <label>Status</label>
          <select {...register("helthy")}>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <label>Location</label>
          <textarea {...register("Location")} placeholder="Location" />
        </fieldset>
        <br />
        {/* SIGHTER INFORMATION */}
        <fieldset>
          <legend>Please give your information</legend>
          <label>Full Name</label>
          <input {...register("fullName", { required: true })} />
          {errors.fullName?.type === "required" && "Full name is required"}

          <label>Email</label>
          <input {...register("scientificName", { required: true })} />
          {errors.lastName && "Scientific name is required"}
        </fieldset>

        <button className="FormSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
