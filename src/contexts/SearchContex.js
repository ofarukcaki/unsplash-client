import React, { createContext } from 'react';
const axios = require('axios');

export const SearchContext = createContext();

class SearchContextProvider extends React.Component {
  state = {
    results: [],
    loading: true,
    error: false,
    errorText: '',
    total_pages: null,
    page: 1
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
        results: JSON.parse(cachedResult).results,
        loading: false,
        error: false
      });
      return true;
    }
    return false;
  };

  // retrieve search results from Unsplash api
  retrieveFromApi = params => {
    this.setState({ loading: true });

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
          results,
          error: false,
          total_pages: response.data.total_pages,
          page: 1
        });
        // update localstorage
        localStorage.setItem(
          JSON.stringify(params),
          JSON.stringify(response.data)
        );
      })
      .catch(error => {
        console.error(error);
        this.setState({
          error: true,
          errorText:
            'There is a problem while fetching results from Unsplash API.'
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  search = params => {
    const { query, collections } = params;
    this.setState({ query, collections });
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
