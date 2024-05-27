import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import LikeButton from "./components/LikeButton";
import "semantic-ui-css/semantic.min.css";
import Pagination from "./components/Pagination";
import { Icon } from "semantic-ui-react";
import Footer from "./components/Footer";

import { PacmanLoader } from "react-spinners";

import RainbowEdition from "./components/RainbowEdition";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [aritclesPerPage] = useState(5);

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
    return (
      <div className="ui active centered text loader massive ">
        This supposed to be a fancy PacMan Loader
      </div>
    );
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

  //----------------------------TRYING TO GET THE THUMBS UP TO WORK---------------------

  const ThumbsUpDown = () => {
    const [isThumbsUp, setIsThumbsUp] = useState(true);

    const handleClick = () => {
      setIsThumbsUp(!isThumbsUp);
    };

    return (
      <Icon
        name={isThumbsUp ? "thumbs up outline" : "thumbs up"}
        size="large"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    );
  };

  // --------------------------------------------------  Pagination --------
  const indexOfLastPost = currentPage * aritclesPerPage;
  const indexofFirstPost = indexOfLastPost - aritclesPerPage;
  const currentArticles = articles.slice(indexofFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //-------------------------------------
  return (
    <>
      <Header onSearch={handleSearch} />

      <div className="mainPage">
        <LeftMenu />

        {/* <RainbowEdition /> */}

        <ol className="newsList">
          {currentArticles.map((item) => (
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

                {/* <div className="heart">🤍</div> */}

                <LikeButton />

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
        </ol>
        <RightMenu data={data} />
      </div>
      <Pagination
        paginate={paginate}
        aritclesPerPage={aritclesPerPage}
        totalArticles={articles.length}
        // -----
        currentPage={currentPage}
        // --------
      />
      <Footer />
    </>
  );
}

export default App;
