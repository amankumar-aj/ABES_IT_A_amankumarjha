import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Cards />
      </div>
    </>
  );
}

export default App;
