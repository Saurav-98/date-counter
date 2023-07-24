import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);

  const handleStepDecrement = () => {
    setStep((s) => s - 1);
  };
  const handleStepIncrement = () => {
    setStep((s) => s + 1);
  };
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
    </div>
  );
};

export default App;
