import React, { Component } from "react";
import pic from "../Assets/pic1.png";
import pic1 from "../Assets/Ellipse1.png";
import { Form, Label, Input } from "reactstrap";
import Medical from "./Medical";
import Fund from "./Fund";
import Documents from "./Documents";

class Beneficiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraFile: null,
      name: "",
      age: "",
      relation: "",
      phonenumber: null,
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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleFileChange = (event) => {
    // Update the state
    this.setState({
      cameraFile: event.target.files[0],
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
  render() {
    const {
      cameraFile,
      name,
      age,
      relation,
      phonenumber,
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
    } = this.state;
    const values = {
      cameraFile,
      name,
      age,
      relation,
      phonenumber,
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

            <Form onSubmit={this.handleSubmit} method="post">
              <Label className="name" htmlFor="name">
                Name
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                className="rectangleName"
                placeholder="Enter Beneficiary's Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <Input
                type="text"
                name="age"
                id="age"
                className="rectangleAge"
                placeholder="Enter Beneficiary's Age"
                value={this.state.age}
                onChange={this.handleInputChange}
              />
              <Input
                type="text"
                name="relation"
                id="relation"
                className="rectangleRelation"
                placeholder="Relation"
                value={this.state.relation}
                onChange={this.handleInputChange}
              />
              <Input
                type="number"
                name="mobileNumber"
                id="mobileNumber"
                className="phoneRectangle"
                placeholder="Enter mobile number"
                value={this.state.phonenumber}
                onChange={this.handleInputChange}
              />
              <Input
                type="email"
                name="email"
                id="email"
                className="emailRectangle"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <Input
                type="file"
                name="cameraFile"
                id="cameraFile"
                onChange={this.handleFileChange}
                value={this.state.cameraFile}
              ></Input>
            </Form>

            <div className="rectangle2706"></div>
            <h4 className="textPurpose">Change Purpose ?</h4>
            <h1 className="textF">Tell us more about </h1>
            <h1 className="textY">Your Fundraiser</h1>

            <h3 className="upload">Upload a Photo</h3>
            <button>
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

            <div className="backRectangle">
              <button className="back">Back</button>
            </div>
            <div className="scRectangle">
              <button onClick={this.nextStep} className="SC">
                Save & Continue
              </button>
            </div>

            {/* <div className="imageBg"></div>
      <div className="rectangle2721"></div> */}
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
