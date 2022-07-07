import React, { Component } from "react";
import picture from "../Assets/Vector.png";
import { Link } from "react-router-dom";
import { Form, Input } from "reactstrap";
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
  onFileUpload = async () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("video file", this.state.videoFile);
    formData.append("document file", this.state.documentFile);
    formData.append("document file", this.state.beneficiaryPhoto);

    // Details of the uploaded file
    console.log(this.state.videoFile);
    console.log(this.state.documentFile);
    console.log(this.state.beneficiaryPhoto);
    // Request made to the backend api
    // Send formData object
    // axios.post("https://httpbin.org/post", formData,{headers:{"Content-Type":"multipart/form-data"}})
    fetch("http://127.0.0.1:8000/api/fundraiser_others/create/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjIwODAwLCJpYXQiOjE2NTcyMjA1MDAsImp0aSI6ImQyYzg2NzMwM2VlNTQ1YTg5OGQ3OGZiNmVmOTgyYjY0IiwidXNlcl9pZCI6MX0.gP5KCHRnQ477VgFaSPv74oPlg95BCbPulA4RkJ2Axn0",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success: ", result);
      })
      .catch((error) => console.error("Error : ", error));
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

  handleSubmit = async (e) => {
    this.onFileUpload();
    e.preventDefault();
    try {
      let res = await fetch(
        "http://127.0.0.1:8000/api/fundraiser_others/create/",
        {
          method: "POST",
          body: JSON.stringify({
            name: this.props.values.name,
            email_id: this.props.values.email,
            contact_number: this.props.values.phone,
            street_address: this.props.values.address,
            street_address1: this.props.values.addressS,
            CheckBox1: this.props.values.checkbox1,
            CheckBox2: this.props.values.checkbox2,
            city: this.props.values.city,
            state: this.props.values.state,
            postal_code: this.props.values.zip,
            Tax: this.props.values.tax,
            to_whom_fund_raised: this.props.values.raisingFundsFor,
            beneficiary_name: this.props.values.beneficiaryName,
            beneficiary_contact_number: this.props.values.beneficiaryPhone,
            beneficiary_age: this.props.values.beneficiaryAge,
            beneficiary_sex: this.props.values.beneficiarySex,
            beneficiary_address: this.props.values.beneficiaryAddress,
            beneficiary_address1: this.props.values.beneficiaryAddressS,
            beneficiary_city: this.props.values.beneficiaryCity,
            beneficiary_state: this.props.values.beneficiaryState,
            beneficiary_postalcode: this.props.values.beneficiaryZip,
            title_of_campaign: this.props.values.titleCompaign,
            beneficiary_story: this.props.values.beneficiaryStory,
            target_amount: this.props.values.targetedValue,
            end_date: this.props.values.fundEndDate,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjIwODAwLCJpYXQiOjE2NTcyMjA1MDAsImp0aSI6ImQyYzg2NzMwM2VlNTQ1YTg5OGQ3OGZiNmVmOTgyYjY0IiwidXNlcl9pZCI6MX0.gP5KCHRnQ477VgFaSPv74oPlg95BCbPulA4RkJ2Axn0",
          },
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        this.setState({ message: "Form submmited to the api succesfully" });
        console.log("form submitted to the api succesfully");
        console.log(res.status);
        this.continue();
        //  window.open('/others-beneficiary')
      } else {
        this.setState({ message: "Some error occured" });
        console.log(this.state.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <Form onSubmit={this.handleSubmit} method="post">
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
              type="date"
              name="fundEndDate"
              id="fundEndDate"
              className="endDataInput"
            />
            <div className="submitbox">
              <button
                type="submit"
                onClick={this.handleSubmit}
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
