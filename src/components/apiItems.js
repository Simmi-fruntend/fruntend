import React from 'react'

const ApiItems = (props) => {
    let { title ,image,phone,email,current,date} = props;
    return (
        <div className="my-3">
          <div className="card" >
            <div style={{display:'flex',justifyContent:'flex-end',right:0,position:"absolute"}}>
          </div>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name: {title}...</h5>
              <p className="card-text">Phone: {phone}</p>
              <p className="card-text">Email: {email}</p>
              <p className="card-text">Current Situation: {current}</p>
              <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
            </div>
          </div>
        </div>
      );
}

export default ApiItems