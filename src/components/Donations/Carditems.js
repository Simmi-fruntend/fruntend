import React from "react";

const CardItem =(props)=> {
    
    let { fundraiser_title, fundraiser_description ,cover_photo,current_amount_raised,end_date} = props;
    return (
        <div className="my-3">
        <div className="card" >
          <img src={cover_photo} className="card-img-top" alt="..." />
       
        
          <div className="card-body">
            <h5 className="card-title font-bold" >{fundraiser_title}</h5>
            <p className="card-text">{fundraiser_description} ....</p>
            <h4 className="card-text">
                  ₹ {current_amount_raised} raised of ₹ 5,00,00,000 goal
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

export default CardItem;