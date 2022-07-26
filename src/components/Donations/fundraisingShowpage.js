import React, { Component } from "react";
import "./CSS/Donations.css";
import Logo from "./Pictures/Logo.png";
import Vector from "./Pictures/Vector.png";
import Vector1 from "./Pictures/Vector1.png";
import Popup from "./Popup";
import Touch from "./Pictures/Touch.png";
import axios from "axios";
import MedicalItem from "./Medicalitems";
import OtherItem from "./OtherItems";
// import AnimatedCards from "./AnimatedCards";

export default class fundraisingShowpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      isMedicalClicked: false,
      isOthersClicked: false,
      dataMedical: [],
      dataOthers: [],
    };
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup() {
    console.log("State has been changed");
    this.setState({ isPopupOpen: !this.state.isPopupOpen });
  }

  changeColor1() {
    document.getElementById("1").style.backgroundColor = "#FFAB40";
    document.getElementById("2").style.backgroundColor = "white";
    document.getElementById("3").style.backgroundColor = "white";
    document.getElementById("4").style.backgroundColor = "white";
  }
  changeColor2() {
    document.getElementById("2").style.backgroundColor = "#FFAB40";
    document.getElementById("1").style.backgroundColor = "white";
    document.getElementById("3").style.backgroundColor = "white";
    document.getElementById("3").style.backgroundColor = "white";
  }
  changeColor3() {
    document.getElementById("3").style.backgroundColor = "#FFAB40";
    document.getElementById("1").style.backgroundColor = "white";
    document.getElementById("2").style.backgroundColor = "white";
    document.getElementById("4").style.backgroundColor = "white";
  }
  changeColor4() {
    document.getElementById("4").style.backgroundColor = "#FFAB40";
    document.getElementById("1").style.backgroundColor = "white";
    document.getElementById("2").style.backgroundColor = "white";
    document.getElementById("3").style.backgroundColor = "white";
  }

  medicalCards = async (e) => {
    e.preventDefault();
    this.changeColor1();
    const res = await axios.get(
      "http://127.0.0.1:8000/api/medical_fundraiser/",
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NzI0NDMxLCJpYXQiOjE2NTg3MjQxMzEsImp0aSI6IjdkMzc1OTcxZjZlMjQyN2RhMzYxOGZmZTRmNTkzZTAyIiwidXNlcl9pZCI6MX0.hK4fIy-OJ3TO4BrxvLdglnK-2HgikGT9qaR9Xagsuzo",
        },
      }
    );
    console.log(res.data);
    this.setState({
      dataMedical: res.data,
      dataOthers: [],
      isMedicalClicked: true,
      isOthersClicked: false,
    });
  };
  otherCards = async (e) => {
    e.preventDefault();
    this.changeColor2();
    let res = await axios.get(
      "http://127.0.0.1:8000/api/fundraiser_others/",
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NzI0NDMxLCJpYXQiOjE2NTg3MjQxMzEsImp0aSI6IjdkMzc1OTcxZjZlMjQyN2RhMzYxOGZmZTRmNTkzZTAyIiwidXNlcl9pZCI6MX0.hK4fIy-OJ3TO4BrxvLdglnK-2HgikGT9qaR9Xagsuzo",
        },
      }
    );
    console.log((res.data.payload));
    this.setState({
      dataMedical: [],
      dataOthers: res.data.payload,
      isMedicalClicked: false,
      isOthersClicked: true,
    });
  };

  render() {

    return (
      <>
      {/* Side images */}
      <div className="Rectangle10"></div>
      <div className="Rectangle5"></div>
      <div className="Rectangle8"></div>
      <div className="Rectangle9"></div>
      <button className="caretLeft"> &lt;</button>
      <button className="caretRight">&gt;</button>
      {/* <AnimatedCards/> */}



        <div className="container" id="container">
          <h1 className="info">
            Thousands are crowdfunding for various causes.
          </h1>
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
            <option defaultValue disabled="disabled">
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
          <select
            name="choosecurrency"
            id="choosecurrency"
            className="choosecurrency"
          >
            <option selected disabled="disabled">
              Choose Currency
            </option>
            <option value="1">Rupees</option>
            <option value="2">Dollar</option>
            <option value="3">Pounds</option>
          </select>
          <label htmlFor="amount" className="Amount">
            Amount :
          </label>
          <input
            type="number"
            className="amountInput"
            placeholder="Enter amount"
            name="amount"
            id="amount"
          />

          <div className="rectangle2722"></div>
          <h4 className="infoPopup">
            SIMMI charges NO fees. We rely on donors like you to cover for our
            expenses. Kindly consider a tip. Thank you 🙏
          </h4>
          <h4 className="includeTip">Include a tip of:</h4>

          <form action="post">
            <label htmlFor="tipamount" className="tipAmount">
              Amount :
            </label>
            <input
              type="number"
              className="tipamountInput"
              placeholder="Enter Tip"
              name="tipamount"
              id="amount"
            />
            <label htmlFor="name" className="popupname">
              Name:{" "}
            </label>
            <input
              type="text"
              name="popupName"
              id="popupName"
              className="popupName"
            />

            <label htmlFor="popupCountry" className="popupcountry">
              Country Code:
            </label>
            <input
              type="number"
              name="popupCountry"
              id="popupCountry"
              className="popupCountry"
            />

            <label htmlFor="popupPhone" className="popupphone">
              Phone Number:
            </label>
            <input
              type="number"
              name="popupPhone"
              id="popupPhone"
              className="popupPhone"
            />

            <label htmlFor="popupEmail" className="popupemail">
              {" "}
              Email :
            </label>
            <input
              type="email"
              name="popupEmail"
              id="popupEmail"
              className="popupEmail"
            />

            <label htmlFor="popupIndian" className="popupindian">
              {" "}
              Are you an Indian Citizen ?
            </label>
            <input
              type="checkbox"
              name="popupIndian"
              id="popupIndian"
              className="popupIndian"
            />

            <label htmlFor="popupDonate" className="popupdonate">
              Donate anonymously?
            </label>
            <input
              type="checkbox"
              name="popupDonate"
              id="popupDonate"
              className="popupDonate"
            />

            <button type="submit" className="popupSubmit">
              Proceed to Donate
            </button>
          </form>
        </Popup>
        {/* Popup code ends here */}
        <button className="medicalCategory" id="1" onClick={this.medicalCards}>
          Medical
        </button>
        <button className="memorialCategory" id="2" onClick={this.otherCards}>
          Other
        </button>
        <button
          className="educationCategory"
          id="3"
          onClick={this.changeColor3}
        >
          Education
        </button>
        <button className="childrenCategory" id="4" onClick={this.changeColor4}>
          Children
        </button>
        <button className="MoreButtons">More</button>
        {/* get request dynamic code here */}
        {this.state.isMedicalClicked &&
        
          <div className="container">
            <div className="row">
              {this.state.dataMedical.map((element) => {
                return (
                  <div className="col-md-4" key={element.id}>
                    <MedicalItem
                      fundraiser_title={
                        element.fundraiser_title
                          ? element.fundraiser_title.slice(0, 45)
                          : ""
                      }
                      fundraiser_description={
                        element.fundraiser_description
                          ? element.fundraiser_description.slice(0, 88)
                          : ""
                      }
                      cover_photo={element.cover_photo}
                      current_amount_raised={element.current_amount_raised}
                      end_date={element.end_date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        }
        {this.state.isOthersClicked&&
              <div className="container">
              <div className="row">
                {this.state.dataOthers.map((element) => {
                  return (
                    <div className="col-md-4" key={element.id}>
                      <OtherItem
                        title_of_campaign={
                          element.title_of_campaign
                            ? element.title_of_campaign.slice(0, 45)
                            : ""
                        }
                        beneficiary_story={
                          element.beneficiary_story
                            ? element.beneficiary_story.slice(0, 88)
                            : ""
                        }
                        beneficiary_photo={element.beneficiary_photo}
                        target_amount={element.target_amount}
                        end_date={element.end_date}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

        }

        {/* Footer Code */}
        <img src={Touch} alt="" className="getInTouch" />
        <div className="rectangle2652"></div>
        <div className="rectangle2655"></div>
        <img src={Logo} alt="" className="footerLogo" />
        <h3 className="footerHeading">SIMMI FOUNDATION</h3>
        <h4 className="footerSubheading">
          Simmi Foundation envisions to develop a society based on legitimate
          rights, equity, justice, honesty, social sensitivity and a culture of
          service in which all are self-reliant.
        </h4>
        <h4 className="copyrightFooter">
          Copyright ©2022 All rights reserved | Simmi Foundation{" "}
        </h4>
        <h3 className="quickLinksFooter">Quick Links</h3>
        <li className="LinksFooter">
          <ul>Donate</ul>
          <ul>Lend</ul>
          <ul>Start A Fundraiser</ul>
          <ul>Contact Us</ul>
          <ul>About Us</ul>
        </li>
        <h3 className="LegalFooter">Legal</h3>
        <li className="rightFooter">
          <ul>Privacy</ul>
          <ul>Disclaimer</ul>
          <ul>Terms & Conditions</ul>
        </li>
      </>
    );
  }
}
