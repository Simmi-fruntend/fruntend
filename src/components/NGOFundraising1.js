import React, { Component } from "react";
import NGOFundraisingInitiate from "./NGOFundraising2";

export default class NGOFundraisingProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      aim: "",
      ending_date: "",
      step: 1,
      checkbox: false,
    };
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    console.log(this.state.step);
  };

  //previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    console.log(this.state.step);
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { title, step, aim, ending_date,checkbox } = this.state;
    const values = { title, aim, ending_date,checkbox };
    switch (step) {
      case 1:
        return <>Program</>;
      case 2:
        return (
          <>
            <NGOFundraisingInitiate
              nextStep={this.nextStep}
              handleInputChange={this.handleInputChange}
              values={values}
              prevStep={this.prevStep}
            />
          </>
        );
      default:
        return <div></div>;
    }
  }
}
