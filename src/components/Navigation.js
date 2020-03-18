import React, { useContext } from 'react';
import './Navigation.css';
import { SearchContext } from '../contexts/SearchContex';

function Navigation() {
  const {
    results,
    loading,
    page,
    total_pages,
    prevPage,
    nextPage
  } = useContext(SearchContext);

  // conditions
  const next = page < total_pages;
  const previous = page > 1;

  // if there is no results then don't render nagigation buttons
  if (results.length !== 0 && !loading) {
    return (
      <div id="navigation">
        <button className={!previous ? 'disabled' : null} onClick={prevPage}>
          Previous
        </button>
        <button className={!next ? 'disabled' : null} onClick={nextPage}>
          Next
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Navigation;
