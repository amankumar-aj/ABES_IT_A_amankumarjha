import React from 'react';
import './fashion.css';


function Fashion(props) {
  return (
    <div className="fashion-store">
      <div>
        {/* <h1>Fashion Store</h1> */}
      </div>

      <div id="card" >
        <img src={props.image} 
          alt='image' height="90px" width="90px"
        />
        <h3>{props.title}</h3>
        <p><b>Price:</b> ${props.price}</p>
        <p>{props.description}</p>

       
      </div>
      </div>
    
  );
}

export default Fashion;
