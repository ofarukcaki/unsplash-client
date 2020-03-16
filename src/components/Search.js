import React, { useContext, useState, useEffect } from 'react';
import './Search.css';
import { SearchContext } from '../contexts/SearchContex';

const collectionList = [
  'featured',
  'walpapers',
  'nature',
  'textures & patterns',
  'architecture'
];

const Search = () => {
  const { makeSearch } = useContext(SearchContext);
  const [query, setQuery] = useState('');

  useEffect(() => {
    makeSearch({ query: 'Istanbul', per_page: 20 });
  }, []);

  // form submit handler
  const onSubmit = event => {
    event.preventDefault();
    // call retrieveFromApi() function inside SearchContext
    makeSearch({ query, per_page: 20 });
  };

  return (
    <form id="search" onSubmit={onSubmit}>
      <div>
        <input
          className="query"
          type="text"
          placeholder="Query"
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <select id="collections" defaultValue="">
          <option value="" disabled>
            Collections
          </option>
          {collectionList.map(collectionItem => {
            return (
              <option key={collectionItem} value={collectionItem}>
                {collectionItem}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button id="search-btn" type="submit">
          search
        </button>
      </div>
    </form>
  );
};

export default Search;
