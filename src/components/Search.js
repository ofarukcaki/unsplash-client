import React from 'react';

const collectionList = [
  'featured',
  'walpapers',
  'nature',
  'textures & patterns',
  'architecture'
];

function Navbar() {
  return (
    <div id="search">
      <div>
        <input className="query" type="text" placeholder="Query" />
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
        <button id="search-btn">SEARCH</button>
      </div>
    </div>
  );
}

export default Navbar;
