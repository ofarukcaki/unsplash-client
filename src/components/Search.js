import React, { useContext } from 'react';
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
  console.log(c);

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <form id="search" onSubmit={onSubmit}>
      <div>
        <input
          className="query"
          type="text"
          placeholder="Query"
          onChange={e => {
            this.setState({ query: e.target.value });
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
