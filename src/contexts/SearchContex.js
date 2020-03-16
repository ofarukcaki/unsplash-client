import React, { createContext } from 'react';
const axios = require('axios');

export const SearchContext = createContext();

class SearchContextProvider extends React.Component {
  state = {
    results: []
  };

  /**
   * check localstorage first for given query,
   * return results from localstorage if already exist
   */
  retrieveFromCache = params => {
    const cachedResult = localStorage.getItem(JSON.stringify(params));
    if (cachedResult) {
      // update state
      this.setState({
        results: JSON.parse(cachedResult)
      });
      return true;
    }
    return false;
  };

  // retrieve search results from Unsplash api
  retrieveFromApi = params => {
    // fetch results from api
    axios
      .get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
        },
        params
      })
      .then(response => {
        const { results } = response.data;
        this.setState({
          results
        });
        // update localstorage
        localStorage.setItem(JSON.stringify(params), JSON.stringify(results));
      })
      .catch(error => {
        console.error(error);
      });
  };

  search = params => {
    // check the cache first
    if (!this.retrieveFromCache(params)) {
      // if there is no cached result for the query call retrieveFromApi
      this.retrieveFromApi(params);
    }
  };

  render() {
    return (
      <SearchContext.Provider
        value={{ ...this.state, makeSearch: this.search }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchContextProvider;
