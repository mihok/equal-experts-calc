import React, { useState, useRef } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [action, setAction] = useState("");

  const performAction = () => {
    setValue(eval(value));
  };

  return (
    <div>
      <div className="output">{value}</div>
      <div>
        <button onClick={() => setValue(value + 7)} className="seven">
          7
        </button>
        <button onClick={() => setValue(value + 8)} className="eight">
          8
        </button>
        <button onClick={() => setValue(value + 9)} className="nine">
          9
        </button>

        <button onClick={() => setValue(value + 4)} className="four">
          4
        </button>
        <button onClick={() => setValue(value + 5)} className="five">
          5
        </button>
        <button onClick={() => setValue(value + 6)} className="six">
          6
        </button>

        <button onClick={() => setValue(value + 1)} className="one">
          1
        </button>
        <button onClick={() => setValue(value + 2)} className="two">
          2
        </button>
        <button onClick={() => setValue(value + 3)} className="three">
          3
        </button>

        <button onClick={() => setValue(value + 0)} className="zero">
          0
        </button>
        <button onClick={() => setValue(value + ".")} className="decimal">
          .
        </button>
      </div>
      <div>
        <button onClick={() => setValue(value + "/")} className="divided-by">
          ÷
        </button>
        <button onClick={() => setValue(value + "*")} className="multiplied-by">
          ×
        </button>
        <button onClick={() => setValue(value + "-")} className="minus">
          -
        </button>
        <button onClick={() => setValue(value + "+")} className="plus">
          +
        </button>

        <button onClick={performAction} className="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
