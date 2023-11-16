import React, { useState } from 'react';

const Reservation = () => {
  // Initialize an 8x5 array with all seats initially available
  const initialSeatingArray = Array.from({ length: 8 }, () => Array(5).fill(true));

  // Create state for the seating array
  const [seatingArray, setSeatingArray] = useState(initialSeatingArray);

  // Example: Set a specific seat as unavailable (row 3, seat 2)
  const markSeatAsUnavailable = (row, seat) => {
    // Create a copy of the seating array to avoid mutating state directly
    const newSeatingArray = seatingArray.map((rowArray, rowIndex) => {
      if (rowIndex === row) {
        return rowArray.map((isSeatAvailable, seatIndex) => {
          return seatIndex === seat ? false : isSeatAvailable;
        });
      }
      return rowArray.slice(); // Return a copy of rows that aren't being modified
    });

    // Update the state with the new seating array
    setSeatingArray(newSeatingArray);
  };

  console.log(seatingArray);

  // Render your component with the seatingArray state
  return (
    <div>
      <h2>Seat Layout</h2>
      <table>
        <tbody>
          {seatingArray.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((isSeatAvailable, seatIndex) => (
                <td
                  key={seatIndex}
                  style={{
                    padding: '8px',
                    border: '1px solid #ddd',
                    background: isSeatAvailable ? 'green' : 'red',
                  }}
                  onClick={() => markSeatAsUnavailable(rowIndex, seatIndex)}
                >
                  {`Row ${rowIndex + 1} Seat ${String.fromCharCode(65 + seatIndex)}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;