import React, { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

const UseCallBackParent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log("parent rendered");

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  //   const addTodo = () => {
  //     setTodos((prev) => [...prev, `new Entry`]);
  //   };

  return (
    <>
      <UseCallBackChild todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallBackParent;
