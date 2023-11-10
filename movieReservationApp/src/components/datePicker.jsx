import React from "react";
import { useState } from "react";

function DatePicker() {
  const [date, setDate] = useState();
  const [dateChoice, setDateChoice] = useState();
  console.log("Date", date);

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
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
        )}
        {dateChoice}
      </div>
    </>
  );
}

export default DatePicker;
