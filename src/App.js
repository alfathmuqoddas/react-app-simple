import './App.css';
import {useState, useEffect} from 'React';

function App() {
  let [count, setCount] = useState(0);
  const increment = () => {
	counter = count + 1
	setCount(counter) 
  }
  
  const decrement = () => {
	counter = count - 1
	setCount(counter) 
  }
  
  const reset = () => {
	setCount(0) 
  }
  
  return (
    <div className="App">
		<h1>If you see this your code works like a charm</h1>
		<h2>Begin editing</h2>
	  <h1>{count}</h1>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App
