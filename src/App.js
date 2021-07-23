import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const decrement = () => {
    if (count > -10) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };



  return (
    <div className="App">
      <h1>Item Counter</h1>
      <div>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
      </div>
      <div>{count}</div>
    </div>
  );
}

export default App;
