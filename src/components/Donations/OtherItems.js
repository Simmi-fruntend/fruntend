import React from "react";

const OtherItem =(props)=> {
    
    let { title_of_campaign, beneficiary_story ,beneficiary_photo,target_amount,end_date} = props;
    return (
        <div className="my-3">
        <div className="card" >
          <img src={`http://127.0.0.1:8000${beneficiary_photo}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-bold" >{title_of_campaign}</h5>
            <p className="card-text">{beneficiary_story} ....</p>
            <h4 className="card-text">
                  ₹ {target_amount} raised of ₹ 5,00,00,000 goal
                </h4>
            <h4 className="card-text">
                Generated on: {end_date}
            </h4>
            <button className=" card-button">Share</button>
            <button className="card-button">Donate</button>
          
          </div>
        </div>
      </div>
    );
  
}

export default OtherItem;