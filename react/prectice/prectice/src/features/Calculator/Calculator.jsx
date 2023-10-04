import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./Calculator.slice";

const Calculator = () => {
  const dispatch = useDispatch();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const additionState = useSelector((state) => state.calculator);

  const onAddNumRequest = () => {
    if (!num1 || !num2) {
      return;
    }
    dispatch(add({ num1, num2 }));
  };
  return (
    <div>
      <div>Calculator</div>
      <div>
        <p>
          Sum: {additionState.isLoading ? "Please wait" : additionState.value}
        </p>
      </div>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" onChange={(e) => setNum2(e.target.value)} />
      <button onClick={onAddNumRequest}>add</button>
    </div>
  );
};

export default Calculator;
