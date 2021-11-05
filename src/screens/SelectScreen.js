import React, { useState, useContext } from "react";
import { Context } from "../Context.js";
import "../components/form.css";
import useForm from "../components/useForm.js";
import flight_result from "../components/flight_result";
const SelectScreen = () => {
  const [context, setContext] = useContext(Context);
  const { handleChange, values, handleSubmit } = useForm();
  return (
    <div className="form-inputs" class="container">
      <div>
        <p>
          <strong>Search For Flight</strong>
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formInput">
          <p class="col-3"></p>
          <label className="source-label" htmlFor="sourceCity" class="col-3">
            Source City:{" "}
          </label>

          <select
            class="col-2"
            name="sourceCity"
            selected="New Delhi"
            value={values.sourceCity}
            onChange={handleChange}
          >
            {flight_result.map((flight) => (
              <option value={flight.fromCity}>{flight.fromCity}</option>
            ))}
          </select>
          {/* <option>{options}</option> */}
        </div>
        <div className="formInput">
          <p class="col-3"></p>
          <label
            className="destination-label"
            htmlFor="destinationCity"
            class="col-3"
          >
            Destination City:{" "}
          </label>

          <select
            class="col-2"
            name="destinationCity"
            selected="New Delhi"
            value={values.destinationCity}
            onChange={handleChange}
          >
            {flight_result.map((flight) => (
              <option value={flight.toCity}>{flight.toCity}</option>
            ))}
          </select>
        </div>
        <div className="formInput">
          <p class="col-3"></p>
          <label className="travel-label" htmlFor="travelDate" class="col-3">
            Travel Date :{" "}
          </label>
          <input
            class="col-2"
            type="date"
            name="travelDate"
            placeholder="02-11-21"
            value={values.travelDate}
            onChange={handleChange}
          />
        </div>
        <div className="formInput">
          <p class="col-3"></p>
          <label className="return-label" htmlFor="returnDate" class="col-3">
            Return Date :{" "}
          </label>
          <input
            class="col-2"
            type="date"
            name="returnDate"
            placeholder="02-11-21"
            value={values.returnDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" class="btn btn-dark m-4 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectScreen;
