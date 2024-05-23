import "./App.css";
import React, { useEffect, useState } from "react";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // -----------------------Delay----------------------------
        await new Promise((resolve) => setTimeout(resolve, 3000));
        //----------------------------------------------------------

        const response = await fetch("/HackerNews.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.hits);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Please wait...</p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="mainPage">
        <LeftMenu />

        <ul className="newsList">
          {data.map((item) => (
            <li className="newsItem" key={item.objectID}>
              <p>Title: {item.title}</p>
              <p>URL: {item.url}</p>
              <p>Author: {item.author}</p>
              <p>Date: {item.created_at}</p>
              <p>Points: {item.points}</p>
              <p>Comments: {item.num_comments}</p>
              <br />
            </li>
          ))}
        </ul>

        <RightMenu />
      </div>
    </>
  );
}

export default App;
