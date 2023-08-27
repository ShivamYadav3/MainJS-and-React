import { useState } from "react";

// PrintData=()=>{}
const FormPrintFc = () => {
  const [name, setName] = useState("");
  const [expert, setExpert] = useState("");
  return (
    <>
      <label htmlFor="">first name :</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">expert</label>
      <select id="" name="expert" onChange={(e) => setExpert(e.target.value)}>
        <option value=""></option>
        <option value="bmw">bmw</option>
        <option value="okk">okk</option>
        <option value="hjxh">hjxh</option>
      </select>
      <br />
      <br />
      <br />
      <div>
        <p>{name}</p>
        <p>{expert}</p>
      </div>
    </>
  );
};
export default FormPrintFc;
