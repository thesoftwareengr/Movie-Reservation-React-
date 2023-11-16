import React, { useState } from "react";
import Reservation from "./Reservation";
import MovieData from "./MovieData";

function DatePicker() {
  const [date, setDate] = useState("");
  const [dateChoice, setDateChoice] = useState(false);

  function nextPage() {
    const foundMovie = MovieData.defaultProps.movieData.find(
      (movie) => movie.date === date
    );

    if (foundMovie) {
      console.log("Found Movie:", foundMovie);
      setDateChoice(true);
    } else {
      console.log("No Movie found for the selected date");
    }
  }

  return (
    <div>
      {!dateChoice && (
        <div className="select-Date">
          <h2>Selected Date: {date}</h2>

          <div>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>

          <button type="button" onClick={nextPage}>
            submit
          </button>
        </div>
      )}

      {dateChoice && <Reservation />}
    </div>
  );
}

export default DatePicker;
