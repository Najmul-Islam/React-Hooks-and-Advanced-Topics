import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "peter"}</h1>
      {text && <h1> hello world</h1>}
      {!text && <h1> hello mars</h1>}
    </>
  );
};

export default ShortCircuit;
