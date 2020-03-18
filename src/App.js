import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchContexProvider from './contexts/SearchContex';
import Result from './components/Result';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <SearchContexProvider>
        <Navbar />
        <div className="container results-container">
          <Result />
          <Navigation />
        </div>
      </SearchContexProvider>
    </div>
  );
}

export default App;
