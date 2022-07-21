import React from 'react'
import Cancel from "./Pictures/Cancel.png";

export default function Popup(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={props.toggle}><img src={Cancel} alt="img" /></button>
            {props.children}
        </div>
    </div>
  ):""
}
