import React from 'react'
import pic from "../Assets/image3.png";
import pic1 from"../Assets/Ellipse2.png";
import pic2 from"../Assets/Ellipse1.png";
const Medical = () => {
  return (
    <div>
        {/* <div className="medicalImage"></div> */}
        <img src={pic} className='medicalImage' alt="imageshown" />
        <div className="rectangle2722"></div>

        <img src={pic1} className='change' alt="pic1" />
        <img src={pic2} className="change1" alt="sidebar" />
        <div className="polygon1"></div>

        <h1 className='cause'>Cause Details</h1>
        <h3 className='target'>Target Amount</h3>
        <h3 className='targetR'>*</h3>
        <input type="text" className='rectangleTarget' placeholder="How much do you want to raise ?" />
        <h5 className='small'>Should be minimum ₹ 2000</h5>

        <h3 className='end'>End Date</h3>
        <h3 className='endR'>*</h3>
        <input type="date" className='rectangleEnd' placeholder="dd-mm-yy" />

        <h1 className='hospital'>Hospital Details</h1>
        <h3 className='hName'>Hospital Name </h3>
        <h3 className='hNameR'>*</h3>
        <input type="text" className='rectangleHospital' placeholder="Enter the hospital name" />
        <h3 className="location">
        Location
        </h3>
        <input type="text" className='rectangleLocation' placeholder="Enter the Location" />
        <h3 className='ailment'>Aliment </h3>
        <input type="text" className='ailmentLocation' placeholder="Medical Ailment" />

        <h3 className='situation'>Current situation</h3>
        <input type="text" className='rectangleSituation' />

        <h3 className='doctor'>Doctor’s Name</h3>
        <input type="text" className='rectangleDoctor' placeholder="Enter Doctor's Name" />
        <div className="backRectangle2"><button className='back2'>Back</button></div>
        <div className="scRectangle2"><button className='SC2'>Save & Continue</button></div>

        <h3 className='phoneDoctor'>Doctor’s Phone no.</h3>
        <input type="number" className='rectanglephone' placeholder="Enter Doctor's number"/>

        <h3 className='contactHospital'>Contact no.</h3>
        <input type="number" className='rectanglecontact' placeholder="Enter Hospital's phone number"/>

        <div className="question2 ">?</div>
        <div className="ellipseQ2"></div>
        <div className="question3 ">?</div>
        <div className="ellipseQ3"></div>
    </div>
  )
}

export default Medical