import React, { useState } from "react";

export function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }

    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by zero");
        break;
      default:
        setResult("Invalid operator");
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Basic Calculator</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter operator (+, -, *, /)"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={calculateResult} style={{ marginRight: "10px" }}>
        Calculate
      </button>
      <button onClick={handleReset}>Reset</button>
      {result !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
}
