import React from 'react'
import  '/Users/mudit/Documents/Vs Code React/intern/src/CSS/Navbar.css'
import pic from'../Assets/logo.png'
import pic1 from'../Assets/outline.png'

const Navbar= () => {
  return (<>
  <div className="rectangle1">
    <img className='nav-image ' src={pic} alt="not found"/>
    <h1 className='simmi '>Simmi </h1>
    <h1 className='foundation'>Foundation</h1>
    </div>
      <ul className>
        <li className='home '>Home</li>
        <li className='menu '>Menu</li>
        <li><img src={pic1} className="outline" alt="outline" /></li>
        <li className='events '>Events</li>
        <li><img src={pic1} className="outline1 " alt="outline" /></li>
        <li className='contact '>Contact Us</li>
        <li><img src={pic1} className="outline2 " alt="outline" /></li>
        <li className='faq '>FAQs</li>
        <li className='fundraiser   '>Start Fundraiser</li>
        <button className='donate  rectangle4'>Donate</button>
        <button className='login  rectangle5'>Login</button>
      </ul>
  </>
  )
}

export default Navbar
