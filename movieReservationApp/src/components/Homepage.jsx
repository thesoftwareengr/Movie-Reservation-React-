import React from "react"
import { useState } from "react"

function Homepage(){
const [date,setDate] = useState()
console.log("Date", date);
    return (
        <>
        <div>
            <h1>
                Movie Reservation                
            </h1>
          <div className="select-Date">
              <h2>Selected Date: {date}</h2>
              <input type="date" onChange={e => setDate(e.target.value)} />

          </div>
          
          
          
          
            <div className="homepage-buttons">
          
          
               <button type="button" >Reserve</button>
               <button type="button" >Delete Reservation</button>
            </div>
        </div>
        </>
    )
}

export default Homepage