import React, { Component } from 'react'
import  '/Users/mudit/Documents/Vs Code React/intern/src/CSS/Navbar.css'
import pic from '../Assets/Ellipse5.png'
import pic1 from '../Assets/Line.png'
import {Link} from 'react-router-dom'

export default class Others extends Component {
  render() {
    function changeColor(){
        document.getElementById("1").style.color = "#FF5F24";
        document.getElementById("2").style.color = "white";
        document.getElementById("3").style.color = "white";
    }
    function changeColor1(){
        document.getElementById("2").style.color = "#FF5F24";
        document.getElementById("1").style.color = "white";
        document.getElementById("3").style.color = "white";
    }
    function changeColor2(){
        document.getElementById("3").style.color = "#FF5F24";
        document.getElementById("1").style.color = "white";
        document.getElementById("2").style.color = 'white';
    }
    return (
        <>
      <div className='rec2677'></div>
      <div className="number1">1</div>
      <img className='otherPic' src={pic} alt="" />
      <div className="number2">2</div>
      <img className='otherPic1' src={pic} alt="" />
      <div className="number3">3</div>
      <img className='otherPic2' src={pic} alt="" />
      <img src={pic1} alt="" className="line" />
      <img src={pic1} alt="" className="line1" />
      <Link to='/others-fundraiser'><button  onClick={changeColor } id='1' className='hover:text-orange-500 start'>Start a Fundraiser</button></Link>
      <Link to='/others-beneficiary'><button onClick={changeColor1} id='2'  className='hover:text-orange-500 start1'>Beneficiary Details</button></Link>
      <Link to='/others-congratulations'><button id='3'  onClick={changeColor2} className='hover:text-orange-500  start2'>Congratulations</button></Link>

      <h1 className='platform'>Fundraise on India's most trusted giving platform</h1>
      <h3 className='platform1'>#Help poor #Human development #Rural areas</h3>
      <div className="bgimg"></div>
      {/* <img src={pic2} className='bg-img' alt="" /> */}
      </>

    )
  }
}
