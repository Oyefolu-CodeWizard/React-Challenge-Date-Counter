import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>{`Steps: ${step}`}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>{`Count: ${count}`}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0 && "Today is " + date.toDateString()}
          {count === 1 && count + " day from today is " + date.toDateString()}
          {count > 1 && count + " days from today is " + date.toDateString()}
          {count < -1 &&
            Math.abs(count) + " days ago was " + date.toDateString()}
          {count === -1 &&
            Math.abs(count) + " day ago was " + date.toDateString()}
        </span>
      </p>
    </div>
  );
}

export default App;
