import React from "react";
import { useState,useEffect } from "react";
import Tours from "./Components/Tours";

const url = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://course-api.com/react-tours-project");

function App() {
  
  const [toursdata,setToursData]=useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            mode: "cors"
          });
          if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
          }
          const data = await resp.json();
          setToursData(data)
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
   
   
    

  return (
    <>
      <h1>Hello World</h1>
      <Tours toursdata={toursdata} />
    </>
  );
}

export default App;
