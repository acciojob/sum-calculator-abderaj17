import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]); // Stores entered numbers
  const [sum, setSum] = useState(0); // Stores the running total sum

  // Handles input changes and parses numbers correctly
  const handleChangeInput = (e) => {
    let numValue = e.target.value; // Fix variable name for readability
    const numArr = numValue
      .split(",") // Allow comma-separated values
      .map((num) => parseFloat(num.trim())) // Convert to numbers
      .filter((num) => !isNaN(num)); 
    setNumbers(numArr);
    setSum(numArr.reduce((acc, num)=> acc + num,0));
  };


  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="text" onChange={handleChangeInput} placeholder="Enter numbers" />
      <br />
      <div className="result">Sum: {sum}</div>
    </div>
  );
};

export default SumCalculator;
