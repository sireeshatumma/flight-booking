import React, { useContext, useState } from "react";
import { Context } from "../Context";
import flight_result from "../components/flight_result";
const DisplayScreen = () => {
  const [context, setContext] = useContext(Context);
  const [bool, setbool] = useState(false);
  const allFlights = context.allFlights;
  const handleBookNow = (flightId) => {
    setContext({
      ...context,
      step: 3,
      flightId: flightId,
    });
  };
  return (
    <div class="container">
      <div>
        <div>
          <strong>Flight Search results</strong>
        </div>
        <strong>Number of results: {allFlights.length}</strong>
      </div>
      <div class="row">
        <div class="col-md-1">Number</div>
        <div class="col-md-1">airline_name</div>
        <div class="col-md-1">duration</div>
        {/* <div>{flight.logo}</div> */}
        <div class="col-md-1">logo</div>
        <div class="col-md-1">price</div>
        <div class="col-md-1">noofstops</div>
        <div class="col-md-1">fromCity</div>
        <div class="col-md-1">toCity</div>
        <div class="col-md-1">travelDate</div>
      </div>
      <div>
        {" "}
        {allFlights.map((flight) => {
          // console.log(flight.id);
          return (
            <div key={flight.id} class="row">
              <div class="col-md-1"> {flight.flight_number}</div>
              <div class="col-md-1"> {flight.airline_name}</div>
              <div class="col-md-1"> {flight.duration}</div>
              {/* <div>{flight.logo}</div> */}
              <div class="col-md-1">
                <img src={flight.logo} />
              </div>
              <div class="col-md-1">{flight.price}</div>
              <div class="col-md-1"> {flight.noofstops}</div>
              <div class="col-md-1"> {flight.fromCity}</div>
              <div class="col-md-1"> {flight.toCity}</div>
              <div class="col-md-1"> {flight.travelDate}</div>
              <div class="col-md-1">
                <button
                  onClick={() => {
                    handleBookNow(flight.id);
                  }}
                >
                  Book now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayScreen;

// id: 1,
// flight_number: "Gaby",
// airline_name: "Charer",
// duration: 5,
// logo: "http://dummyimage.com/169x100.jpg/ff4444/ffffff",
// price: 3736,
// noofstops: 1,
// fromCity: "Sembakung",
// toCity: "Pyatnitskoye",
// travelDate: "9/26/2019",
