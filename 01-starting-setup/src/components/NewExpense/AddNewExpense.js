import React from "react";

const AddNewExpense = (props) => {
  const addButtonHandler = (event) => {
    props.onAddNewExpenseButtonClick(true)
  }

  return <button onClick={addButtonHandler} >Add New Expense</button>
}

export default AddNewExpense