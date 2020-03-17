import React, { useContext, useState, useEffect } from 'react';
import './Search.css';
import { SearchContext } from '../contexts/SearchContex';

const collectionList = [
  { name: 'all', id: '' },
  { name: 'wallpapers', id: 1065976 },
  { name: 'nature', id: 327760 },
  { name: 'textures & patterns', id: 3330445 },
  { name: 'architecture', id: 3348849 },
  { name: 'gradient nation', id: 3694365 },
  { name: 'color - neutral tones', id: 3150958 },
  { name: 'animals', id: 181581 },
  { name: 'landscape', id: 827743 }
];

const Search = () => {
  const { makeSearch } = useContext(SearchContext);
  const [query, setQuery] = useState('');
  const [collections, setcollection] = useState('');

  useEffect(() => {
    makeSearch({ query: 'Istanbul', per_page: 20 });
  }, []);

  // form submit handler
  const onSubmit = event => {
    event.preventDefault();
    // call retrieveFromApi() function inside SearchContext
    makeSearch({ query, collections, per_page: 20 });
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
        <select
          id="collections"
          defaultValue=""
          onChange={e => {
            setcollection(e.target.value);
          }}
        >
          <option value="" disabled>
            Collections
          </option>
          {collectionList.map(collectionItem => {
            return (
              <option key={collectionItem.id} value={collectionItem.id}>
                {collectionItem.name}
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
