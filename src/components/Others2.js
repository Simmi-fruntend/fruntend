import React, { Component } from "react";
import picture from "../Assets/Vector.png";
import { Link } from "react-router-dom";
import { Form, Input, FormFeedback } from "reactstrap";
import axios from "axios";
import FormData from "form-data";
// import { useForm } from "react-hook-form";

export default class Others2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      documentFile: null,
      beneficiaryPhoto: null,
      beneficiaryName: "",
      raisingFundsFor: "",
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
      targetedValue: "",
      fundEndDate: "",
      touched: {
        videoFile: false,
        documentFile: false,
        beneficiaryPhoto: false,
        beneficiaryName: false,
        raisingFundsFor: false,
        beneficiaryPhone: false,
        beneficiaryAge: false,
        beneficiarySex: false,
        beneficiaryAddress: false,
        beneficiaryAddressS: false,
        beneficiaryCity: false,
        beneficiaryState: false,
        beneficiaryZip: false,
        titleCompaign: false,
        beneficiaryStory: false,
        targetedValue: false,
        fundEndDate: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  // uploadFiles() {
  //   document.getElementById("beneficiaryPhoto").click();
  //   console.log("third function called");
  // }
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
    formData.append("to_whom_fund_raised", this.state.raisingFundsFor);
    formData.append("beneficiary_name", this.state.beneficiaryName);
    formData.append("beneficiary_contact_number", this.state.beneficiaryPhone);
    formData.append("beneficiary_age", this.state.beneficiaryAge);
    formData.append("beneficiary_sex", this.state.beneficiarySex);
    formData.append("beneficiary_address", this.state.beneficiaryAddress);
    formData.append("beneficiary_address1", this.state.beneficiaryAddressS);
    formData.append("beneficiary_city", this.state.beneficiaryCity);
    formData.append("beneficiary_state", this.state.beneficiaryState);
    formData.append("beneficiary_postalcode", this.state.beneficiaryZip);
    formData.append("title_of_campaign", this.state.titleCompaign);
    formData.append("beneficiary_story", this.state.beneficiaryStory);
    formData.append("tax_Status", this.props.values.tax);
    formData.append("update_check", this.props.values.checkbox2);
    formData.append("terms_check", this.props.values.checkbox1);
    formData.append("video", this.state.videoFile);
    formData.append("beneficiary_photo", this.state.beneficiaryPhoto);
    formData.append("document", this.state.documentFile);
    formData.append("target_amount", this.state.targetedValue);
    formData.append("end_date", this.state.fundEndDate);

    let res = await axios.post(
      "http://127.0.0.1:8000/api/fundraiser_others/create/",
      // "https://httpbin.org/post",
      formData,
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NTU3OTQwLCJpYXQiOjE2NTc1NTYxNDAsImp0aSI6ImZjMDE1NjJjZWFiMDRkNTQ5NGVkNGJkYzk5ZmNkNTU2IiwidXNlcl9pZCI6MX0.jMuqKsMIRBJ74hPCFV6fQVjN-meU8lHp6_D1k2hg5YU",
          Accept: "application/json",
        },
      }
    );
    let data = res.data;
    console.log(data);
    if (res.status === 200) {
      this.continue();
    }
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
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  // https://httpbin.org/post
  validate(
    beneficiaryPhoto,
    documentFile,
    videoFile,
    beneficiaryName,
    raisingFundsFor,
    beneficiaryPhone,
    beneficiaryAge,
    beneficiaryAddress,
    beneficiaryAddressS,
    beneficiaryCity,
    beneficiaryState,
    beneficiaryZip,
    titleCompaign,
    beneficiaryStory,
    targetedValue,
    fundEndDate
  ) {
    const errors = {
      beneficiaryPhoto: "",
      documentFile: "",
      videoFile: "",
      beneficiaryName: "",
      raisingFundsFor: "",
      beneficiaryPhone: "",
      beneficiaryAge: "",
      beneficiaryAddress: "",
      beneficiaryAddressS: "",
      beneficiaryCity: "",
      beneficiaryState: "",
      beneficiaryZip: "",
      titleCompaign: "",
      beneficiaryStory: "",
      targetedValue: "",
      fundEndDate: "",
    };

    if (
      this.state.touched.beneficiaryPhoto &&
      document.getElementById("beneficiaryPhoto").files.length === 0
    )
      errors.beneficiaryPhoto = "You have not selected any File";
    if (
      this.state.touched.documentFile &&
      document.getElementById("documentFile").files.length === 0
    )
      errors.documentFile = "You have not selected any File";
    if (
      this.state.touched.videoFile &&
      document.getElementById("videoFile").files.length === 0
    )
      errors.videoFile = "You have not selected any File";

    if (this.state.touched.beneficiaryName && !beneficiaryName)
      errors.beneficiaryName = " Field should not be empty";

    if (this.state.touched.raisingFundsFor && !raisingFundsFor)
      errors.raisingFundsFor = " Field should not be empty";

    if (this.state.touched.beneficiaryAge && !beneficiaryAge) {
      errors.beneficiaryAge = " Field should not be empty";
    }
    if (this.state.touched.beneficiaryAddress && !beneficiaryAddress) {
      errors.beneficiaryAddress = " Field should not be empty";
    }

    if (this.state.touched.beneficiaryAddressS && !beneficiaryAddressS) {
      errors.beneficiaryAddressS = " Field should not be empty";
    }
    if (this.state.touched.beneficiaryCity && !beneficiaryCity) {
      errors.beneficiaryCity = " Required";
    }
    if (this.state.touched.beneficiaryState && !beneficiaryState) {
      errors.beneficiaryState = " Required";
    }
    if (this.state.touched.beneficiaryZip && !beneficiaryZip) {
      errors.beneficiaryZip = " Required";
    }
    if (this.state.touched.titleCompaign && !titleCompaign) {
      errors.titleCompaign = " Required";
    }
    if (this.state.touched.beneficiaryStory && !beneficiaryStory) {
      errors.beneficiaryStory = " Required";
    }
    if (this.state.touched.targetedValue && !targetedValue) {
      errors.targetedValue = " Required";
    }
    if (this.state.touched.fundEndDate && !fundEndDate) {
      errors.fundEndDate = " Required";
    }

    const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (this.state.touched.beneficiaryPhone && !reg.test(beneficiaryPhone))
      errors.beneficiaryPhone = "Tel. Number should contain only numbers (10)";

    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.beneficiaryPhoto,
      this.state.documentFile,
      this.state.videoFile,
      this.state.beneficiaryName,
      this.state.raisingFundsFor,
      this.state.beneficiaryPhone,
      this.state.beneficiaryAge,
      this.state.beneficiaryAddress,
      this.state.beneficiaryAddressS,
      this.state.beneficiaryCity,
      this.state.beneficiaryState,
      this.state.beneficiaryZip,
      this.state.titleCompaign,
      this.state.beneficiaryStory,
      this.state.targetedValue,
      this.state.fundEndDate
    );
    // const { register } = this.props;
  

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
              valid={errors.raisingFundsFor === ""}
              invalid={errors.raisingFundsFor !== ""}
              onBlur={this.handleBlur("raisingFundsFor")}
              onChange={this.handleInputChange}

              // defaultValue={values.raisingFundsFor}
            />
            <FormFeedback className="errorraisingFundsFor">
              {errors.raisingFundsFor}
            </FormFeedback>
            <Input
              type="text"
              name="beneficiaryName"
              id="beneficiaryName"
              valid={errors.beneficiaryName === ""}
              invalid={errors.beneficiaryName !== ""}
              className="raiseText2"
              onBlur={this.handleBlur("beneficiaryName")}
              onChange={this.handleInputChange}

              // defaultValue={values.beneficiaryName}
            />
            <FormFeedback className="errorbeneficiaryName">
              {errors.beneficiaryName}
            </FormFeedback>
            <Input
              type="text"
              name="beneficiaryPhone"
              id="beneficiaryPhone"
              className="raiseText3"
              valid={errors.beneficiaryPhone === ""}
              invalid={errors.beneficiaryPhone !== ""}
              onBlur={this.handleBlur("beneficiaryPhone")}
              onChange={this.handleInputChange}
              required
              // defaultValue={values.beneficiaryPhone}
            />
            <FormFeedback className="errorbeneficiaryPhone">
              {errors.beneficiaryPhone}
            </FormFeedback>
            <Input
              type="number"
              name="beneficiaryAge"
              id="beneficiaryAge"
              className="raiseText4"
              valid={errors.beneficiaryAge === ""}
              invalid={errors.beneficiaryAge !== ""}
              onBlur={this.handleBlur("beneficiaryAge")}
              onChange={this.handleInputChange}
              required
              // defaultValue={values.beneficiaryAge}
            />
            <FormFeedback className="errorbeneficiaryAge">
              {errors.beneficiaryAge}
            </FormFeedback>
            <select
              defaultValue={"default"}
              name="beneficiarySex"
              id="beneficiarySex"
              className="raiseText5"
              onChange={this.handleInputChange}
            >
              <option value={"default"} disabled>
                Choose an option
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </select>
            <Input
              type="text"
              name="beneficiaryAddress"
              id="beneficiaryAddress"
              valid={errors.beneficiaryAddress === ""}
              invalid={errors.beneficiaryAddress !== ""}
              onBlur={this.handleBlur("beneficiaryAddress")}
              className="raiseText6"
              onChange={this.handleInputChange}
            />
            <FormFeedback className="errorbeneficiaryAddress">
              {errors.beneficiaryAddress}
            </FormFeedback>
            <Input
              type="text"
              name="beneficiaryAddressS"
              id="beneficiaryAddressS"
              valid={errors.beneficiaryAddressS === ""}
              invalid={errors.beneficiaryAddressS !== ""}
              onBlur={this.handleBlur("beneficiaryAddressS")}
              className="raiseText7"
              onChange={this.handleInputChange}
              // defaultValue={values.beneficiaryAddressS}
            />
            <FormFeedback className="errorbeneficiaryAddressS">
              {errors.beneficiaryAddressS}
            </FormFeedback>
            <Input
              type="text"
              id="beneficiaryCity"
              name="beneficiaryCity"
              className="raiseText8"
              valid={errors.beneficiaryCity === ""}
              invalid={errors.beneficiaryCity !== ""}
              onBlur={this.handleBlur("beneficiaryCity")}
              onChange={this.handleInputChange}
              // defaultValue={values.beneficiaryCity}
            />
            <FormFeedback className="errorbeneficiaryCity">
              {errors.beneficiaryCity}
            </FormFeedback>
            <Input
              type="text"
              id="beneficiaryState"
              name="beneficiaryState"
              className="raiseText9"
              valid={errors.beneficiaryState === ""}
              invalid={errors.beneficiaryState !== ""}
              onBlur={this.handleBlur("beneficiaryState")}
              onChange={this.handleInputChange}
              // defaultValue={values.beneficiaryState}
            />
            <FormFeedback className="errorbeneficiaryState">
              {errors.beneficiaryState}
            </FormFeedback>
            <Input
              type="number"
              id="beneficiaryZip"
              name="beneficiaryZip"
              valid={errors.beneficiaryZip === ""}
              invalid={errors.beneficiaryZip !== ""}
              onBlur={this.handleBlur("beneficiaryZip")}
              className="raiseText10"
              onChange={this.handleInputChange}
              // defaultValue={values.beneficiaryZip}
            />
            <FormFeedback className="errorbeneficiaryZip">
              {errors.beneficiaryZip}
            </FormFeedback>
            <Input
              type="text"
              id="titleCompaign"
              name="titleCompaign"
              className="raiseText11"
              valid={errors.titleCompaign === ""}
              invalid={errors.titleCompaign !== ""}
              onBlur={this.handleBlur("titleCompaign")}
              onChange={this.handleInputChange}
              // defaultValue={values.titleCompaign}
            />
            <FormFeedback className="errortitleCompaign">
              {errors.titleCompaign}
            </FormFeedback>
            <Input
              type="text"
              id="beneficiaryStory"
              name="beneficiaryStory"
              cols={30}
              rows={5}
              valid={errors.beneficiaryStory === ""}
              invalid={errors.beneficiaryStory !== ""}
              onBlur={this.handleBlur("beneficiaryStory")}
              className="raiseText12"
              onChange={this.handleInputChange}
              // defaultValue={values.beneficiaryStory}
            />
            <FormFeedback className="errorbeneficiaryStory">
              {errors.beneficiaryStory}
            </FormFeedback>
            <Input
              type="file"
              name="videoFile"
              id="videoFile"
              onBlur={this.handleBlur("videoFile")}
              valid={errors.videoFile === ""}
              invalid={errors.videoFile !== ""}
              className="videoUpload"
              onChange={this.onFileChange}
              required
            />
            <FormFeedback className="errorVideo">
              {errors.videoFile}
            </FormFeedback>
            <Input
              type="file"
              onBlur={this.handleBlur("documentFile")}
              valid={errors.documentFile === ""}
              invalid={errors.documentFile !== ""}
              name="documentFile"
              id="documentFile"
              className="documentUpload"
              onChange={this.onFileChange1}
            />
            <FormFeedback className="errorDocumentFile">
              {errors.documentFile}
            </FormFeedback>
            <Input
              type="number"
              name="targetedValue"
              id="targetedValue"
              onBlur={this.handleBlur("targetedValue")}
              valid={errors.targetedValue === ""}
              invalid={errors.targetedValue !== ""}
              className="targetMoney"
              onChange={this.handleInputChange}
              required
            />
            <FormFeedback className="errortargetMoney">
              {errors.targetedValue}
            </FormFeedback>
            <Input
              type="file"
              name="beneficiaryPhoto"
              id="beneficiaryPhoto"
              onBlur={this.handleBlur("beneficiaryPhoto")}
              valid={errors.beneficiaryPhoto === ""}
              invalid={errors.beneficiaryPhoto !== ""}
              className="beneficiaryUpload"
              onChange={this.onFileChange2}
              required
            />
            <FormFeedback className="errorbeneficiary">
              {errors.beneficiaryPhoto}
            </FormFeedback>
            <Input
              type="text"
              name="fundEndDate"
              id="fundEndDate"
              onBlur={this.handleBlur("fundEndDate")}
              valid={errors.fundEndDate === ""}
              invalid={errors.fundEndDate !== ""}
              className="endDataInput"
              onChange={this.handleInputChange}
            />
            <FormFeedback className="errorfundEndDate">
              {errors.fundEndDate}
            </FormFeedback>
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

          <div className="inputPhoto"></div>
          <img src={picture} alt="" className="vectorBeneficiary"></img>

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
