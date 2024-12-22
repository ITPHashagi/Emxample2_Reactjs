import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  console.log("State");

  const HandlePlus = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(count);
  };
  return (
    <div>
      <h1>State</h1>
      <div className="flex">
        <p>Number: {count}</p>
        <button
          onClick={() => {
            HandlePlus();
          }}
          className="bg-slate-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
