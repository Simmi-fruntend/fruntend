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
      coverPhoto:null,
      estimationLetter:'',
      medicalBill:'',
      medicalReports:'',
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
      fundraiserName:"",
      story:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleFileChange = (event) => {
    // Update the state
    const target=event.target
    const name=target.name
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
   click=(e)=>{
    e.preventDefault()
    this.changeColor2()
    this.nextStep()
  }
  uploadFiles(){
    document.getElementById("cameraFile").click()
    console.log("fisrt function called")
    
  }
  render() {
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
      story
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
      story
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
            <button  onClick={this.uploadFiles.bind(this)}>
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
                name="phoneNumber"
                id="phoneNumber"
                className="phoneRectangle"
                placeholder="Enter mobile number"
                // value={this.state.phoneNumber}
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
                style={{display:"none"}}
                onChange={this.handleFileChange}
                // value={this.state.cameraFile}
              ></Input>
            </Form>

            <div className="scRectangle">
              <button onClick={this.click} className="SC">
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
