import React,{Component} from 'react'
import pic from "../Assets/pic1.png";
import pic1 from"../Assets/Ellipse1.png";
import {
  Form,
  Label,
  Input,
} from "reactstrap";

class  Beneficiary extends Component{
  render() {
    return (
    <div>
        <div className="imageBg"></div>
        <div className="rectangle2721"></div>
        <h3 className='beneficiary'>Beneficiary Details</h3>
        {/* <h4 className='name'>Name</h4> */}
        <h4 className='nameR'>*</h4>
        <img src={pic1} className="chang" alt="sidebar" />

        <Form>
        <Label className='name' htmlFor="name">Name</Label>
        <Input   type="text" name='name' id='name' className='rectangleName' placeholder="Enter Beneficiary's Name" />
        {/* <Errors className="text-danger" model=".name" show='touched' messages={{required:'Required',minLength:'Must be greater than 2 characters',maxLength:'Must be 15 characters or less'}}></Errors> */}
        <Input type="text" className='rectangleAge' placeholder="Enter Beneficiary's Age" />
        <Input type="text" className='rectangleRelation' placeholder="Relation" />
        <Input type="number" className='phoneRectangle' placeholder="Enter mobile number" />
        <Input type="email" className='emailRectangle' placeholder="Enter email" />
        </Form>

        <div className="rectangle2706"></div>
        <h4 className="textPurpose">Change Purpose ?</h4>
        <h1 className="textF">Tell us more about </h1>
      <h1 className="textY">Your Fundraiser</h1>
      {/* <div className="imageBg"></div> */}
      {/* <div className="rectangle2721"></div> */}

        <h3 className='upload'>Upload a Photo</h3>
        <button><img src={pic} className='pic' alt="showit" /></button>
        
        <div className="polygon "></div>

        <h4 className='age'>Age</h4>
        <h4 className='ageR'>*</h4>

        <h4 className='relation'>Beneficiary’s Relation with you</h4>
        <h4 className='relationR'>*</h4>
        <div className="question ">?</div>
        <div className="ellipseQ"></div>

        <h4 className='phone'>Phone no.</h4>
        <h4 className='phoneR'>*</h4>
        <h4 className='email'>Email</h4>
        <h4 className='emailR'>*</h4>

        <div className="backRectangle"><button className='back'>Back</button></div>
        <div className="scRectangle"><button className='SC'>Save & Continue</button></div>

             {/* <div className="imageBg"></div>
      <div className="rectangle2721"></div> */}
    </div>
  )
}

}
export default Beneficiary;