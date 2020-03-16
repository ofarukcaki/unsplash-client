import React, { useContext } from 'react';
import MasonryGrid from './MasonryGrid';
import { SearchContext } from '../contexts/SearchContex';

function Loading() {
  return <p>Loading...</p>;
}

function Result() {
  const { results, loading } = useContext(SearchContext);
  console.log(loading);
  if (results.length === 0) {
    // no results
    return <p>No results</p>;
  } else if (loading) {
    return <Loading />;
    return;
  } else {
    return <MasonryGrid results={results} />;
  }
}

export default Result;
