import React, { useRef, useState } from "react";

const Otp = () => {
  const [arr, setArr] = useState(Array(6).fill(""));
  const input = Array.from({ length: 6 }, () => useRef(null));

  const switchField = (i, e) => {
    const newArr = [...arr];
    newArr[i] = e.target.value;
    setArr(newArr);
    if (e.target.value && i < input.length - 1) {
      input[i + 1].current.focus();
    } else if (!e.target.value && i > 0) {
      input[i - 1].current.focus();
    }
  };
  return (
    <div>
      <div>
        otp
        {arr.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      {input.map((item, i) => {
        return (
          <input
            type="text"
            key={i}
            maxLength={1}
            onChange={(e) => switchField(i, e)}
            autoFocus={i === 0}
            ref={item}
            value={arr[i]}
          />
        );
      })}
    </div>
  );
};

export default Otp;
