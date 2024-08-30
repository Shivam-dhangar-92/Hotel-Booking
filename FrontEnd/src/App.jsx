import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);  // Initialize with an empty array

  useEffect(() => {
   axios.get('http://localhost:8080/api/v4/listings')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      {data.length > 0 ? (
        <div className="products">
          {data.map((item) => (
            <div key={item.id}>
              
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading products...</p>  // A loading state to display while fetching data
      )}
    </div>
  );
} 

export default App;

