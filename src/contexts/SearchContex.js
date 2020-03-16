import React, { createContext } from 'react';

export const SearchContext = createContext();

class SearchContextProvider extends React.Component {
  state = {};

  /**
   * check localstorage first for given query,
   * return results from localstorage if already exist
   */
  retrieveFromCache = () => {};

  // retrieve search results from Unsplash api
  retrieveFromApi = param => {
    console.log(param);
  };

  render() {
    return (
      <SearchContext.Provider
        value={{ ...this.state, makeSearch: this.retrieveFromApi }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchContextProvider;
