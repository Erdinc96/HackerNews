// import Search from "./Search";

// function Header({ onSearch }) {
//   return (
//     <div className="header">
//       <div className="logo">Hacker News</div>

//       <Search onSearch={onSearch} />

//       <div className="nav">
//         <ul className="navLinks">
//           <li>new</li>
//           <li>post</li>
//           <li>comments</li>
//           <li>ask</li>
//           <li>show</li>
//           <li>jobs</li>
//           <li>submit</li>
//         </ul>
//       </div>
//       <div className="signIn">sign in</div>
//     </div>
//   );
// }

// export default Header;

// Header.jsx
import React, { useState } from "react";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="header">
      <div className="logo">Hacker News</div>

      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          name="inputField"
          id="searchInput"
          placeholder="Type here to search..."
        />
        <button onClick={handleSearch} className="search-button">
          Search
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
