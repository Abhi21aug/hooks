import React from "react";
import useCount from "./useCount";
import CustomHooks3 from "./CustomHooks3";

const CustomHooks1 = () => {
  const { count, increment, decrement, reset } = useCount(10);

  return (
    <>
      <div>
        <h1>Custom Hook : 1</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <CustomHooks3 />
      </div>
    </>
  );
};

export default CustomHooks1;
