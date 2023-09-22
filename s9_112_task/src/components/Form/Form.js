import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  // other's method:
  // const initialUserInput = {
  //   "current-savings": 10000,
  //   "yearly-contribution": 1200,
  //   "expected-return": 7,
  //   duration: 10,
  // }
  // reset using initialUserInput
  // const [userInput, setUserInput] = useState({
  //   "current-savings": 10000,
  //   "yearly-contribution": 1200,
  //   "expected-return": 7,
  //   duration: 10,
  // })
  // const inputChangeHandler = (input, value) => {
  //   setUserInput((prevInput) => {
  //     return {
  //       ...prevInput,
  //       [input]
  //     }
  //   })
  // }
  // resetHandler = () => {
  // setUserInput(initialUserInput)
  // }

  const data = {
    "current-savings": currentSavings,
    "yearly-contribution": yearlyContribution,
    "expected-return": expectedReturn,
    duration: duration,
  };

  const changeHandler = (event) => {
    if (event.target.id === "yearly-contribution") {
      setYearlyContribution(event.target.value);
    } else if (event.target.id === "current-savings") {
      setCurrentSavings(event.target.value);
    } else if (event.target.id === "expected-return") {
      setExpectedReturn(event.target.value);
    } else if (event.target.id === "duration") {
      setDuration(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(data);

    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };
  const resetHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={changeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={changeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={changeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={changeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
