import React from "react";
import { useState } from "react";
import DatePicker from "./datePicker";
import Choices from "./Choices";
import Reservation from "./Reservation";
import MovieData from "./MovieData";


function Homepage() {
  const [reserve, setReserve] = useState(false);
  const [change, setChange] = useState(false);
  const [delReserve, setDelReserve] = useState(false);

  // function isDate = (date) => {
  //         return (
  //           {date.map((data) => {
  //               <Choices

  //               />

  //         }
  //         )
  // }

  function nextPage() {
    setChange(true);
  }
 console.log(MovieData.defaultProps.movieData);
  return (
    <>
      <div>
        <h1>Movie Reservation</h1>
        <div className="homepage-buttons">
          {!change && (
            <div>
              <button type="button" onClick={nextPage}>
                Reserve
              </button>
              <button type="button">Delete Reservation</button>
            </div>
          )}
          {change && <DatePicker />}
        </div>
      </div>
    </>
  );
}

export default Homepage;
