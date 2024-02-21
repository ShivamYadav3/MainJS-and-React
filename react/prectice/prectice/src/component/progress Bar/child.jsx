// import React, { useEffect, useState } from "react";

// const Child = ({ value }) => {
//   const [main, setMain] = useState(0);
//   useEffect(() => {
//     setMain(Math.min(100, Math.max(value, 0)));
//   }, [value]);
//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "500px",
//       }}
//     >
//       <div style={{ width: `${main}%`, backgroundColor: "blueviolet" }}>
//         {main}
//       </div>
//     </div>
//   );
// };

// export default Child;

// gpt

// Child.js
import React from "react";
import "./Progress.css";

const Child = ({ value }) => {
  return (
    <div className="child-container">
      <div style={{ width: `${value}%` }} className="child-progress">
        {value}%
      </div>
    </div>
  );
};

export default Child;
