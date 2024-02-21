import React, { useMemo, useState } from "react";

const Armstrong = () => {
  const [input, setInput] = useState(0);
  const value = useMemo(() => {
    let num = input;
    const length = (num + "").length;
    let result = 0;
    while (num != 0) {
      result += Math.pow(num % 10, length);
      num = Math.floor(num / 10);
    }
    return result;
  }, [input]);
  console.log(input);
  return (
    <div>
      <input
        type="number"
        style={{ border: "1px solid black", outline: "none" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Armstrong Value {value}</div>
    </div>
  );
};

export default Armstrong;
