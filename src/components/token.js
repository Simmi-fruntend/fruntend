import React, { Component } from 'react'
import axios from 'axios'

export default class token extends Component {
    getToken=async(e)=>{
        e.preventDefault();
        const data={
          //login name of the user
            'username':'mudit',
          //login password of the user
            'password':'mudit'
        }
        let res=await axios.post('http://127.0.0.1:8000/api/token/',JSON.stringify(data),{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        let recievedData=res.data
        //json.stringify converts javascript objects into strings
        console.log("Recieved data is: "+JSON.stringify(recievedData));
        console.log("Refresh token is :"+recievedData.refresh)
        console.log("Access token is :"+recievedData.access)
        if(res.status===200){
            console.log("OK")
        }
    }
  render() {
    return (
      <div>
        <button className='token mt-36' onClick={this.getToken}>Get Tokens</button>
      </div>
    )
  }
}
