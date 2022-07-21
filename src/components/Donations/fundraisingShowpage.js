import React, { Component } from "react";
import "./CSS/Donations.css";
import Vector from "./Pictures/Vector.png";
import Vector1 from "./Pictures/Vector1.png";
import Popup from "./Popup";

export default class fundraisingShowpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup(){
    console.log("State has been changed")
    this.setState({ isPopupOpen: !this.state.isPopupOpen });
  }



  render() {
    return (
      <>
      <div className="container" id="container">
        <h1 className="info">Thousands are crowdfunding for various causes.</h1>
        <h1 className="infoY">Support a fundraiser!</h1>
        <input
          type="text"
          name="searchDonation"
          id="searchDonation"
          className="searchDonation"
          placeholder="Search Donations"
        />
        <button className="Search">Search</button>
        <select name="Filter" id="Filter" className="Filter">
          <option selected disabled="disabled">
            Filter
          </option>
          <option value="1">Education</option>
          <option value="2">Medical</option>
          <option value="3">Women and Girls</option>
          <option value="4">Animals</option>
          <option value="5">Creative</option>
          <option value="6">Food and hunger</option>
          <option value="7">Environment</option>
          <option value="8">Children</option>
          <option value="9">Memorial</option>
          <option value="10">Community development</option>
          <option value="11">Others</option>
        </select>
        <h1 className="Trending">Trending</h1>
        <div className="rectangle12">
          <h3 className="rectangleMedical">#medical</h3>
        </div>
        <div className="rectangle13">
          <h3 className="rectangleElderly">#elderly</h3>
        </div>
        <div className="rectangle14">
          <h3 className="rectangleAnimals">#animals</h3>
        </div>

        <h1 className="donationDrive">Start a </h1>
        <h1 className="donationDriveY">Donation Drive</h1>

        <div className="sphere1">
          <h1 className="one">1</h1>
        </div>
        <div className="sphere2">
          <h1 className="two">2</h1>
        </div>
        <div className="sphere3">
          <h1 className="three">3</h1>
        </div>
        <img src={Vector} className="Vector1" alt="" />
        <img src={Vector1} className="Vector2" alt="" />

        <h1 className="donationButtontext">Click on Donation Button</h1>
        <h3 className="donationButtonsubtext">
          Click on the Fundraiser for free button and proceed
        </h3>

        <h1 className="formText">Fill in the Form</h1>
        <h3 className="formSubtext">
          Fill the form with upload your proper documents
        </h3>

        <h3 className="informationText">
          Check all the information and Submit
        </h3>
        <h3 className="informationSubtext">
          Check all the information, it must be valid
        </h3>

        <button className="rectangle2" onClick={this.togglePopup}>
          <h3 className="donationDriveButton" id="donationDriveButton">
            Start Donation Drive For Free
          </h3>
        </button>

        <h1 className="TrendingFundraisers">Trending </h1>
        <h1 className="TrendingFundraisersy">Fundraisers</h1>
        <h3 className="TrendingFundraisersSubtext">
          View the fundraisers that are most active right now
        </h3>
      </div>

{/* Popup Code */}
   
        <Popup trigger={this.state.isPopupOpen} toggle={this.togglePopup}>
          <h1 className="secureDonation">Make a secure Donation:</h1>
          <div className="rectangle2721"></div>
          <h3 className="currency">Currency :</h3>
          <select name="choosecurrency" id="choosecurrency" className="choosecurrency">
          <option selected disabled="disabled">
            Choose Currency
          </option>
          <option value="1">Rupees</option>
          <option value="2">Dollar</option>
          <option value="3">Pounds</option>
        </select>
        <label htmlFor="amount" className="Amount">Amount :</label>
        <input type="number" className="amountInput" placeholder="Enter amount" name="amount" id="amount" />

        <div className="rectangle2722"></div>
        <h4 className="infoPopup">SIMMI charges NO fees. We rely on donors like you to cover for our expenses. Kindly consider a tip. Thank you 🙏</h4>
        <h4 className="includeTip">Include a tip of:</h4>

        <form action="post">
        <label htmlFor="tipamount" className="tipAmount">Amount :</label>
        <input type="number" className="tipamountInput" placeholder="Enter Tip" name="tipamount" id="amount" />
        <label htmlFor="name" className="popupname">Name: </label>
        <input type="text" name="popupName" id="popupName" className="popupName" />

        <label htmlFor="popupCountry" className="popupcountry">Country Code:</label>
        <input type="number" name="popupCountry" id="popupCountry" className="popupCountry" />

        <label htmlFor="popupPhone" className="popupphone">Phone Number:</label>
        <input type="number" name="popupPhone" id="popupPhone" className="popupPhone" />


        <label htmlFor="popupEmail" className="popupemail"> Email :</label>
        <input type="email" name="popupEmail" id="popupEmail" className="popupEmail" />

        <label htmlFor="popupIndian" className="popupindian"> Are you an Indian Citizen ?</label>
        <input type="checkbox" name="popupIndian" id="popupIndian" className="popupIndian" />


        <label htmlFor="popupDonate" className="popupdonate">Donate anonymously?</label>
        <input type="checkbox" name="popupDonate" id="popupDonate" className="popupDonate" />

        <button type="submit" className="popupSubmit">Proceed to Donate</button>
        </form>
        </Popup>
      </>
    );
  }
}
