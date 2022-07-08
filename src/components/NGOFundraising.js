import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NGOFundraising extends Component {
    constructor(props){
        super(props)
        this.state={
          color:''
        }
      }
  render() {
    function changeColor(){
        document.getElementById("1").style.color = "#FF5F24";
        document.getElementById("2").style.color = "white";

        document.getElementById("4").style.border = "";
        document.getElementById("3").style.border = "2px solid #FF5F24";
       
      }
      function changeColor2(){
        document.getElementById("2").style.color = "#FF5F24";
        document.getElementById("1").style.color = "white";

        document.getElementById("3").style.border = "";
        document.getElementById("4").style.border = "2px solid #FF5F24";
       
      }
    return (
      <>
      <div className="group1347"></div>
      <h1 className='showerText'>Fundraise on SIMMI to shower and be blessed help, happiness, love, and care</h1>
      <h3 className='poorText'>#Help poor #Humar development #Rural areas</h3>
      <div className='showerTextbg' alt="jhk" />
      <h1 className="menu1">1</h1>
      <h1 className="menu2">2</h1>

      <div className='ellipseSupport' id='3'></div>
      <div className='ellipseSupport1' id='4'></div>

      <Link to='/ngo-fundraising-program'><button onClick={changeColor } id='1' className="hover:text-amber-500 program">Select a Program</button></Link>
      <Link to='/ngo-fundraising-initiate'><button onClick={changeColor2 } id='2' className="program2 hover:text-amber-500">Initiate a fundraiser</button></Link>
      </>
    )
  }
}
