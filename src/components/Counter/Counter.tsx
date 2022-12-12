import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log({ count });
  };

  // console.log("render");

  return (
    <div
      style={{
        border: "3px solid blue",
        borderRadius: 5,
        padding: 5,
      }}
    >
      <p>Counter</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
};
