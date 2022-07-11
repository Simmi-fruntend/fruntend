import React, { Component } from "react";
import "react-phone-number-input/style.css";
import { Form, Input, FormFeedback } from "reactstrap";
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
        address: false,
        addressS: false,
        city: false,
        state: false,
        zip: false,
        tax: false,
      },
      step: 1,
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

  validate(name, phone, email, address, addressS, city, state, zip, tax) {
    const errors = {
      name: "",
      phone: "",
      email: "",
      address: "",
      addressS: "",
      city: "",
      state: "",
      zip: "",
      tax: "",
    };
    if (this.state.touched.address && !address) {
      errors.address = " Required";
    }
    if (this.state.touched.addressS && !addressS) {
      errors.addressS = " Required";
    }
    if (this.state.touched.city && !city) {
      errors.city = " Required";
    }
    if (this.state.touched.state && !state) {
      errors.state = " Required";
    }
    if (this.state.touched.zip && !zip) {
      errors.zip = " Required";
    }
    if (this.state.touched.tax && !tax) {
      errors.tax = " Required";
    }
    if (this.state.touched.name && name.length < 3)
      errors.name = " Name should be >= 3 characters";
    else if (this.state.touched.name && name.length > 20)
      errors.name = " Name should be <= 20 characters";
    const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (this.state.touched.phone && !reg.test(phone))
      errors.phone = "Tel. Number should contain only numbers (10)";
    // eslint-disable-next-line
    const reg1 =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (this.state.touched.email && !reg1.test(email))
      errors.email = "Email should be like- example@email.com";
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
  handleSubmit = (e) => {
    e.preventDefault();
    this.nextStep();
    this.changeColor1();
  };

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.phone,
      this.state.email,
      this.state.address,
      this.state.addressS,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.tax
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
      step,
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
      step,
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
                  placeholder="Enter your Name"
                  required
                />
                <FormFeedback className="errorName">{errors.name}</FormFeedback>
                <Input
                  // defaultCountry={"IN"}
                  placeholder="Enter your mobile number"
                  name="phone"
                  id="phone"
                  valid={errors.phone === ""}
                  invalid={errors.phone !== ""}
                  onBlur={this.handleBlur("phone")}
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  className="secondblankinput"
                  required
                />
                <FormFeedback className="errorPhone">
                  {errors.phone}
                </FormFeedback>
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
                  placeholder="Enter your Email"
                  required
                />
                <FormFeedback className="errorEmail">
                  {errors.email}
                </FormFeedback>
                <Input
                  type="address"
                  name="address"
                  id="address"
                  value={this.state.address}
                  valid={errors.address === ""}
                  invalid={errors.address !== ""}
                  onBlur={this.handleBlur("address")}
                  onChange={this.handleInputChange}
                  className="fourthblankinput"
                  placeholder="Enter your Address"
                />
                <FormFeedback className="erroraddress">
                  {errors.address}
                </FormFeedback>
                <Input
                  type="address"
                  name="addressS"
                  id="adressS"
                  value={this.state.addressS}
                  valid={errors.addressS === ""}
                  invalid={errors.addressS !== ""}
                  onBlur={this.handleBlur("addressS")}
                  onChange={this.handleInputChange}
                  className="fifthblankinput"
                  placeholder="Enter your Street Address"
                />
                <FormFeedback className="erroraddressS">
                  {errors.addressS}
                </FormFeedback>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.city}
                  valid={errors.city === ""}
                  invalid={errors.city !== ""}
                  onBlur={this.handleBlur("city")}
                  onChange={this.handleInputChange}
                  className="sixthblankinput"
                  placeholder="City"
                />
                <FormFeedback className="errorcity">
                  {errors.city}
                </FormFeedback>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  valid={errors.state === ""}
                  invalid={errors.state !== ""}
                  onBlur={this.handleBlur("state")}
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  className="seventhblankinput"
                  placeholder="State"
                />
                <FormFeedback className="errorstate">
                  {errors.state}
                </FormFeedback>
                <Input
                  type="text"
                  name="zip"
                  id="zip"
                  value={this.state.zip}
                  valid={errors.zip === ""}
                  invalid={errors.zip !== ""}
                  onBlur={this.handleBlur("zip")}
                  onChange={this.handleInputChange}
                  className="eigthblankinput"
                  placeholder="Zip Code"
                />
                <FormFeedback className="errorzip">
                  {errors.zip}
                </FormFeedback>
                <Input
                  type="text"
                  name="tax"
                  id="tax"
                  value={this.state.tax}
                  valid={errors.tax === ""}
                  invalid={errors.tax !== ""}
                  onBlur={this.handleBlur("tax")}
                  onChange={this.handleInputChange}
                  className="ninthblankinput"
                  placeholder="Tax Status"
                />
                <FormFeedback className="errortax">
                  {errors.tax}
                </FormFeedback>
                <div className="othersbox"></div>
                {/* <Link to='/others-beneficiary'> */}
                <button className="otherssave" type="submit">
                  Save and Continue
                </button>
                <Input
                  type="checkbox"
                  checked={this.state.checkbox1}
                  onChange={this.handleInputChange}
                  name="checkbox1"
                  id="checkbox"
                />
                <Input
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
              handleBlur={this.handleBlur}
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
