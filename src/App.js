import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MasonryGrid from './components/MasonryGrid';
import SearchContexProvider from './contexts/SearchContex';
import Result from './components/Result';

const collectionList = [
  'featured',
  'walpapers',
  'nature',
  'textures & patterns',
  'architecture'
];

function App() {
  return (
    <div className="App">
      <SearchContexProvider>
        <Navbar />
        <div className="container results-container">
          <Result />
        </div>
      </SearchContexProvider>
    </div>
  );
}

export default App;
