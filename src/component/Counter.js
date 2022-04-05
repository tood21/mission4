import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const upCount = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const downCount = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const toggleCounter = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div className='counter'>
      <h1 data-testid='counter'>{counter}</h1>
      <div className='conut_button'>
        <button disabled={!disabled} onClick={downCount} className='minus'>
          -
        </button>
        <button disabled={!disabled} onClick={upCount} className='plus'>
          +
        </button>
      </div>
      <button
        className='toggle'
        onClick={toggleCounter}
        style={{ backgroundColor: "blue" }}
      >
        on/off
      </button>
    </div>
  );
}

export default Counter;
