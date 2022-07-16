import React, { Component } from 'react'
import Dropdown from './Pictures/Arrow1.png'
import { Link } from "react-router-dom";
export default class individualFunds extends Component {
  render() {
    return (
      <>
      <h1 className='IndividualFunds'>Individual Funds</h1>
      <h3 className='FundraiserPurpose'>Choose the purpose of your fundraiser here</h3>
      <div className="rectangle2805"></div>
      <h3 className='category'>Select Category...</h3>
      <img src={Dropdown} alt="" className="dropdown" />
      <div className="rectangle2807"></div>
      <div className="rectangle2808"></div>
      <div className="rectangle2809"></div>


      <Link to='/ngo-fundraising-program'><h3 className='supportCampaign'>Support Campaign for NGO</h3></Link>
      <Link to='/default-beneficiary'><h3 className='medicalFunds'>Medical Funds</h3></Link>
      <Link to='/others-fundraiser'><h3 className='others'>Others</h3></Link>
      <div className="line35"></div>
      <div className="line36"></div>

      <h3 className="footer">Copyright ©2022 All rights reserved | Simmi Foundation </h3>
      </>
    )
  }
}
