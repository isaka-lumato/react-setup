import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <button className="zero-top" type="button">
          0
        </button>
        <button className="dark" type="button">
          AC
        </button>
        <button className="dark" type="button">
          +/-
        </button>
        <button className="dark" type="button">
          %
        </button>
        <button className="orange" type="button">
          ÷
        </button>
        <button className="dark" type="button">
          7
        </button>
        <button className="dark" type="button">
          8
        </button>
        <button className="dark" type="button">
          9
        </button>
        <button className="orange" type="button">
          X
        </button>
        <button className="dark" type="button">
          4
        </button>
        <button className="dark" type="button">
          5
        </button>
        <button className="dark" type="button">
          6
        </button>
        <button className="orange" type="button">
          -
        </button>
        <button className="dark" type="button">
          1
        </button>
        <button className="dark" type="button">
          2
        </button>
        <button className="dark" type="button">
          3
        </button>
        <button className="orange" type="button">
          +
        </button>
        <button className="zero-bottom" type="button">
          0
        </button>
        <button className="dark" type="button">
          .
        </button>
        <button className="orange" type="button">
          =
        </button>
      </div>
    );
  }
}
