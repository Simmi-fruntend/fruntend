import React, { Component } from 'react'
import picture from '../Assets/Vector.png'
import {Link} from 'react-router-dom'
export default class Others2 extends Component {
  continue=e=>{
    e.preventDefault()
    this.props.nextStep()
  }
  changeColor(){
    document.getElementById("1").style.color = "#FF5F24";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";

    document.getElementById("6").style.border = "";
    document.getElementById("5").style.border = "";
    document.getElementById("4").style.border = "2px solid #FF5F24";
   
  }
  previous=e=>{
    e.preventDefault()
    this.props.prevStep()
    this.changeColor()
  }
  render() {
    // const {values}=this.props
    // this.props.values
 
    return (
      <>
      <div className='backgroundSecond'>
      <h1 className="detailsbeneficiary">Enter Beneficiary Details:</h1>

      <h3 className='raise1'>I am raising funds for:</h3>
      <h3 className='raise2'>Beneficiary Name: </h3>
      <h3 className="raise3">Beneficiary Contact Number: </h3>
      <h3 className="raise4">Beneficiary Age:  </h3>
      <h3 className="raise5">Beneficiary Sex:  </h3>
      <h3 className="raise6">Beneficiary Address:  </h3>
      <h3 className="raise7">Title of the Compaign: </h3>
      <h3 className="raise8">Beneficiary Story</h3>
      <form>
      <input type="text" className="raiseText1" />
      <input type="text" className="raiseText2" />
      <input type="text" className="raiseText3" />
      <input type="text" className="raiseText4" />
      <input type="text" className="raiseText5" />
      <input type="text" className="raiseText6" />
      <input type="text" className="raiseText7" />
      <input type="text" className="raiseText8" />
      <input type="text" className="raiseText9" />
      <input type="text" className="raiseText10" />
      <input type="text" className="raiseText11" />
      <textarea type="text" cols={30} rows={5} className="raiseText12" />
      <input type="submit" className="submit" value="Submit" />
      <input type="file" name="Video" id="Video" className='videoUpload' />
      <input type="file" name="Video" id="Video" className='documentUpload' />
      <input type="text" name="Target" id="Target" className='targetMoney' />
      <input type="date" name="End" id="End" className='endDataInput' />
      </form>
      <div className="submitbox"></div>
      <div className="gobackBox"><button onClick={this.previous} className="goBack">Go Back</button></div>
      
      <div className="sideBox"></div>

      <div className="inputPhoto"></div>
      <img src={picture} alt='' className="vectorBeneficiary"></img>
      <h3 className='plusVector'>+</h3>
      <h3 className="uploadBeneficiary">Upload Beneficiary’s Photo</h3>
      <h3 className="uploadVideo">Upload a Video:</h3>
      <h3 className="uploadDocument">Documentation Upload: *</h3>
      <h3 className='targetAmount'>Targeted Amount</h3>
      <h3 className='fundendDate'>Fundraiser End Date: </h3>
      <Link to='/faqs'><h3 className='endFaqs'>FAQs</h3></Link>


      <h5 className="smallHeading">Street Address</h5>
      <h5 className="smallHeading2">Street Address Line 2</h5>
      <h5 className="smallHeading3">City</h5>
      <h5 className="smallHeading4">State</h5>
      <h5 className="smallHeading5">Postal/Zip Code</h5>
      </div>
      </>
    )
  }
}
