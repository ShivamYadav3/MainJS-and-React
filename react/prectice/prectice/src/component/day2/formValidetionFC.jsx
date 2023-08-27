import { useState } from "react";

const FormValidationFc = () => {
  const [Profile, setProfile] = useState({
    name: "",
    city: "",
    state: "",
    email: "",
    password: "",
    nameErr: false,
    cityErr: false,
    stateErr: false,
    emailErr: false,
    passwordErr: false,
  });
  const {
    name,
    city,
    state,
    email,
    password,
    nameErr,
    cityErr,
    stateErr,
    emailErr,
    passwordErr,
  } = Profile;
  const CheckErr = (e) => {
    const { name, value } = e.target;
    setProfile((okk) => {
      return {
        ...okk,
        [name]: value,
      };
    });
  };
  const PrintErr = () => {
    const obj = {
      nameErr: false,
      cityErr: false,
      stateErr: false,
      emailErr: false,
      passwordErr: false,
    };

    if (name === "") {
      obj.nameErr = true;
    }
    if (city === "") {
      obj.cityErr = true;
    }
    if (state === "") {
      obj.stateErr = true;
    }
    if (email === "") {
      obj.emailErr = true;
    }
    if (password === "") {
      obj.passwordErr = true;
    }
    setProfile((okk) => {
      return {
        ...okk,
        ...obj,
      };
    });
  };
  return (
    <>
      <input type="text" name="name" placeholder="name" onChange={CheckErr} />
      {nameErr && <div>Enter name</div>}
      <input type="text" name="city" placeholder="city" onChange={CheckErr} />
      {cityErr && <div>Enter city</div>}
      <input type="text" name="state" placeholder="state" onChange={CheckErr} />
      {stateErr && <div>Enter state</div>}
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={CheckErr}
      />
      {emailErr && <div>Enter email</div>}
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={CheckErr}
      />
      {passwordErr && <div>Enter password</div>}
      <button onClick={PrintErr}>submit</button>
    </>
  );
};
export default FormValidationFc;
