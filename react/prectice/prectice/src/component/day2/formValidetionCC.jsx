import { Component } from "react";

class FormValidation extends Component {
  state = {
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
  };
  CheckErr = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  PrintErr = () => {
    const { name, city, state, email, password } = this.state;
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
    this.setState({ ...obj });
  };
  render() {
    const { nameErr, cityErr, stateErr, emailErr, passwordErr } = this.state;
    return (
      <>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.CheckErr}
        />
        {nameErr && <div>Enter name</div>}
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={this.CheckErr}
        />
        {cityErr && <div>Enter city</div>}
        <input
          type="text"
          name="state"
          placeholder="state"
          onChange={this.CheckErr}
        />
        {stateErr && <div>Enter state</div>}
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.CheckErr}
        />
        {emailErr && <div>Enter email</div>}
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.CheckErr}
        />
        {passwordErr && <div>Enter password</div>}
        <button onClick={this.PrintErr}>submit</button>
      </>
    );
  }
}
export default FormValidation;
