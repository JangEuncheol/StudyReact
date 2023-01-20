// import React, { useState } from "react";

// import "./ExpensesFilter.css";

// const ExpensesFilter = (props) => {
//   const [selectedYear, setSelectedYear] = useState("2021");
  
//   const selectYearHandler = (event) => {
//     setSelectedYear(event.target.value)
//     props.onSelectedYear(selectedYear)
//   };
  
//   return (
//     <div className="expenses-filter">
//       <div className="expenses-filter__control">
//         <label>Filter by year</label>
//         <select onChange={selectYearHandler}>
//           <option>2020</option>
//           <option>2021</option>
//           <option>2022</option>
//           <option>2023</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ExpensesFilter;

import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;