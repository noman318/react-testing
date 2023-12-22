import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, testCount, reset } from "../features/testSlice";
const Counter = ({ initial }) => {
  //   console.log("initial", initial);
  const [count, setCount] = useState(initial);
  const dispatch = useDispatch();
  const newCount = useSelector(testCount);
  // console.log("newCount", newCount);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  // increment
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
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        {/* <h4 data-testid="count" style={{ color: count < 0 ? "red" : "aqua" }}>
          {count}
        </h4> */}
        <h4
          data-testid="count"
          style={{ color: newCount < 0 ? "red" : "aqua" }}
        >
          {newCount}
        </h4>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <br />
      </div>
      <br />

      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
