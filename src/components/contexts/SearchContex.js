import React, { createContext } from 'react';
const axios = require('axios');

export const SearchContext = createContext();

class SearchContextProvider extends React.Component {
  state = {};

  /**
   * check localstorage first for given query,
   * return results from localstorage if already exist
   */
  retrieveFromCache = () => {};

  // retrieve search results from Unsplash api
  retrieveFromApi = () => {};

  render() {
    return (
      <SearchContext.Provider
        value={{
          ...this.state,
          search: this.retrieveFromApi
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchContextProvider;
