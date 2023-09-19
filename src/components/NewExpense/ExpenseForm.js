import React, { useState } from "react";
import "./ExpenseForm.css";

// let formEnabled = 0;
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [formEnabled, setformEnabled] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  // const clickHandler = () => {
  //   setformEnabled(1)
  // }
  // const clickCancelHandler = () => {
  //   setformEnabled(0)
  // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  // if (formEnabled === 0) {
  //   return (
  //     <button type="button" onClick={clickHandler}>Add New Expense</button>
  //   )
  // } else {
  //   return (
  //     <form onSubmit={submitHandler}>
  //       <div className="new-expense__controls">
  //         <div className="new-expense__control">
  //           <label>Title</label>
  //           <input
  //             type="text"
  //             value={enteredTitle}
  //             onChange={titleChangeHandler}
  //           />
  //         </div>
  //         <div className="new-expense__control">
  //           <label>Amount</label>
  //           <input
  //             type="number"
  //             min="0.01"
  //             step="0.01"
  //             value={enteredAmount}
  //             onChange={amountChangeHandler}
  //           />
  //         </div>
  //         <div className="new-expense__control">
  //           <label>Date</label>
  //           <input
  //             type="date"
  //             min="2019-01-01"
  //             max="2022-12-31"
  //             value={enteredDate}
  //             onChange={dateChangeHandler}
  //           />
  //         </div>
  //       </div>
  //       <div className="new-expense__actions">
  //         <button type="button" onClick={clickCancelHandler}>Cancel</button>
  //         <button type="submit">Add Expense</button>
  //       </div>
  //     </form>
  //   );
  // }
};

export default ExpenseForm;
