import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = ({toursData, fetchData}) => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(toursData);
  },[toursData]);

   
  if(!data || data.length === 0){
    return(
      <div className="title">
          <h2>No Tours Left</h2>
          <button type="button" onClick={()=>fetchData()}>refresh</button>
      </div>
      
    )
  }
 

const removeTour = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
};

console.log(data);


  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
      {data.map((tour) => (
        <Tour key={tour.id} removeTour={removeTour} {...tour} />
      ))}
      </div>
      
    </section>
  );
};

export default Tours;
