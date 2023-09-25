import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "inc") {
    state = state + 1;
  }
  if (action.type === "dec") {
    state = state - 1;
  }
  return state;
};
const reducerName = (state, action) => {
  if (action.type === "fullname") {
    state = "Abhishek";
  }
  return state;
  //   return (state = "Abhishek");
};
const UseReducer = () => {
  const [satate, dispatch] = useReducer(reducer, 0);
  const [name, dispatchName] = useReducer(reducerName, "abhi");

  useEffect(() => {
    dispatchName({ type: "fullname" });
    // dispatchName();
  }, []);

  return (
    <div>
      <h1>useReducer</h1>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <p>{satate}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <h1>{name}</h1>
    </div>
  );
};

export default UseReducer;
