import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
    </div>
  );
}

//https://dev.to/devxvaibhav/mastering-api-calls-in-react-a-beginners-guide-to-building-and-consuming-rest-apis-e2j
export default App;