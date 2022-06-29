import React, { Component } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { Country, State, City }  from 'country-state-city';
// import { useState } from 'react';
// import { useEffect } from 'react';

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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // this.handleChangeAddress = this.handleChangeAddress.bind(this);
    // this.handleChangeCity = this.handleChangeCity.bind(this);
    // this.handleChangeState = this.handleChangeState.bind(this);
    // this.handleChangeZip = this.handleChangeZip.bind(this);
    // this.handleChangeTax = this.handleChangeTax.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };



  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          Name: this.state.name,
          Email: this.state.email,
          MobileNumber: this.state.phone,
          Address: this.state.address,
          AdresssS: this.state.addressS,
          CheckBox1:this.state.checkbox1,
          CheckBox2:this.state.checkbox2,
          City: this.state.city,
          State: this.state.state,
          PinCode: this.state.zip,
          Tax: this.state.tax,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        this.setState({ message: "Form submmited to the api succesfully" });
        console.log(this.state.message);
      } else {
        this.setState({ message: "Some error occured" });
        console.log(this.state.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <h1 className="firstheading">Start a Fundraiser:</h1>
        <div className="boxone">
          <h3 className="firstblank">Name : </h3>
          <h3 className="firstblankR">* </h3>
          <h3 className="secondblank">Contact Number </h3>
          <h3 className="secondblankR">* </h3>

      {/* Form refactored */}
          <form action="" onSubmit={this.handleSubmit} method="post">
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="firstblankinput"
            />
            <PhoneInput
              defaultCountry={"IN"}
              placeholder="Enter your mobile number"
              name="phone"
              id="phone"
              value={this.state.phone}
              onChange={(phone) => this.setState({ phone })}
              className="secondblankinput"
            />
            <input
              type="email"
              name="email"
              id="email"
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
            <button
              type="submit"
              className="otherssave"
              value="Save and Continue"
            >Save and Continue</button>
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
          </form>
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
  }
}
