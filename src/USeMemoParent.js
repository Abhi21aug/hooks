import React from "react";
import { useState, useMemo } from "react";

const USeMemoParent = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    console.log("clicked the counter");
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("cliked - useMemo");
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  // const checkData = countNumber(myNum);

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {checkData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </>
  );
};

export default USeMemoParent;
