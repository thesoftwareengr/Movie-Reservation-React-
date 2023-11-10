import React from "react";
import { useState } from "react";
import Choices from "./Choices";

function Homepage() {
  const [date, setDate] = useState();
  const [dateChoice, setDateChoice] = useState();
  console.log("Date", date);

  function nextPage() {
    setDateChoice(true);
  }
  return (
    <>
      <div>
        <h1>Movie Reservation</h1>
        <div className="select-Date">
          <h2>Selected Date: {date}</h2>
          {!dateChoice && (
            <div>
              <input type="date" onChange={(e) => nextPage().setDate (e.target.value) } />
            </div>
          )}
          {dateChoice && <Choices/>
          }
        </div>
      </div>
    </>
  );
}

export default Homepage;
