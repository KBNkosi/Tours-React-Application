import React from "react";
import { useState,useEffect } from "react";
import Tours from "./Components/Tours";
import Loading from "./Components/Loading"

const url = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://course-api.com/react-tours-project");

function App() {
  
  const [toursdata,setToursData]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [isError,setIsError]=useState(false)
  
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
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setIsError(true);
        }
       
      };
      fetchData();
    }, []);

    if(isLoading){
    return <Loading />
    }

    if(isError){
      return(
        <div className="title">
         <h2>Error fetching Data</h2>
        </div>
      )
    }
   
   
    

  return (
    <main>
      <section className="container">
      <h1>Our Tours</h1>
      <Tours toursdata={toursdata} />
      </section>
      
    </main>
  );
}

export default App;
