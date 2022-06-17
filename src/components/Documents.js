import React from 'react'
import pic from "../image3.png";
import pic1 from"../Ellipse2.png";
import pic2 from"../Ellipse1.png";

const Documents = () => {
  return (
    <div>
        <img src={pic} className='medicalImage' alt="imageshown" />
        <div className="rectangle2722"></div>

        <img src={pic1} className='change4' alt="pic1" />
        <img src={pic2} className="change5" alt="sidebar" />
        <div className="polygon3"></div>
    </div>
  )
}

export default Documents