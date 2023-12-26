import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { testCount, increment, decrement, reset } from "./testSlice";

const NewCounter = () => {
  const dispatch = useDispatch();
  const newCount = useSelector(testCount);
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

export default NewCounter;
