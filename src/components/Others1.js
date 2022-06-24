import React, { Component } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { Country, State, City }  from 'country-state-city';
// import { useState } from 'react';
// import { useEffect } from 'react';

export default class Others1 extends Component {
  constructor(props) {
    super(props);
    this.state = { name:"", phone: "",email:"",address:"",city:"",state:"",zip:"",tax:"",message:""};
    // this.state = { value:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
    this.handleChangeTax = this.handleChangeTax.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value});

  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }
  handleChangeCity(event) {
    this.setState({city: event.target.value});
  }
  handleChangeState(event) {
    this.setState({state: event.target.value});
  }
  handleChangeZip(event) {
    this.setState({zip: event.target.value});
  }
  handleChangeTax(event) {
    this.setState({tax: event.target.value});
  }

  handleSubmit=async(e)=> {
    // alert('A name was submitted: ' + this.state.name);
    // alert('A phone was submitted: ' + this.state.phone);
    // alert('A email was submitted: ' + this.state.email);
    // alert('A address was submitted: ' + this.state.address);
    // alert('A city was submitted: ' + this.state.city);
    // alert('A tax was submitted: ' + this.state.tax);
    // event.preventDefault();
    e.preventDefault();
    try{
      let res=await fetch("https://httpbin.org/post",{
        method:"POST",
        body: JSON.stringify({
          Name: this.state.name,
          Email: this.state.email,
          MobileNumber: this.state.phone,
          Address: this.state.address,
          City: this.state.city,
          State: this.state.state,
          PinCode:this.state.zip,
          Tax:this.state.tax,
        }),
      })
      let resJson=await res.json()
      console.log(resJson)
      if(res.status===200){
        this.setState({message:"Form submmited to the api succesfully"})
        console.log(this.state.message)
      }else{
        this.setState({message:"Some error occured"})
        console.log(this.state.message)
      }
    }catch(err){
      console.log(err)
    }
  }
 

  render() {
   

    return (
      <>
        <h1 className="firstheading">Start a Fundraiser:</h1>
        <div className="boxone">
          <h3 className="firstblank">Name : </h3>
          <h3 className="firstblankR">* </h3>

          <h3 className="secondblank">Contact Number </h3>
          <h3 className="secondblankR">* </h3>

          <form action="" onSubmit={this.handleSubmit} method="post">

          <input type="text" value={this.state.name} onChange={this.handleChange} className="firstblankinput" />
          <PhoneInput
            defaultCountry={"IN"}
            placeholder="Enter your mobile number"
            value={this.state.phone}
            onChange={(phone) => this.setState({ phone })}
            className="secondblankinput"
            
          />
          <input type="email" value={this.state.email} onChange={this.handleChangeEmail}className="thirdblankinput" />
          <input type="address" value={this.state.address} onChange={this.handleChangeAddress} className="fourthblankinput" />
          <input type="address" value={this.state.address} onChange={this.handleChangeAddress} className="fifthblankinput" />
          <input type="text" value={this.state.city} onChange={this.handleChangeCity} className="sixthblankinput" />
          <input type="text" value={this.state.state} onChange={this.handleChangeState} className="seventhblankinput" />
          <input type="text" value={this.state.zip} onChange={this.handleChangeZip} className="eigthblankinput" />
          <input type="text" value={this.state.tax} onChange={this.handleChangeTax} className="ninthblankinput" />
          {/* <button className="otherssave">Save & Continue</button> */}
          <div className="othersbox"></div>
          <input type="submit" className="otherssave" value="Save and Continue" />
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

          <input type="checkbox" name="checkbox1" id="checkbox" />
          <h5 className="checkboxtext">I want to receive fundraiser updates/alerts on WhatsApp.</h5>
          <input type="checkbox" name="checkbox1" id="checkbox2" />
          <h5 className="checkboxtext1">I agree with the Terms of Use, Privacy Policy, and Cookie Policy thereby the authenticity,usage, and safety of information shared with & by Simmi Foundation.</h5>

          

        </div>

        
      </>
    );
  }
}
