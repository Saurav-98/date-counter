import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  const handleStepDecrement = () => {
    setStep((s) => s - 1);
  };
  const handleStepIncrement = () => {
    setStep((s) => s + 1);
  };
  const handleCountDecrement = () => {
    setCount((c) => c - step * 1);
  };
  const handleCountIncrement = () => {
    setCount((c) => c + step * 1);
  };

  const currentDate = new Date();
  const resultDate = currentDate.setDate(currentDate.getDate() + count);

  console.log(new Date(resultDate).toDateString(0));

  return (
    <div>
      <div className="counter">
        <button className="btn" onClick={handleStepDecrement}>
          -
        </button>
        <span>Step : {step} </span>
        <button className="btn" onClick={handleStepIncrement}>
          +
        </button>
      </div>

      <div className="counter">
        <button className="btn" onClick={handleCountDecrement}>
          -
        </button>
        <span>Count : {count} </span>
        <button className="btn" onClick={handleCountIncrement}>
          +
        </button>
      </div>

      <div className="counter date">
        <h2>
          {count}{" "}
          <span className="date-text">
            {count === 0 && "today is"}
            {count > 1 && "days from today is"}
            {count < 0 && " days ago was"}
          </span>{" "}
          {new Date(resultDate).toDateString()}{" "}
        </h2>
      </div>
    </div>
  );
};

export default App;
