import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm"
import AddNewExpense from "./AddNewExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClick, setIsClick] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const clickHandler = (clicked) => {
    setIsClick(clicked)
  };


  let expenseFormContent = <AddNewExpense onAddNewExpenseButtonClick={clickHandler} />

  if (isClick) {
    expenseFormContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickCancelButton={clickHandler} />
  };

  
  return <div className="new-expense">
    {expenseFormContent}
  </div>
};

export default NewExpense