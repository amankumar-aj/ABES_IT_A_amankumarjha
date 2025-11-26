import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [show, setShow] = useState([]);
// useEffect(() => {
//     fetch('http://localhost:8080/api/about')
//       .then(res => res.json())
//       .then(data => setFa1(data))
//       .catch(err => console.error("Error fetching data:", err));
//   }, []);
  useEffect(() => {
    axios.get('http://localhost:8080/api/about')
      .then((res) => setShow(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []); 

  return (
    <div className='App1' >
      <h1>Information Of Students</h1>
    <div className='App'>
      {show.map((show) => (
        <div key={show.id} className='Card'>
          <img src={show.img} alt='image' height="90px" width="90px" />
          <h3>name: {show.name}</h3>
          <h3>Class: {show.Class}</h3>
          
        
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
