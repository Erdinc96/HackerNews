import React from "react";

const Pagination = ({
  aritclesPerPage,
  paginate,
  totalArticles,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / aritclesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          // <li key={number} className="page-item">
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}>
            {/* ------------ */}
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
