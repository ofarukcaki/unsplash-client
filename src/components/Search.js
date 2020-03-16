import React from 'react';
import './Search.css';

const collectionList = [
  'featured',
  'walpapers',
  'nature',
  'textures & patterns',
  'architecture'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form id="search" onSubmit={this.onSubmit}>
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
          <button id="search-btn">search</button>
        </div>
      </form>
    );
  }
}

export default Navbar;
