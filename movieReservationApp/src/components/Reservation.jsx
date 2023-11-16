import React from "react";

function Reservation() {
  const buttonCount = 40;
  const buttons = Array.from({ length: buttonCount }, (_, index) => (
    <button key={index + 1}>Button {index + 1}</button>
  ));

  return (
    <div>
      {buttons}
    </div>
  );
}

export default Reservation;
