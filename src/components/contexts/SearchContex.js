import React, { createContext } from 'react';

export const SearchContext = createContext();

class SearchContextProvider extends React.Component {
  state = {};

  render() {
    return (
      <SearchContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchContextProvider;
