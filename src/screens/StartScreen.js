import React, { useContext } from "react";
import { Context } from "../Context.js";
import SelectScreen from "./SelectScreen";
import DisplayScreen from "./DisplayScreen";
import BookingDetails from "./BookingDetails.js";
import ThankYouScreen from "./ThankYouScreen.js";
function StartScreen() {
  const [context, setContext] = useContext(Context);
  console.log("context Step", context);
  return (
    <div>
      {context.step === 1 && <SelectScreen />}
      {context.step === 2 && <DisplayScreen />}
      {context.step === 3 && <BookingDetails />}
      {context.step === 4 && <ThankYouScreen />}
      {/* {context.step === 5 && <WaterSim />} */}
    </div>
  );
}

export default StartScreen;
