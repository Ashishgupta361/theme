import './App.css';
import { useState } from 'react';
import React from 'react';


function App() {

  const [name, setname] = useState('ashish');
  const [num, setnum] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Count-{num}</h2>

      <button onClick={() => {
        setnum(num + 1);
      }}>+</button>
      <button onClick={() => {
        setnum(num - 1);
      }}>-</button>

      <h2>Type your name: {name}</h2>
      <input
        onChange={function (e) {
          setname(e.target.value);
        }}
      />

    </div>
  );
}

export default App;
