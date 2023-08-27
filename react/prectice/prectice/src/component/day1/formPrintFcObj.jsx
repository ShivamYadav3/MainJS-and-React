import { useState } from "react";

const FormPrintObj = () => {
  const [Profile, setProfile] = useState({
    name: "",
    city: "",
    state: "",
    mobile: "",
    expert: "",
  });
  const { name, city, state, mobile, expert } = Profile;
  const PrintData = (e) => {
    const { name, value } = e.target;
    setProfile((okk) => {
      return {
        ...okk,
        [name]: value,
      };
    });
  };
  return (
    <>
      <label htmlFor="">first name :</label>
      <input type="text" name="name" onChange={PrintData} />
      <label htmlFor="">city</label>
      <input type="text" name="city" onChange={PrintData} />
      <label htmlFor="">state</label>
      <input type="text" name="state" onChange={PrintData} />
      <label htmlFor="">mobile</label>
      <input type="number" name="mobile" onChange={PrintData} />
      <label htmlFor="">expert</label>
      <select id="" name="expert" onChange={PrintData}>
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
        <p>{city}</p>
        <p>{state}</p>
        <p>{mobile}</p>
        <p>{expert}</p>
      </div>
    </>
  );
};
export default FormPrintObj;
