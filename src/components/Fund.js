import React, { Component } from "react";
import pic from "../Assets/image3.png";
import pic1 from "../Assets/Ellipse2.png";
import pic2 from "../Assets/Ellipse1.png";
import pic3 from "../Assets/image4.png";
import pic4 from "../Assets/Polygon3.png";
import { Link } from "react-router-dom";
import { Form, Input } from "reactstrap";

export default class Fund extends Component {
  continue = () => {
    // e.preventDefault();
    this.props.nextStep();
  };
  previous = () => {
    // e.preventDefault();
    this.props.prevStep();
  };
  changeColor4() {
    document.getElementById("4").style.color = "black";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";
  }
  changeColor2() {
    document.getElementById("4").style.color = "white";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "black";
    document.getElementById("3").style.color = "white";
  }
  clickBack = (e) => {
    e.preventDefault();
    this.changeColor2();
    this.previous();
  };
  clickContinue = (e) => {
    e.preventDefault();
    this.changeColor4();
    this.continue();
  };
  uploadFiles() {
    document.getElementById("coverPhoto").click();
    console.log("fisr function called");
  }
  handleFileChange = (event) => {
    // Update the state
    this.setState({
      coverPhoto: event.target.files[0],
    });
  };

  render() {
    const { handleInputChange } = this.props;
    return (
      <div>
        <img src={pic} className="medicalImage" alt="imageshown" />
        <div className="rectangle9000"></div>

        <img src={pic1} className="change2" alt="pic1" />
        <img src={pic2} className="change3" alt="sidebar" />
        <div className="polygon2"></div>

        <Form method="post">
          <Input
            type="text"
            onChange={handleInputChange}
            name="fundraiserName"
            id="fundraiserName"
            placeholder="Name your Fundraiser"
            className="fundText"
          />
          <textarea
            className="textArea"
            onChange={handleInputChange}
            name="story"
            id="story"
            cols="37"
            rows="8"
          ></textarea>
          <Input
            type="file"
            name="coverPhoto"
            style={{display:'none'}}
            onChange={this.handleFileChange}
            id="coverPhoto"
          ></Input>
        </Form>

        <h1 className="fundDetails">Fund Details</h1>
        <button onClick={this.uploadFiles.bind(this)}>
          <img src={pic3} className="Click" alt="main" />
        </button>
        <h3 className="uploadC">Upload a Cover photo</h3>

        <img src={pic4} className="play" alt="main" />
        <h3 className="fundName">Fundraiser Name</h3>

        <h3 className="story">what’s your story ?</h3>

        <div className="preview">
          <button className="previewText">Preview</button>
        </div>

        <h4 className="build">
          <Link to="/">How to build a story</Link>
        </h4>

        <div className="backRectangle3">
          <button onClick={this.clickBack} className="back3">
            Back
          </button>
        </div>
        <div className="scRectangle3">
          <button onClick={this.clickContinue} className="SC3">
            Raise Your Fund
          </button>
        </div>
      </div>
    );
  }
}
