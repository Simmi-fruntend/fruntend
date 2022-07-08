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

  onFileUpload = async (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("Medical Bill", this.state.medicalBill);
    formData.append("Estimation letter", this.state.estimationLetter);
    formData.append("Medical Reports", this.state.medicalReports);
    formData.append("Cover  Photo", this.props.values.coverPhoto);
    formData.append("Camera File", this.props.values.cameraFile);
    formData.append("patient_name", this.props.values.name);
    formData.append("patient_age", this.props.values.age);
    formData.append("relation", this.props.values.relation);
    formData.append("phone", this.props.values.phoneNumber);
    formData.append("target_amount", this.props.values.targetAmount);
    formData.append("end_date", this.props.values.date);
    formData.append("hospital_name", this.props.values.hospitalName);
    formData.append("hospital_address", this.props.values.hospitalLocation);
    formData.append("medical_ailment", this.props.values.medicalAilment);
    formData.append("doctor_name", this.props.values.doctorName);
    formData.append("doctor_number", this.props.values.doctorNumber);
    formData.append("hospital_number", this.props.values.hospitalNumber);
    formData.append("fundraiser_title", this.props.values.fundraiserName);
    formData.append("fundraiser_description", this.props.values.story);
    formData.append("current_stituation_details", "sdhbsjdn");
    formData.append("current_amount_raised", "0");
    formData.append("patient_address", "sadjhbdjsa");
    formData.append("beneficiary", "sdajhdnskjasd");

    // Details of the uploaded file
    console.log(this.state.medicalBill);
    console.log(this.state.medicalReports);
    console.log(this.state.estimationLetter);
    console.log(this.props.values.coverPhoto);
    console.log(this.props.values.cameraFile);
    fetch("http://127.0.0.1:8000/api/medical_fundraiser/create/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3Mjk4NzA3LCJpYXQiOjE2NTcyOTg0MDcsImp0aSI6IjNmOWEwYzExZjI1MzQ2NjE4YzA2NDQ0ZWE2MzEzODUwIiwidXNlcl9pZCI6MX0.bBphxL1HihI1qfGqrCjJBguluuMX6i2TSrZmJE-1jMY",
      },
    })
    .then((response) => response.json())
      .then((result) => {
        console.log("Success: ", result);
      })
      .catch((error) => console.error("Error : ", error));
  };
  

  // handleSubmit = async (e) => {
  //   this.onFileUpload()
  //   e.preventDefault();

  //   // Update the formData object
  //   try {
  //     let res = await fetch("https://httpbin.org/post", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         patient_name: this.props.values.name,
  //         patient_age: this.props.values.age,
  //         beneficiary:'sjdksd',
  //         patient_address:"kjsnds",
  //         relation: this.props.values.relation,
  //         phone: this.props.values.phoneNumber,
  //         email: this.props.values.email,
  //         target_amount: this.props.values.targetAmount,
  //         end_date: this.props.values.date,
  //         hospital_name: this.props.values.hospitalName,
  //         hospital_address: this.props.values.hospitalLocation,
  //         medical_ailment: this.props.values.medicalAilment,
  //         doctor_name: this.props.values.doctorName,
  //         doctor_number: this.props.values.doctorNumber,
  //         hospital_number: this.props.values.hospitalNumber,
  //         fundraiser_title:this.props.values.fundraiserName,
  //         fundraiser_description:this.props.values.story,
  //         current_stituation_details:"critical",
  //         current_amount_raised:"0"
  //       }),
  //       headers:{
  //         'Accept': 'application/json',
  //           'Content-Type': "application/json",
  //           // "charset":"UTF-8",
  //           'Accept-Charset':  "*",
  //         'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjkxOTc5LCJpYXQiOjE2NTcyOTE2NzksImp0aSI6ImU5OTRlZGY0NDZjZTQ4ODI4ZmJjOWMzNjEyYmM3YjU5IiwidXNlcl9pZCI6MX0.Tn37thkqPqveBxWVNzznnbkI2wGAGQuXMS1agE0s4Fs'
  //       }
  //     });
  //     let resJson = await res.json();
  //     console.log(resJson);
  //     if (res.status === 200) {
  //       this.setState({ message: "Form submmited to the api succesfully" });
  //       console.log('form submitted to the api succesfully');
  //       console.log(res.status)
  //       // this.continue();
  //       //  window.open('/others-beneficiary')
  //     } else {
  //       this.setState({ message: "Some error occured" });
  //       console.log(this.state.message);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  uploadFiles() {
    document.getElementById("estimationLetter").click();
    console.log("fisrt function called");
  }
  uploadFiles1() {
    document.getElementById("medicalBill").click();
    console.log("second function called");
  }
  uploadFiles2() {
    document.getElementById("medicalReports").click();
    console.log("third function called");
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

        <Form onSubmit={this.onFileUpload}>
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
