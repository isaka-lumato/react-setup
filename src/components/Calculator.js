import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };

  return (
    <div className="calculator">
      <button type="button" className="zero-top" name="total">
        <span>{state.total}</span>
        <span>{state.operation}</span>
        <span>{state.next}</span>
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="AC"
      >
        AC
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="+/-"
      >
        +/-
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="%"
      >
        %
      </button>
      <button
        onClick={clickHandler}
        className="orange"
        type="button"
        name="÷"
      >
        ÷
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="7"
      >
        7
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="8"
      >
        8
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="9"
      >
        9
      </button>
      <button
        onClick={clickHandler}
        className="orange"
        type="button"
        name="x"
      >
        x
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="4"
      >
        4
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="5"
      >
        5
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="6"
      >
        6
      </button>
      <button
        onClick={clickHandler}
        className="orange"
        type="button"
        name="-"
      >
        -
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="1"
      >
        1
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="2"
      >
        2
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="3"
      >
        3
      </button>
      <button
        onClick={clickHandler}
        className="orange"
        type="button"
        name="+"
      >
        +
      </button>
      <button
        onClick={clickHandler}
        className="zero-bottom"
        type="button"
        name="0"
      >
        0
      </button>
      <button
        onClick={clickHandler}
        className="dark"
        type="button"
        name="."
      >
        .
      </button>
      <button
        onClick={clickHandler}
        className="orange"
        type="button"
        name="="
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
