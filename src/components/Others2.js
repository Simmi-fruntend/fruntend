import React, { Component } from "react";
import picture from "../Assets/Vector.png";
import { Link } from "react-router-dom";
import { Form, Input } from "reactstrap";
import axios from "axios";
import FormData from "form-data";
// import axios from 'axios'

export default class Others2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      documentFile: null,
      beneficiaryPhoto: null,
    };
  }
  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({
      videoFile: event.target.files[0],
    });
  };
  onFileChange1 = (event) => {
    // Update the state
    this.setState({
      documentFile: event.target.files[0],
    });
  };
  onFileChange2 = (event) => {
    // Update the state
    this.setState({
      beneficiaryPhoto: event.target.files[0],
    });
  };
  uploadFiles() {
    document.getElementById("beneficiaryPhoto").click();
    console.log("third function called");
  }
  // On file upload (click the upload button)
  onFileUpload = async (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("name", this.props.values.name);
    formData.append("contact_number", this.props.values.phone);
    formData.append("email_id", this.props.values.email);
    formData.append("street_address", this.props.values.address);
    formData.append("street_address1", this.props.values.addressS);
    formData.append("city", this.props.values.city);
    formData.append("state", this.props.values.state);
    formData.append("postal_code", this.props.values.zip);
    formData.append("to_whom_fund_raised",this.props.values.raisingFundsFor)
    formData.append("beneficiary_name", this.props.values.beneficiaryName);
    formData.append("beneficiary_contact_number", this.props.values.beneficiaryPhone);
    formData.append("beneficiary_age", this.props.values.beneficiaryAge);
    formData.append("beneficiary_sex", this.props.values.beneficiarySex);
    formData.append("beneficiary_address", this.props.values.beneficiaryAddress);
    formData.append("beneficiary_address1", this.props.values.beneficiaryAddressS);
    formData.append("beneficiary_city",this.props.values.beneficiaryCity);
    formData.append("beneficiary_state", this.props.values.beneficiaryState);
    formData.append("beneficiary_postalcode", this.props.values.beneficiaryZip);
    formData.append("title_of_campaign", this.props.values.titleCompaign);
    formData.append("beneficiary_story", this.props.values.beneficiaryStory);
    formData.append("tax_Status", this.props.values.tax);
    formData.append("update_check",  this.props.values.checkbox2);
    formData.append("terms_check", this.props.values.checkbox1);
    formData.append("video", this.state.videoFile);
    formData.append("beneficiary_photo", this.state.beneficiaryPhoto);
    formData.append("document", this.state.documentFile);
    formData.append("target_amount", this.props.values.targetedValue);
    formData.append("end_date",this.props.values.fundEndDate);


   
    
    let res = await axios.post("http://127.0.0.1:8000/api/fundraiser_others/create/", formData, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NDY1ODU4LCJpYXQiOjE2NTc0NjQwNTgsImp0aSI6IjYzNjA3OGVjMGQzNTQ4MThhYTY2ZWFkYWQ0MjZhODY0IiwidXNlcl9pZCI6MX0.kyhxNmNLNmGVoGTmJ0IMv982qL5tqQxK_odYgCK1sJ4",
        "Accept":"application/json"
      },
    });
    let data = res.data;
    console.log(data);
  };
  changeColor() {
    document.getElementById("1").style.color = "#FF5F24";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";

    document.getElementById("6").style.border = "";
    document.getElementById("5").style.border = "";
    document.getElementById("4").style.border = "2px solid #FF5F24";
  }
  changeColor2() {
    document.getElementById("3").style.color = "#FF5F24";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";

    document.getElementById("4").style.border = "";
    document.getElementById("5").style.border = "";
    document.getElementById("6").style.border = "2px solid #FF5F24";
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

  // https://httpbin.org/post
  render() {
    const { handleInputChange } = this.props;

    return (
      <>
        <div className="backgroundSecond">
          <h1 className="detailsbeneficiary">Enter Beneficiary Details:</h1>

          <h3 className="raise1">I am raising funds for:</h3>
          <h3 className="raise2">Beneficiary Name: </h3>
          <h3 className="raise3">Beneficiary Contact Number: </h3>
          <h3 className="raise4">Beneficiary Age: </h3>
          <h3 className="raise5">Beneficiary Sex: </h3>
          <h3 className="raise6">Beneficiary Address: </h3>
          <h3 className="raise7">Title of the Compaign: </h3>
          <h3 className="raise8">Beneficiary Story</h3>
          <Form onSubmit={this.onFileUpload} method="post">
            <Input
              type="text"
              name="raisingFundsFor"
              id="raisingFundsFor"
              className="raiseText1"
              onChange={handleInputChange}
              // defaultValue={values.raisingFundsFor}
            />
            <Input
              type="text"
              name="beneficiaryName"
              id="beneficiaryName"
              className="raiseText2"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryName}
            />
            <Input
              type="text"
              name="beneficiaryPhone"
              id="beneficiaryPhone"
              className="raiseText3"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryPhone}
            />
            <Input
              type="text"
              name="beneficiaryAge"
              id="beneficiaryAge"
              className="raiseText4"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryAge}
            />
            <Input
              type="text"
              name="beneficiarySex"
              id="beneficiarySex"
              className="raiseText5"
              onChange={handleInputChange}
              // defaultValue={values.beneficiarySex}
            />
            <Input
              type="text"
              name="beneficiaryAddress"
              id="beneficiaryAddress"
              className="raiseText6"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryAddress}
            />
            <Input
              type="text"
              name="beneficiaryAddressS"
              id="beneficiaryAddressS"
              className="raiseText7"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryAddressS}
            />
            <Input
              type="text"
              id="beneficiaryCity"
              name="beneficiaryCity"
              className="raiseText8"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryCity}
            />
            <Input
              type="text"
              id="beneficiaryState"
              name="beneficiaryState"
              className="raiseText9"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryState}
            />
            <Input
              type="text"
              id="beneficiaryZip"
              name="beneficiaryZip"
              className="raiseText10"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryZip}
            />
            <Input
              type="text"
              id="titleCompaign"
              name="titleCompaign"
              className="raiseText11"
              onChange={handleInputChange}
              // defaultValue={values.titleCompaign}
            />
            <textarea
              type="text"
              id="beneficiaryStory"
              name="beneficiaryStory"
              cols={30}
              rows={5}
              className="raiseText12"
              onChange={handleInputChange}
              // defaultValue={values.beneficiaryStory}
            />
            <Input
              type="file"
              name="videoFile"
              id="videoFile"
              multiple
              className="videoUpload"
              onChange={this.onFileChange}
            />
            <Input
              type="file"
              multiple
              name="documentFile"
              id="documentFile"
              className="documentUpload"
              onChange={this.onFileChange1}
            />
            <Input
              type="number"
              name="targetedValue"
              id="targetedValue"
              className="targetMoney"
              onChange={handleInputChange}
            />
            <Input
              type="file"
              name="beneficiaryPhoto"
              id="beneficiaryPhoto"
              onChange={this.onFileChange2}
              style={{ display: "none" }}
            ></Input>
            <Input
              type="text"
              name="fundEndDate"
              id="fundEndDate"
              className="endDataInput"
              onChange={handleInputChange}
            />
            <div className="submitbox">
              <button
                type="submit"
                onClick={this.onFileUpload}
                className="submitButton"
              >
                Submit
              </button>
            </div>
          </Form>
          <div className="gobackBox">
            <button onClick={this.previous} className="goBack">
              Go Back
            </button>
          </div>

          <div className="sideBox"></div>
          <button onClick={this.uploadFiles.bind(this)}>
            <div className="inputPhoto"></div>
            <img src={picture} alt="" className="vectorBeneficiary"></img>
          </button>
          <h3 className="plusVector">+</h3>
          <h3 className="uploadBeneficiary">Upload Beneficiary’s Photo</h3>
          <h3 className="uploadVideo">Upload a Video:</h3>
          <h3 className="uploadDocument">Documentation Upload: *</h3>
          <h3 className="targetAmount">Targeted Amount</h3>
          <h3 className="fundendDate">Fundraiser End Date: </h3>
          <Link to="/faqs">
            <h3 className="endFaqs">FAQs</h3>
          </Link>

          <h5 className="smallHeading">Street Address</h5>
          <h5 className="smallHeading2">Street Address Line 2</h5>
          <h5 className="smallHeading3">City</h5>
          <h5 className="smallHeading4">State</h5>
          <h5 className="smallHeading5">Postal/Zip Code</h5>
        </div>
      </>
    );
  }
}
