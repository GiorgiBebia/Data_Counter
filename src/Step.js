import { useState } from "react";

export function Step() {
  const [step, setStep] = useState(0);
  const [count, setcount] = useState(0);

  function stepMinus() {
    setStep((s) => s - 1);
  }
  function stepPlus() {
    setStep((s) => s + 1);
  }

  function countMinus() {
    setcount((s) => s - step);
  }
  function countPlus() {
    setcount((s) => s + step);
  }

  const date = new Date("Tue Jul 6 1999 01:00:00 GMT+0400");
  date.setDate(date.getDate() + count);

  return (
    <div className="div_box">
      <div>
        <button onClick={stepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={stepPlus}>+</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={countMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={countPlus}>+</button>
      </div>
      <p>
        {count === 0 ? "Today is " : ""}
        {count >= 1 ? `${count} days from today is ` : ""}
        {count <= -1 ? `${Math.abs(count)} days ago was ` : ""}
        {date.toDateString()}
      </p>
    </div>
  );
}
