import React, { useState } from 'react';
import './App.css';
import ListApp from './ListApp';





function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>カウンターアプリ</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>増加</button>
      <button onClick={decrement}>減少</button>
      <h2>Reactアプリケーション</h2>
      <ListApp />
    </div>
  );
}

export default App;
