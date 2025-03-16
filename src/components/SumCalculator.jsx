import React, { useEffect, useState } from 'react'

const SumCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  const handleChangeInput = (e)=>{
    setInputValue(e.target.value);
  };

  useEffect(()=>{
    const numArr = inputValue
    .split(",")
    .map((num)=> num.trim())
    .filter((num)=> num !== "" && !isNaN(num))
    .map((num)=> parseFloat(num));

    const newSum = numArr.reduce((acc, num)=> acc + num, 0);
    setSum(newSum);
  }, [inputValue]);

  return (
    <div style={{textAlign: "center", marginTop:"20px"}}>
      <h1>Sum Calculator</h1>
      <input 
      type='text'
      value={inputValue}
      onChange={handleChangeInput}
      placeholder='Enter numbers'
      />
      <br/>
      <h2>Sum: {sum}</h2>
    </div>
  )
}

export default SumCalculator