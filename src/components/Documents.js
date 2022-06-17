import React from 'react'
import pic from "../image3.png";
import pic1 from"../Ellipse2.png";
import pic2 from"../Ellipse1.png";
import pic4 from"../Ellipse4.png";
import pic3 from"../image5.png";
import pic5 from"../image6.png";
import pic6 from"../image7.png";

class Documents extends React.Component{


  upload(e){
    console.warn(e.target.files)
    const files=e.target.files
    const formData=new FormData();
    formData.append('img',files[0])
    fetch('',{
      method:"POST",
      body:formData,
    }).then((resp)=>{
       resp.json().then((result)=>{
        console.warn("result",result)
       })
    })
  }

  uploadFiles(){
    document.getElementById("selectFile").click()
    console.log("fisr function called")
    
  }
  uploadFiles1(){
    document.getElementById("selectFile1").click()
    console.log("second function called")

  }
  uploadFiles2(){
    document.getElementById("selectFile2").click()
    console.log("second function called")

  }
  render(){
  return (
    <div>
        <img src={pic} className='medicalImage' alt="imageshown" />
        <div className="rectangle90001"></div>

        <img src={pic1} className='change4' alt="pic1" />
        <img src={pic2} className="change5" alt="sidebar" />
        <div className="polygon3"></div>

        <h1 className='head'>Medical Documents</h1>
        <h1 className='head1'>1. Estimation letter</h1>
        <h1 className='head2'>2. Medical bill</h1>
        <h1 className='head3'>3. Medical Reports</h1>

        {/* <img src={pic3} alt="checkmark" className='checkmark' /> */}
        <img src={pic4} alt="sphere" className='sphere' />
        <img src={pic4} alt="sphere" className='sphere1' />
        <img src={pic4} alt="sphere" className='sphere2' />


        <button className="plus"   onClick={this.uploadFiles.bind(this)} >+</button>
        <input type="file" style={{display:"none"}} id='selectFile'   name='img' onChange={(e)=>this.upload(e)} />


        <button className="plus1"  onClick={this.uploadFiles1.bind(this)} >+</button>
        <input type="file" style={{display:"none"}} id='selectFile1'   name='img' onChange={(e)=>this.upload(e)} />

        <button className="plus2"  onClick={this.uploadFiles2.bind(this)}>+</button> 
        <input type="file" style={{display:"none"}} id='selectFile2'  name='img' onChange={(e)=>this.upload(e)} />


        <button><img src={pic5} alt="sphere" className='edit' /></button>
        <button><img src={pic6} alt="sphere" className='Delete' /></button>

        <div className="recSkip"><button className='skip'>Skip</button></div>
        <div className="saveAC"><button className='Save'>Save & Continue</button></div>


    </div>
  )
}
}

export default Documents