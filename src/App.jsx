import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
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
        setArticles(jsonData.hits);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ----------------------------------------------------------------
  function handleSearch(query) {
    if (query) {
      const filteredArticles = data.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setArticles(filteredArticles);
    } else {
      setArticles(data);
    }
  }
  // ----------------------------------------------------------------------

  if (loading) {
    return <p>Please wait...</p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //----------------------FORMAT THE DATE---------------------------------

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return ` on ${day}.${month}.${year} at ${hours}:${minutes}`;
  }

  //-------------------------------------------------------------------------

  return (
    <>
      <Header onSearch={handleSearch} />

      <div className="mainPage">
        <LeftMenu />
        <ul className="newsList">
          {articles.map((item) => (
            <li className="newsItem" key={item.objectID}>
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleTitleClick(item.url)}>
                  {item.title}
                </a>

                {/* ---------THE HEART IS JUST A PLACE HOLDER AND NOT WORKING CORRECTLY YET, I THINK THIS CAN BE DONE BETTER WITH THE REACT SEMANTIC UI------- */}

                <div className="heart">🤍</div>
                <div className="itemURL">{item.url}</div>
              </div>
              <div className="bottomCard">
                <div className="smallDetails">{item.author}</div>
                {/* <div className="smallDetails">{item.created_at}</div> */}
                <div className="smallDetails">
                  {formatDate(item.created_at)}
                </div>
                <div className="smallDetails">
                  Comments: {item.num_comments}
                </div>
                <div className="points">Points: {item.points}</div>
              </div>
            </li>
          ))}
        </ul>
        <RightMenu data={data} />
      </div>
    </>
  );
}

export default App;
