import React from "react";
import pic from "../Assets/image3.png";
import pic1 from "../Assets/Ellipse2.png";
import pic2 from "../Assets/Ellipse1.png";
import pic4 from "../Assets/Ellipse4.png";
// import pic3 from"../image5.png";
import pic5 from "../Assets/image6.png";
import pic6 from "../Assets/image7.png";
import { Form, Input } from "reactstrap";
export default class Documents extends React.Component {
  previous = () => {
    // e.preventDefault();
    this.props.prevStep();
  };
  changeColor3() {
    document.getElementById("4").style.color = "white";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "black";
  }
  clickBack = (e) => {
    e.preventDefault();
    this.changeColor3();
    this.previous();
  };

  handleSubmit() {}

  uploadFiles() {
    document.getElementById("estimationLetter").click();
    console.log("fisr function called");
  }
  uploadFiles1() {
    document.getElementById("medicalBill").click();
    console.log("second function called");
  }
  uploadFiles2() {
    document.getElementById("medicalReports").click();
    console.log("second function called");
  }
  handleFileChange = (event) => {
    // Update the state
    this.setState({
      estimationLetter: event.target.files[0],
    });
  };
  handleFileChange1 = (event) => {
    // Update the state
    this.setState({
      medicalBill: event.target.files[0],
    });
  };
  handleFileChange2 = (event) => {
    // Update the state
    this.setState({
      medicalReports: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <img src={pic} className="medicalImage" alt="imageshown" />
        <div className="rectangle90001"></div>

        <img src={pic1} className="change4" alt="pic1" />
        <img src={pic2} className="change5" alt="sidebar" />
        <div className="polygon3"></div>

        <h1 className="head">Medical Documents</h1>
        <h1 className="head1">1. Estimation letter</h1>
        <h1 className="head2">2. Medical bill</h1>
        <h1 className="head3">3. Medical Reports</h1>

        {/* <img src={pic3} alt="checkmark" id='checkmark' className='checkmark' /> */}
        <div className="toggle">
          <img src={pic4} alt="sphere" className="sphere" />
        </div>
        <img src={pic4} alt="sphere" id="sphere1" className="sphere1 " />
        <img src={pic4} alt="sphere" id="sphere2" className="sphere2" />

        <button className="plus" onClick={this.uploadFiles.bind(this)}>
          +
        </button>
        <button className="plus1" onClick={this.uploadFiles1.bind(this)}>
          +
        </button>
        <button className="plus2" onClick={this.uploadFiles2.bind(this)}>
          +
        </button>

        <Form onSubmit={this.handleSubmit}>
          <Input
            type="file"
            style={{ display: "none" }}
            onChange={this.handleFileChange}
            name="estimationLetter"
            id="estimationLetter"
          />
          <Input
            type="file"
            style={{ display: "none" }}
            onChange={this.handleFileChange1}
            id="medicalBill"
            name="medicalBill"
          />
          <Input
            type="file"
            style={{ display: "none" }}
            onChange={this.handleFileChange2}
            id="medicalReports"
            name="medicalReports"
          />
           <div className="saveAC">
          <button type="submit" className="Save">
            Submit
          </button>
        </div>
        </Form>

        <button>
          <img src={pic5} alt="sphere" className="edit" />
        </button>
        <button>
          <img src={pic6} alt="sphere" className="Delete" />
        </button>
       

        <div className="recSkip">
          <button onClick={this.clickBack} className="skip">
            Back
          </button>
        </div>
      </div>
    );
  }
}
