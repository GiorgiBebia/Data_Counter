import { useState } from "react";

export function DataCounterV2() {
  const [step, setStep] = useState(1);
  const [count, setcount] = useState(0);

  function handleReset() {
    setStep(1);
    setcount(0);
  }

  function countMinus() {
    setcount((s) => s - step);
  }
  function countPlus() {
    setcount((s) => s + step);
  }

  const date = new Date("Wed Aug 21 2024 20:02:11 GMT+0400");
  date.setDate(date.getDate() + count);

  return (
    <div className="div_box">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>

        <div style={{ margin: "10px" }}>
          <button onClick={countMinus}>-</button>
          <input
            type="number"
            value={count}
            onChange={(e) => setcount(Number(e.target.value))}
          />
          <button onClick={countPlus}>+</button>
        </div>
      </div>

      <p>
        {count === 0 ? "Today is " : ""}
        {count >= 1 ? `${count} days from today is ` : ""}
        {count <= -1 ? `${Math.abs(count)} days ago was ` : ""}
        {date.toDateString()}
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
