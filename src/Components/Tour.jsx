import React, { useState } from 'react';

const Tour = ({image,info,name,price}) => {
  return (
    <>
      <div className='single-tour'>
         <img src={image} alt={name} />
         <h4>{name}</h4>
         <p>{info}</p>
         <span>{price}</span>
      </div> 
    </>
  )
};

export default Tour;
