import React from "react";
import {Link} from 'react-router-dom'
import pic from "../Assets/image1.png";
import pic1 from "../Assets/Ellipse1.png";
import pic2 from "../Assets/Ellipse2.png";
import pic3 from "../Assets/Polygon.png";
class Default extends React.Component{
  render(){
    function changeColor() {
      document.getElementById("4").style.color = "white";
      document.getElementById("1").style.color = "black";
      document.getElementById("2").style.color = "white";
      document.getElementById("3").style.color = "white";
    }
    function changeColor2() {
      document.getElementById("4").style.color = "white";
      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color = "black";
      document.getElementById("3").style.color = "white";
    }
    function changeColor3() {
      document.getElementById("4").style.color = "white";
      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color = "white";
      document.getElementById("3").style.color = "black";
    }
    function changeColor4() {
      document.getElementById("4").style.color = "black";
      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color = "white";
      document.getElementById("3").style.color = "white";
    }
  return (
    <div>
      
      <div className="rectangle2698">
        <h1 className="textB">Raising funds for </h1>
        <h1 className="textW">Medical Treatment</h1>
        <img src={pic}  className="imageSide" alt="sidebar" />
        <img src={pic1}  className="imageSide1" alt="sidebar" />
        <img src={pic2} className="imageSide2" alt="sidebar" />
        <img src={pic2} className="imageSide3" alt="sidebar" />
        <img src={pic2} className="imageSide4" alt="sidebar" />
        {/* todo */}
        <div className="vector"></div>
        <div className="vector1"></div>
        <div className="vector2"></div>
        <img src={pic3} className="imageSide5" alt="sidebar" />
  
        <Link to="/default-beneficiary"><button onClick={changeColor} id="1" className="BD hover:text-gray-700">Beneficiary Details</button></Link>
        <Link to="/default-medical"><button id="2" onClick={changeColor2} className="MD hover:text-gray-700">Medical Details</button></Link>
        <Link to="/default-fund"><button id="3" onClick={changeColor3} className="FD hover:text-gray-700 active:text-purple-600 ">Fund Details</button></Link>
        <Link to="/default-documents"><button id="4" onClick={changeColor4} className="medicalD hover:text-gray-700">Medical Documents</button></Link>

      </div>
      {/* <div className="imageBg"></div>
      <div className="rectangle2721"></div> */}
    </div>
  );
};
}
export default Default;
