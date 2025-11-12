import './App.css'
import { useEffect, useState } from 'react';
import Fashion from './components/Fashion'; // 

function App() {
  const [Fa1, setFa1] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setFa1(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      {Fa1.map((f, i) => (
        <Fashion
          key={i}
          // image={f.image}
          // title={f.title}
          // price={f.price}
          // description={f.description}
          props={f}
         
         
        />
      ))}
    </div>
  );
}

export default App;
