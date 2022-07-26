{this.state.data.map((element) => (
    <div className="card">
        <div className="cardContainer"></div>
        {/* cover photo not able to access */}
        {/* <img src={element.cover_photo} className="" alt="" /> */}
        <div className="cardImage"></div>
        <div className="card-body">
          <h3 className="cardText">{element.fundraiser_title}</h3>
          <h4 className="cardfamilyfriends">{element.fundraiser_description.slice(0,120)}...</h4>
          <h4 className="raisedCard">
            ₹ {element.current_amount_raised} raised of ₹ 5,00,00,000 goal
          </h4>
          <button className="facebookCard">Share</button>
          <button className="donateCard">Donate</button>
         
        </div>
 
    </div>
  ))}


