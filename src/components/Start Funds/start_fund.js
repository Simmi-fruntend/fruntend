import React, { Component } from "react";
import "./CSS/FUNDS.css";
import module1 from "./Pictures/Pic1.png";
import module2 from "./Pictures/Arrow.png"
import { Link } from "react-router-dom";

export default class start_fund extends Component {
  render() {
    return (
      <>
        <img src={module1} className="picture" alt="" />
        <div className="rec2821"></div>
        <h4 className="footer">
          Copyright ©2022 All rights reserved | Simmi Foundation{" "}
        </h4>
        <h1 className="header">Start a Fundraiser</h1>
        <h3 className="headerSub">
          Choose the purpose of your fundraiser here
        </h3>
        <div className="rec2822"></div>
        <div className="rec2823"></div>
        <div className="rec2825"></div>
        <div className="rec2824"></div>
        <div className="group1299"></div>
        <div className="rectangle2688"></div>
        <div className="rectangle2668"></div>
        <div className="group1300"></div>
        <h3 className="individuals">For Individuals</h3>
        <h4 className="subtext">
          Help yourself or a loved one by starting a free fundraiser{" "}
        </h4>
        <h4 className="subtext2">
          Register SIMMI foundation to shower care at different humanity
          stations without any boundaries !
        </h4>
        <h3 className="individuals2">For Nonprofits (NGO)</h3>
        <Link to='/individual-funds'><img src={module2} alt="" className="arrow" /></Link>
        <Link to='/nonprofits'><img src={module2} alt="" className="arrow2" /></Link>
      </>
    );
  }
}
