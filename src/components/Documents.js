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

  onFileUpload = async(e) => {
    // e.preventDefault()
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("Medical Bill", this.state.medicalBill,)
    formData.append("Estimation letter", this.state.estimationLetter,)
    formData.append("Medical Reports" ,this.state.medicalReports)
    formData.append("Cover  Photo" ,this.props.values.coverPhoto)
    formData.append("Camera File" ,this.props.values.cameraFile)
    // Details of the uploaded file
    console.log(this.state.medicalBill);
    console.log(this.state.medicalReports);
    console.log(this.state.estimationLetter);
    console.log(this.props.values.coverPhoto);
    console.log(this.props.values.cameraFile);
    fetch("http://127.0.0.1:8000/api/medical_fundraiser/create/",{
      method:'POST',
      body:formData,
      headers:{
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MDEwNDk4LCJpYXQiOjE2NTcwMTAxOTgsImp0aSI6IjA0NzgxNGZlZWY0OTQ5NGM4YWNkNTFlMDQ1NGRmZjJjIiwidXNlcl9pZCI6MX0.HncuCvd66f1FEOigF8QfcxMagWSMGQrszRRceHrodWE'
      }
    }
  )
  .then((response)=>response.json())
  .then((result)=>{
    console.log('Success: ',result)
  })
  .catch((error)=>console.error('Error : ',error))
   
  };

  handleSubmit = async (e) => {
    this.onFileUpload()
    e.preventDefault();

  
    // Update the formData object
    try {
      let res = await fetch("http://127.0.0.1:8000/api/medical_fundraiser/create/", {
        method: "POST",
        body: JSON.stringify({
          name: this.props.values.name,
          age: this.props.values.age,
          relation: this.props.values.relation,
          phoneNumber: this.props.values.phoneNumber,
          email: this.props.values.email,
          targetAmount: this.props.values.targetAmount,
          date: this.props.values.date,
          hospitalName: this.props.values.hospitalName,
          hospitalLocation: this.props.values.hospitalLocation,
          medicalAilment: this.props.values.medicalAilment,
          doctorName: this.props.values.doctorName,
          doctorNumber: this.props.values.doctorNumber,
          hospitalNumber: this.props.values.hospitalNumber,
          fundraiserName:this.props.values.fundraiserName,
          story:this.props.values.story
        }),
        headers:{
          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MDEwNDk4LCJpYXQiOjE2NTcwMTAxOTgsImp0aSI6IjA0NzgxNGZlZWY0OTQ5NGM4YWNkNTFlMDQ1NGRmZjJjIiwidXNlcl9pZCI6MX0.HncuCvd66f1FEOigF8QfcxMagWSMGQrszRRceHrodWE'
        }
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        this.setState({ message: "Form submmited to the api succesfully" });
        console.log('form submitted to the api succesfully');
        console.log(res.status)
        // this.continue();
        //  window.open('/others-beneficiary')
      } else {
        this.setState({ message: "Some error occured" });
        console.log(this.state.message);
      }
    } catch (err) {
      console.log(err);
    }
  };


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
          <button type="submit"  className="Save">
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
