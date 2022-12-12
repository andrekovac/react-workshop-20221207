import { useState } from "react";

interface HideableProps {
  children: React.ReactNode;
}

export const Hideable = ({ children }: HideableProps) => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ border: "1px solid black", padding: 5 }}>
      <div>{show && children}</div>
      <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
    </div>
  );
};
