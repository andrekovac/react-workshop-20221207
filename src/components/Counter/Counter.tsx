let count = 0;

export const Counter = () => {
  const increment = () => {
    count = count + 1;
    console.log({ count });
  };

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
