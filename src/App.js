import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MasonryGrid from './components/MasonryGrid';
import SearchContexProvider from './contexts/SearchContex';

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
        <MasonryGrid c={collectionList} />
      </SearchContexProvider>
    </div>
  );
}

export default App;
