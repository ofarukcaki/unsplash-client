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
  const previous = page > 1;
  const next = page < total_pages;

  // prevent being clicked if buttons are disabled
  const goPrev = () => {
    if (previous) prevPage();
  };

  const goNext = () => {
    if (next) nextPage();
  };

  // if there is no results then don't render nagigation buttons
  if (results.length !== 0 && !loading) {
    return (
      <div id="navigation">
        <button className={!previous ? 'disabled' : null} onClick={goPrev}>
          Previous
        </button>
        <button className={!next ? 'disabled' : null} onClick={goNext}>
          Next
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Navigation;
