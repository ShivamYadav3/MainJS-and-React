// import React, { useEffect, useState } from "react";
// import Child from "./child";

// const Progress = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setValue((prev) => prev + 1);
//     }, 100);
//   }, []);

//   return (
//     <div>
//       <div>Progress Bar</div>
//       <div>
//         <Child value={value} />
//       </div>
//     </div>
//   );
// };

// export default Progress;

// gpt
// Progress.js
import React, { useEffect, useState } from "react";
import Child from "./child";
import "./Progress.css";

const Progress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 1)); // Reset to 0 when reaching 100 = setValue((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-label">Progress Bar</div>
      <div className="progress-bar">
        <Child value={value} />
      </div>
    </div>
  );
};

export default Progress;
