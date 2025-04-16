import React from "react";
import { useState, useEffect } from "react";
import Tours from "./Components/Tours";
import Loading from "./Components/Loading";

const url =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent("https://course-api.com/react-tours-project");

function App() {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const resp = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      const data = await resp.json();
      setToursData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="title">
        <h2>Error fetching Data</h2>
      </div>
    );
  }

  return (
    <main>
      <Tours toursData={toursData} fetchData={fetchData} />
    </main>
  );
}

export default App;
