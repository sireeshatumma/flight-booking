import React from "react";
import useUserForm from "../components/useUserForm";

const BookingDetails = () => {
  const { handleChange, values, handleSubmit } = useUserForm();

  return (
    <div class="container">
      <div>
        <h1>Booking Confirmation Page</h1>
      </div>
      <div>Booking Details</div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label
              className="firstName-label"
              htmlFor="firstName"
              class="col-3 m-4"
            >
              First Name:{" "}
            </label>
            <input
              class="col-3 "
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="lastName-label"
              htmlFor="lastName"
              class="col-3 m-4"
            >
              Last Name:{" "}
            </label>
            <input
              class="col-3"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="emailid-label"
              htmlFor="emailid"
              class="col-3 m-4"
            >
              Email Id:{" "}
            </label>
            <input
              class="col-3"
              type="email"
              name="emailid"
              placeholder="Email Id"
              value={values.emailid}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mobile-label" htmlFor="mobile" class="col-3 m-4">
              Mobile:{" "}
            </label>
            <input
              class="col-3"
              type="number"
              name="mobile"
              placeholder="Mobile"
              value={values.mobile}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" class="btn btn-success m-4">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* 	First Name
	Last Name
	Email Id
	Mobile */}
    </div>
  );
};

export default BookingDetails;
