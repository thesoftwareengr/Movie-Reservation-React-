import React, { useState } from "react";
import Reservation from "./Reservation";

function DatePicker() {
  const [date, setDate] = useState("");
  const [dateChoice, setDateChoice] = useState(false);

  function nextPage() {
    setDateChoice(true);
  }

  return (
    <>
      <div>
        {!dateChoice && (
          <div className="select-Date">
            <h2>Selected Date: {date}</h2>

            <div>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <button type="button" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {date && dateChoice && <Reservation />}
      </div>
    </>
  );
}

export default DatePicker;
