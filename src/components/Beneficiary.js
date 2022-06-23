import React from 'react'
import pic from "../Assets/pic1.png";
import pic1 from"../Assets/Ellipse1.png";

const Beneficiary = () => {
  return (
    <div>
           <div className="imageBg"></div>
      <div className="rectangle2721"></div>
        <h3 className='beneficiary'>Beneficiary Details</h3>
        <h4 className='name'>Name</h4>
        <h4 className='nameR'>*</h4>
        <img src={pic1} className="chang" alt="sidebar" />
        
      <input type="text" className='rectangleName' placeholder="Enter Beneficiary's Name" />

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
        <input type="text" className='rectangleAge' placeholder="Enter Beneficiary's Age" />

        <h4 className='relation'>Beneficiary’s Relation with you</h4>
        <h4 className='relationR'>*</h4>
        <input type="text" className='rectangleRelation' placeholder="Relation" />
        <div className="question ">?</div>
        <div className="ellipseQ"></div>

        <h4 className='phone'>Phone no.</h4>
        <h4 className='phoneR'>*</h4>
        <input type="number" className='phoneRectangle' placeholder="Enter mobile number" />
        <h4 className='email'>Email</h4>
        <h4 className='emailR'>*</h4>
        <input type="email" className='emailRectangle' placeholder="Enter email" />

        <div className="backRectangle"><button className='back'>Back</button></div>
        <div className="scRectangle"><button className='SC'>Save & Continue</button></div>

             {/* <div className="imageBg"></div>
      <div className="rectangle2721"></div> */}
    </div>
  )
}

export default Beneficiary