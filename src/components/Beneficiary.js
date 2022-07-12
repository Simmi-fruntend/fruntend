import React, { Component } from "react";
import pic from "../Assets/pic1.png";
import pic1 from "../Assets/Ellipse1.png";
import { Form, Label, Input, FormFeedback } from "reactstrap";
import Medical from "./Medical";
import Fund from "./Fund";
import Documents from "./Documents";

class Beneficiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraFile: null,
      coverPhoto: null,
      estimationLetter: "",
      medicalBill: "",
      medicalReports: "",
      name: "",
      age: "",
      relation: "",
      phoneNumber: "",
      email: "",
      step: 1,
      targetAmount: "",
      date: "",
      hospitalName: "",
      hospitalLocation: "",
      medicalAilment: "",
      doctorName: "",
      doctorNumber: "",
      hospitalNumber: "",
      fundraiserName: "",
      story: "",
      touched: {
        name: false,
        age: false,
        relation: false,
        phoneNumber: false,
        email: false,
        cameraFile: false,
        targetAmount:false
      },
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleFileChange = (event) => {
    // Update the state
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.files[0],
    });
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
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
  changeColor2() {
    document.getElementById("4").style.color = "white";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "black";
    document.getElementById("3").style.color = "white";
  }
  click = (e) => {
    e.preventDefault();
    this.validateButton();

  };
  uploadFiles() {
    document.getElementById("cameraFile").click();
    console.log("fisrt function called");
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate(name, age, relation, phoneNumber, email, cameraFile,targetAmount) {
    const errors = {
      name: "",
      age: "",
      relation: "",
      phoneNumber: "",
      email: "",
      cameraFile: "",
      targetAmount:""
    };

    if (this.state.touched.targetAmount === true && !targetAmount) {
      errors.targetAmount = " Required";
    }

    if (this.state.touched.relation === true && !relation) {
      errors.relation = " Required";
    }
    if (this.state.touched.age === true && !age) {
      errors.age = " Field should not be empty";
    }

    if (
      this.state.touched.cameraFile &&
      document.getElementById("cameraFile").files.length === 0
    ) {
      errors.cameraFile = "You have not selected any File";
    }

    if (this.state.touched.name === true && name.length < 3) {
      errors.name = " Name should be >= 3 characters";
    } else if (this.state.touched.name === true && name.length > 20) {
      errors.name = " Name should be <= 20 characters";
    }
    const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (this.state.touched.phoneNumber === true && !reg.test(phoneNumber)) {
      errors.phoneNumber = "Tel. Number should contain only numbers (10)";
    }
    const reg1 =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (this.state.touched.email === true && !reg1.test(email)) {
      errors.email = "Email should be like- example@email.com";
    }
    return errors;
  }

  validateButton() {
    if (
      this.state.name === "" ||
      this.state.age === "" ||
      this.state.relation === "" ||
      this.state.phoneNumber === "" ||
      this.state.email === ""||
      this.state.cameraFile===null
    ) {
      
      document.getElementById("saveAndContinue").disabled = true;
      setTimeout(function(){
        document.getElementById("saveAndContinue").disabled = false;
      },1000)
      console.log("Button disabled")
      if(this.state.name === "" ||
      this.state.age === "" ||
      this.state.relation === "" ||
      this.state.phoneNumber === "" ||
      this.state.email === ""||
      this.state.cameraFile===null){
        alert("Sorry Sir/Mam, but you cannot proceed further. Please fill all the required details in the form.")
      }
      
    } else {
      document.getElementById("saveAndContinue").disabled = false;
      alert("Make Sure there is green tick against every field or else it can lead to rejection of your form at the end")
      this.nextStep();
      this.changeColor2();

    }
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.age,
      this.state.relation,
      this.state.phoneNumber,
      this.state.email,
      this.state.cameraFile,
      this.state.targetAmount
    );
    const {
      cameraFile,
      coverPhoto,
      estimationLetter,
      medicalBill,
      medicalReports,
      name,
      age,
      relation,
      phoneNumber,
      email,
      step,
      targetAmount,
      date,
      hospitalName,
      hospitalLocation,
      medicalAilment,
      doctorName,
      doctorNumber,
      hospitalNumber,
      fundraiserName,
      story,
    } = this.state;
    const values = {
      cameraFile,
      coverPhoto,
      estimationLetter,
      medicalBill,
      medicalReports,
      name,
      age,
      relation,
      phoneNumber,
      email,
      step,
      targetAmount,
      date,
      hospitalName,
      hospitalLocation,
      medicalAilment,
      doctorName,
      doctorNumber,
      hospitalNumber,
      fundraiserName,
      story,
    };

    switch (step) {
      case 1:
        return (
          <div>
            <div className="imageBg"></div>
            <div className="rectangle2721"></div>
            <h3 className="beneficiary">Beneficiary Details</h3>
            {/* <h4 className='name'>Name</h4> */}
            <h4 className="nameR">*</h4>
            <img src={pic1} className="chang" alt="sidebar" />
            <div className="rectangle2706"></div>
            <h4 className="textPurpose">Change Purpose ?</h4>
            <h1 className="textF">Tell us more about </h1>
            <h1 className="textY">Your Fundraiser</h1>

            <h3 className="upload">Upload a Photo</h3>
            <button onClick={this.uploadFiles.bind(this)}>
              <img src={pic} className="pic" alt="showit" />
            </button>

            <div className="polygon "></div>

            <h4 className="age">Age</h4>
            <h4 className="ageR">*</h4>

            <h4 className="relation">Beneficiary’s Relation with you</h4>
            <h4 className="relationR">*</h4>
            <div className="question ">?</div>
            <div className="ellipseQ"></div>

            <h4 className="phone">Phone no.</h4>
            <h4 className="phoneR">*</h4>
            <h4 className="email">Email</h4>
            <h4 className="emailR">*</h4>

            <Form onSubmit={this.handleSubmit} method="post">
              <Label className="name" htmlFor="name">
                Name
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                valid={errors.name === ""}
                invalid={errors.name !== ""}
                onBlur={this.handleBlur("name")}
                className="rectangleName"
                placeholder="Enter Beneficiary's Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <FormFeedback className="errorNameMedical">
                {errors.name}
              </FormFeedback>
              <Input
                type="number"
                name="age"
                id="age"
                valid={errors.age === ""}
                invalid={errors.age !== ""}
                onBlur={this.handleBlur("age")}
                className="rectangleAge"
                placeholder="Enter Beneficiary's Age"
                value={this.state.age}
                onChange={this.handleInputChange}
              />
              <FormFeedback className="errorAgeMedical">
                {errors.age}
              </FormFeedback>
              <Input
                type="text"
                name="relation"
                id="relation"
                valid={errors.relation === ""}
                invalid={errors.relation !== ""}
                onBlur={this.handleBlur("relation")}
                className="rectangleRelation"
                placeholder="Relation"
                value={this.state.relation}
                onChange={this.handleInputChange}
              />
              <FormFeedback className="errorRelationMedical">
                {errors.relation}
              </FormFeedback>
              <Input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                valid={errors.phoneNumber === ""}
                invalid={errors.phoneNumber !== ""}
                onBlur={this.handleBlur("phoneNumber")}
                className="phoneRectangle"
                placeholder="Enter mobile number"
                // value={this.state.phoneNumber}
                onChange={this.handleInputChange}
              />
              <FormFeedback className="errorPhoneMedical">
                {errors.phoneNumber}
              </FormFeedback>
              <Input
                type="email"
                name="email"
                id="email"
                valid={errors.email === ""}
                invalid={errors.email !== ""}
                onBlur={this.handleBlur("email")}
                className="emailRectangle"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <FormFeedback className="errorEmailMedical">
                {errors.email}
              </FormFeedback>
              <Input
                type="file"
                name="cameraFile"
                id="cameraFile"
                valid={errors.cameraFile === ""}
                invalid={errors.cameraFile !== ""}
                onBlur={this.handleBlur("cameraFile")}
                style={{ display: "none" }}
                onChange={this.handleFileChange}
                // value={this.state.cameraFile}
              >
                <FormFeedback className="errorName">{errors.name}</FormFeedback>
              </Input>
            </Form>

            <div className="scRectangle">
              <button onClick={this.click} id="saveAndContinue" className="SC">
                Save & Continue
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <Medical
              nextStep={this.nextStep}
              handleInputChange={this.handleInputChange}
              values={values}
              prevStep={this.prevStep}
              handleBlur={this.handleBlur}
              validate={this.validate}
            />
          </>
        );

      case 3:
        return (
          <>
            <Fund
              nextStep={this.nextStep}
              handleInputChange={this.handleInputChange}
              values={values}
              prevStep={this.prevStep}
              handleFileChange={this.handleFileChange}
            />
          </>
        );
      case 4:
        return (
          <>
            <Documents
              nextStep={this.nextStep}
              handleInputChange={this.handleInputChange}
              values={values}
              prevStep={this.prevStep}
            />
          </>
        );

      default:
        return <div></div>;
    }
  }
}
export default Beneficiary;
