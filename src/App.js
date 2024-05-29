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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          value={step}
          min="1"
          max="10"
          onChange={(e) => setStep(+e.target.value)}
        />{" "}
        <span>{`Steps: ${step}`}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
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

      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
