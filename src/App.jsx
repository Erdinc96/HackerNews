import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";

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

  //   return (
  //     <>
  //       <Header />
  //       <div className="mainPage">
  //         <LeftMenu />

  //         <ul className="newsList">
  //           {data.map((item) => (
  //             <li className="newsItem" key={item.objectID}>
  //               <div>
  //                 <div>{item.title}</div> <div className="heart">🤍</div>
  //                 <div className="itemURL">{item.url}</div>
  //                 <i class="fa-light fa-heart"></i>
  //               </div>

  //               <div className="bottomCard">
  //                 <div className="smallDetails">{item.author}</div>
  //                 <div className="smallDetails">{item.created_at}</div>
  //                 <div className="smallDetails">
  //                   Comments: {item.num_comments}
  //                 </div>
  //                 <div className="points">Points: {item.points}</div>
  //               </div>

  //               {/*  */}
  //             </li>
  //           ))}
  //         </ul>

  //         <RightMenu />
  //       </div>
  //     </>
  //   );
  // }

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
                <div className="heart">🤍</div>
                <div className="itemURL">{item.url}</div>
                <i className="fa-light fa-heart"></i>
              </div>
              <div className="bottomCard">
                <div className="smallDetails">{item.author}</div>
                <div className="smallDetails">{item.created_at}</div>
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
