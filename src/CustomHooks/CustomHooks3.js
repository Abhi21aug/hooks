import React from "react";
import useCount from "./useCount";

const CustomHooks3 = () => {
  const { count, increment, decrement, reset } = useCount(-10);

  return (
    <div>
      <h1>Custom Hook : 2</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHooks3;
