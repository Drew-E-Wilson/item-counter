import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)


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

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6 + 1));
    setDice2(Math.floor(Math.random() * 6 + 1));


  }

  console.log(dice1);
  console.log(dice2)

  return (
    <div className="App">
      <h1>Item Counter</h1>
      <div>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
      </div>
      <div>{count}</div>
      <div>
        <button onClick={rollDice}>Roll Dice</button>
        <div className="dice" >{dice1}</div>
        <div className="dice" >{dice2}</div>
      </div>
    </div>
  );
}

export default App;
