import React from "react";

function RightMenu({ data }) {
  const getRandomIndices = () => {
    const indices = [];
    while (indices.length < 5) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const randomIndices = getRandomIndices();

  const randomTitles = randomIndices.map((index) => data[index].title);

  return (
    <div className="rightMenu">
      <h4>Trending Articles</h4>
      <br />
      <ul>
        {randomTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RightMenu;
