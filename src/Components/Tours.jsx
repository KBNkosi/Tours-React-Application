import React from 'react';
import { useState,useEffect } from 'react';
import Tour from './Tour';


const Tours = ({toursdata}) => {


  return (
    <section>
    {toursdata.map((tour)=>(
       <Tour key={tour.id} {...tour} />
    ))}
     
    </section>
  )
};

export default Tours;
