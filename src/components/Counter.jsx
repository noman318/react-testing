import React, { useState } from "react";

const Counter = ({ initial }) => {
  //   console.log("initial", initial);
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  //   console.log("count", count);
  return (
    <div>
      <h3>Counter</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <h4 data-testid="count" style={{ color: count < 0 ? "red" : "aqua" }}>
          {count}
        </h4>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
        <br />
      </div>
      <br />

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
