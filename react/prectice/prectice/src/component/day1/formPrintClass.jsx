import { Component } from "react";
import styled from "styled-components";

class FormInput extends Component {
  state = {
    name: "",
    city: "",
    state: "",
    mobile: "",
    expert: "",
  };
  PrintData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, city, state, mobile, expert } = this.state;
    return (
      <>
        <label htmlFor="">first name :</label>
        <input type="text" name="name" onChange={this.PrintData} />
        <label htmlFor="">city</label>
        <input type="text" name="city" onChange={this.PrintData} />
        <label htmlFor="">state</label>
        <input type="text" name="state" onChange={this.PrintData} />
        <label htmlFor="">mobile</label>
        <input type="number" name="mobile" onChange={this.PrintData} />
        <label htmlFor="">expert</label>
        <select id="" name="expert" onChange={this.PrintData}>
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
  }
}
export default FormInput;
