import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = ({toursdata} ) => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(toursdata);
  },[toursdata]);
   
  if(!data || data.length === 0){
    return(
      <div className="title">
          <h2>No Tours Left</h2>
      </div>
      
    )
  }

const removeTour = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
};

console.log(data);


  return (
    <div className="tours">
      {data.map((tour) => (
        <Tour key={tour.id} removeTour={removeTour} {...tour} />
      ))}
    </div>
  );
};

export default Tours;
