import { useState, useContext } from "react";
import { Context } from "../Context";
import flight_result from "./flight_result";

const useUserForm = () => {
  const [context, setContext] = useContext(Context);
  const allFlights = [];
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailid: "",
    mobile: "",
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

    setContext({
      ...context,
      step: 4,
      userDetails: values,
    });
    // return <div>{values.sourceCity}</div>;
  };
  return { handleChange, values, handleSubmit };
};
export default useUserForm;
