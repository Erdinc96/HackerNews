import React, { useState } from "react";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const [loveMode, setLoveMode] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleJobsClick = () => {
    activateRainbow();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  function makeBlur() {
    // document.body.style.backgroundColor = "red";
  }

  return (
    <div className="header">
      <div className="logo">Hacker News</div>

      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          name="inputField"
          id="searchInput"
          placeholder="type here to search..."
        />

        <button onClick={handleSearch} className="search-button">
          search
        </button>
      </div>

      <div className="nav">
        <ul className="navLinks">
          <li>new</li>
          <li>post</li>
          <li>comments</li>
          <li>ask</li>
          <li>show</li>
          <li>jobs</li>
          <li>submit</li>
        </ul>
      </div>

      <div className="signIn">sign in</div>
    </div>
  );
}

export default Header;
