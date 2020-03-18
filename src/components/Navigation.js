import React, { useContext } from 'react';
import './Navigation.css';
import { SearchContext } from '../contexts/SearchContex';

function Navigation() {
  const { page, total_pages } = useContext(SearchContext);

  // conditions
  const next = page < total_pages;
  const previous = page > 1;

  return (
    <div id="navigation">
      <button className={!previous ? 'disabled' : null}>Previous</button>
      <button className={!next ? 'disabled' : null}>Next</button>
    </div>
  );
}

export default Navigation;
