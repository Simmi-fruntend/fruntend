import React, { Component } from "react";
import { Form, Input } from "reactstrap";

export default class NGOFundraisingInitiate extends Component {
  changeColor() {
    document.getElementById("1").style.color = "#FF5F24";
    document.getElementById("2").style.color = "white";

    document.getElementById("4").style.border = "";
    document.getElementById("3").style.border = "2px solid #FF5F24";
  }
  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
    this.changeColor2();
  };
  previous = (e) => {
    // e.preventDefault();
    this.props.prevStep();
    this.changeColor();
  };
  render() {
    const { handleInputChange } = this.props;
    return (
      <>
        <div className="imageNGO"></div>
        <div className="BG2"></div>
        <h1 className="filled">Fundraiser details to be filled</h1>
        <div className="boxHeading"></div>
        <h2 className="boxText">
          These details can be modified later as well after your fundraiser has
          been made
        </h2>
        <h3 className="fundraiserTitle">Title of the fundraiser</h3>
        <h3 className="fundraiserAim">Aim</h3>
        <h3 className="fundraiserEndDate">Fundraiser Ending Date</h3>
        <h4 className="ngocheckboxText">
          Tick this box to confirm all the entered details are correct
        </h4>

        <Form method="post">
          <Input
            type="text"
            name="title"
            id="title"
            className="titleFundraiserNGO"
            onChange={handleInputChange}
            placeholder="Give your Fundraiser Name"
            // defaultValue={values.raisingFundsFor}
          />
          <Input
            type="text"
            name="aim"
            id="aim"
            className="aimFundraiserNGO"
            onChange={handleInputChange}
            placeholder="Rupees"
            // defaultValue={values.raisingFundsFor}
          />
          <Input
            type="text"
            name="ending_date"
            id="ending_date"
            className="endDateFundraiserNGO"
            onChange={handleInputChange}
            placeholder="DD/MM/YYYY"
          />
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            // checked={this.props.values.checkbox}
            className="checkboxFundraiserNGO"
            onChange={handleInputChange}
          />
          <button className="NGOsecondSubmit" type="submit">
          <h3 className="NGOsecondSubmitText">Create Your Fundraiser</h3>
          </button>
        </Form>
       
      </>
    );
  }
}
