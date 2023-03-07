import React, { useState } from "react";

const initialValue = 0;

function Card() {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((c) => c + 1);
    // console.log("Button clicked", { count });
  }

  return (
    <div className="d-flex flex-row p-2 m-3">
      <button
        className="border border-xl border-white-200 rounded-xl p-1 m-3 bg-green-200 text-black"
        onClick={handleClick}
      >
        Increment
      </button>

      <span className="px-3 py-1 mx-1 bg-red-200 text-black rounded-md border border-xl border-white-200">
        {count}
      </span>
    </div>
  );
}

export default Card;
