import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    const obj = calculate(this.state, event.target.name);
    this.setState(obj);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <button type="button" className="zero-top" name="total">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="AC"
        >
          AC
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="+/-"
        >
          +/-
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="%"
        >
          %
        </button>
        <button
          onClick={this.clickHandler}
          className="orange"
          type="button"
          name="÷"
        >
          ÷
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="7"
        >
          7
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="8"
        >
          8
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="9"
        >
          9
        </button>
        <button
          onClick={this.clickHandler}
          className="orange"
          type="button"
          name="x"
        >
          x
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="4"
        >
          4
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="5"
        >
          5
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="6"
        >
          6
        </button>
        <button
          onClick={this.clickHandler}
          className="orange"
          type="button"
          name="-"
        >
          -
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="1"
        >
          1
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="2"
        >
          2
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="3"
        >
          3
        </button>
        <button
          onClick={this.clickHandler}
          className="orange"
          type="button"
          name="+"
        >
          +
        </button>
        <button
          onClick={this.clickHandler}
          className="zero-bottom"
          type="button"
          name="0"
        >
          0
        </button>
        <button
          onClick={this.clickHandler}
          className="dark"
          type="button"
          name="."
        >
          .
        </button>
        <button
          onClick={this.clickHandler}
          className="orange"
          type="button"
          name="="
        >
          =
        </button>
      </div>
    );
  }
}
