import React, { Component } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Form, Input } from "reactstrap";
import Others2 from "./Others2";
import Others3 from "./Others3";
// import { Link } from "react-router-dom";

export default class Others1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      address: "",
      addressS: "",
      city: "",
      state: "",
      zip: "",
      tax: "",
      message: "",
      checkbox1: false,
      checkbox2: false,
      touched: {
        name: false,
        phone: false,
        email: false,
      },
      step: 1,
      raisingFundsFor: "",
      beneficiaryName: "",
      beneficiaryPhone: "",
      beneficiaryAge: "",
      beneficiarySex: "",
      beneficiaryAddress: "",
      beneficiaryAddressS: "",
      beneficiaryCity: "",
      beneficiaryState: "",
      beneficiaryZip: "",
      titleCompaign: "",
      beneficiaryStory: "",
      targetedValue:"",
      fundEndDate:"",

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  //next step
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

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(name, phone, email) {
    const errors = {
      name: "",
      phone: "",
      email: "",
    };

    if (this.state.touched.name && name.length < 3)
      errors.name = " Name should be >= 3 characters";
    else if (this.state.touched.name && name.length > 20)
      errors.name = " Name should be <= 20 characters";

    const reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (this.state.touched.phone && !reg.test(phone))
    errors.phone = "Tel. Number should contain only numbers (10)";
    
    const reg1 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    if (
      this.state.touched.email &&
      !reg1.test(email)
    )
      errors.email = "Email should contain a @";

    return errors;
  }
  changeColor1() {
    document.getElementById("2").style.color = "#FF5F24";
    document.getElementById("1").style.color = "white";
    document.getElementById("3").style.color = "white";

    document.getElementById("4").style.border = "";
    document.getElementById("6").style.border = "";
    document.getElementById("5").style.border = "2px solid #FF5F24";
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    this.nextStep()
    this.changeColor1()
  }

  render() {
  
   

    const errors = this.validate(
      this.state.name,
      this.state.phone,
      this.state.email
    );
    const {
      name,
      phone,
      email,
      address,
      addressS,
      city,
      state,
      zip,
      tax,
      message,
      checkbox1,
      checkbox2,
      touched,
      step,
      raisingFundsFor,
      beneficiaryName,
      beneficiaryPhone,
      beneficiaryAge,
      beneficiarySex,
      beneficiaryAddress,
      beneficiaryAddressS,
      beneficiaryCity,
      beneficiaryState,
      beneficiaryZip,
      titleCompaign,
      beneficiaryStory, 
      targetedValue,
      fundEndDate,

    } = this.state;
    const values = {
      name,
      phone,
      email,
      address,
      addressS,
      city,
      state,
      zip,
      tax,
      message,
      checkbox1,
      checkbox2,
      touched,
      step,
      raisingFundsFor,
      beneficiaryName,
      beneficiaryPhone,
      beneficiaryAge,
      beneficiarySex,
      beneficiaryAddress,
      beneficiaryAddressS,
      beneficiaryCity,
      beneficiaryState,
      beneficiaryZip,
      titleCompaign,
      beneficiaryStory,
      targetedValue,
      fundEndDate,
    };
    switch (step) {
      case 1:
        return (
          <>
            <h1 className="firstheading">Start a Fundraiser:</h1>
            <div className="boxone">
              <h3 className="firstblank">Name : </h3>
              <h3 className="firstblankR">* </h3>
              <h3 className="secondblank">Contact Number </h3>
              <h3 className="secondblankR">* </h3>

              {/* Form refactored */}
              <Form action="" onSubmit={this.handleSubmit} method="post">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("name")}
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="firstblankinput"
                />
                {/* <FormFeedback>{errors.name}</FormFeedback> */}
                <PhoneInput
                  defaultCountry={"IN"}
                  placeholder="Enter your mobile number"
                  name="phone"
                  id="phone"
                  valid={errors.phone === ""}
                  invalid={errors.phone !== ""}
                  onBlur={this.handleBlur("phone")}
                  value={this.state.phone}
                  onChange={(phone) => this.setState({ phone })}
                  className="secondblankinput"
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={this.handleBlur("email")}
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="thirdblankinput"
                />
                <input
                  type="address"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  className="fourthblankinput"
                />
                <input
                  type="address"
                  name="addressS"
                  id="adressS"
                  value={this.state.addressS}
                  onChange={this.handleInputChange}
                  className="fifthblankinput"
                />
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  className="sixthblankinput"
                />
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  className="seventhblankinput"
                />
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                  className="eigthblankinput"
                />
                <input
                  type="text"
                  name="tax"
                  id="tax"
                  value={this.state.tax}
                  onChange={this.handleInputChange}
                  className="ninthblankinput"
                />
                <div className="othersbox"></div>
                {/* <Link to='/others-beneficiary'> */}
                <button
                  
                  className="otherssave"
                  type="submit"
                >
                  Save and Continue
                </button>
                <input
                  type="checkbox"
                  checked={this.state.checkbox1}
                  onChange={this.handleInputChange}
                  name="checkbox1"
                  id="checkbox"
                />
                <input
                  type="checkbox"
                  checked={this.state.checkbox2}
                  onChange={this.handleInputChange}
                  name="checkbox2"
                  id="checkbox2"
                />
              </Form>

              <h3 className="thirdblank">Email </h3>
              <h5 className="example text-sm">example@example.com</h5>
              <h3 className="fourthblank">Address</h3>
              <h3 className="fifthblank">Tax Paying Status:</h3>
              <h5 className="example1 text-sm">Street Address</h5>
              <h5 className="example2 text-sm">Street Address Line 2</h5>
              <h5 className="example3 text-sm">City</h5>
              <h5 className="example4 text-sm">State/Province</h5>
              <h5 className="example5 text-sm">Postal/Zip Code</h5>
              <h5 className="checkboxtext">
                I want to receive fundraiser updates/alerts on WhatsApp.
              </h5>
              <h5 className="checkboxtext1">
                I agree with the Terms of Use, Privacy Policy, and Cookie Policy
                thereby the authenticity,usage, and safety of information shared
                with & by Simmi Foundation.
              </h5>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <Others2
              nextStep={this.nextStep}
              handleInputChange={this.handleInputChange}
              values={values}
              prevStep={this.prevStep}

            />
          </>
        );

      case 3:
        return (
          <>
            <Others3 />
          </>
        );

      default:
        return <div></div>;
    }
  }
}
