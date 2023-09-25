import { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [data, setData] = useState("");
  const count = useRef("abhis");
  const guru = useRef();

  useEffect(() => {
    count.current.focus();
  }, []);
  const btnHandler = (e) => {
    count.current.style.backgroundColor = "red";
    guru.current.style.backgroundColor = "green";
    //   console.log(count);
  };
  return (
    <div className="App">
      <h1>Hello UseRef</h1>
      <input
        value={data}
        ref={count}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={btnHandler}>Submit data</button>
      <h4 ref={guru}>data:-{data}</h4>
    </div>
  );
}
