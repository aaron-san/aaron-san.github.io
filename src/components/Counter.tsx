import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <span className="mr-4">Count: {state.count}</span>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="btn btn-danger m-1"
        onClick={() => dispatch({ type: "decrement" })}
      >
        --
      </button>
    </>
  );
}

export default Counter;
