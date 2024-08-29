import React, { useState } from "react";
import Tours from "./Components/Tours"
import data from "./data"
const App = () => {

  const[tours, setTours] = useState(data)

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h1>No Tours Left!</h1>
        <button className="refreshbtn" onClick={()=>{setTours(data)}}>Refresh</button>
      </div>
    )
  }
  return(
  <div className="wrapper">

    
    <Tours tour = {tours} removetour = {removeTour}></Tours>


  </div>
  )
};

export default App;
