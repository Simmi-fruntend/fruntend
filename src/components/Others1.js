import React, { Component } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { Country, State, City }  from 'country-state-city';
// import { useState } from 'react';
// import { useEffect } from 'react';

export default class Others1 extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: ""};
  }
 

  render() {
   

    return (
      <>
        <h1 className="firstheading">Start a Fundraiser:</h1>
        <div className="boxone">
          <h3 className="firstblank">Name : </h3>
          <h3 className="firstblankR">* </h3>
          <input type="text" className="firstblankinput" />

          <h3 className="secondblank">Contact Number </h3>
          <h3 className="secondblankR">* </h3>
          <PhoneInput
            defaultCountry={"IN"}
            placeholder="Enter your mobile number"
            value={this.state.phone}
            onChange={(phone) => this.setState({ phone })}
            className="secondblankinput"
          />

          <h3 className="thirdblank">Email </h3>
          <input type="email" className="thirdblankinput" />
          <h5 className="example text-sm">example@example.com</h5>

          <h3 className="fourthblank">Address</h3>
          <input type="address" className="fourthblankinput" />
          <h5 className="example1 text-sm">Street Address</h5>
          <input type="address" className="fifthblankinput" />
          <h5 className="example2 text-sm">Street Address Line 2</h5>
          <input type="text" className="sixthblankinput" />
          <input type="text" className="seventhblankinput" />
          <h5 className="example3 text-sm">City</h5>
          <h5 className="example4 text-sm">State/Province</h5>
          <input type="text" className="eigthblankinput" />
          <h5 className="example5 text-sm">Postal/Zip Code</h5>
          <h3 className="fifthblank">Tax Paying Status:</h3>
          <input type="text" className="ninthblankinput" />

          <input type="checkbox" name="checkbox1" id="checkbox" />
          <h5 className="checkboxtext">I want to receive fundraiser updates/alerts on WhatsApp.</h5>
          <input type="checkbox" name="checkbox1" id="checkbox2" />
          <h5 className="checkboxtext1">I agree with the Terms of Use, Privacy Policy, and Cookie Policy thereby the authenticity,usage, and safety of information shared with & by Simmi Foundation.</h5>

          <div className="othersbox"></div>
          <button className="otherssave">Save & Continue</button>

        </div>

        
      </>
    );
  }
}
