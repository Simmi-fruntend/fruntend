import React from 'react'
import pic from "../Assets/image3.png";
import pic1 from"../Assets/Ellipse2.png";
import pic2 from"../Assets/Ellipse1.png";
import pic3 from"../Assets/image4.png";
import pic4 from"../Assets/Polygon3.png";
import {Link} from 'react-router-dom'


const Fund = () => {
  return (
    <div>
        <img src={pic} className='medicalImage' alt="imageshown" />
        <div className="rectangle9000"></div>

        <img src={pic1} className='change2' alt="pic1" />
        <img src={pic2} className="change3" alt="sidebar" />
        <div className="polygon2"></div>

        <h1 className='fundDetails'>Fund Details</h1>
        <img src={pic3} className="Click" alt="main" />
        <h3 className='uploadC'>Upload a Cover photo</h3>

        <img src={pic4} className="play" alt="main" />
        <h3 className='fundName'>Fundraiser Name</h3>
        <input type="text" placeholder='Name your Fundraiser' className='fundText'/>

        <h3 className='story'>what’s your story ?</h3>
        <div className="textArea"><textarea  id="2" cols="37" rows="8"></textarea></div>

        <div className="preview"><button className='previewText'>Preview</button></div>

        <h4 className='build'><Link to='/'>How to build a story</Link></h4>

        <div className="backRectangle3"><button className='back3'>Back</button></div>
        <div className="scRectangle3"><button className='SC3'>Raise Your Fund</button></div>
        

    </div>
  )
}

export default Fund