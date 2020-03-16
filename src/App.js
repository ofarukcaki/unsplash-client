import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MasonryGrid from './components/MasonryGrid';

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
      <Navbar />
      <MasonryGrid c={collectionList}/>
    </div>
  );
}

export default App;
