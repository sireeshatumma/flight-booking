import { useState, useContext } from "react";
import { Context } from "../Context";
import flight_result from "./flight_result";

const useForm = () => {
  const [context, setContext] = useContext(Context);
  const allFlights = [];
  const [values, setValues] = useState({
    sourceCity: "Sembakung",
    destinationCity: "Pyatnitskoye",
    travelDate: "",
    returnDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.sourceCity);
    flight_result.map((flight) => {
      if (
        flight.toCity === values.destinationCity &&
        flight.fromCity === values.sourceCity
      ) {
        allFlights.push(flight);
        console.log(flight);
      }
    });
    setContext({
      ...context,
      step: 2,
      values: values,
      allFlights: allFlights,
    });
    // return <div>{values.sourceCity}</div>;
  };
  return { handleChange, values, handleSubmit };
};
export default useForm;
