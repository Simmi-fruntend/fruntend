import React, { useState } from 'react'
import { useTransition,animated } from "react-spring";
const AnimatedCards = () => {
    const [isVisible,setIsVisible]=useState(false)
    const transition=useTransition(isVisible,{
        from:{x:-100,y:100,opacity:0},
        enter:{x:0,y:0,opacity:1},
        leave:{x:100,y:100,opacity:0},
    })
  return (
    <>
        <button onClick={()=>{
            setIsVisible(v=>!v)
        }}>{isVisible? 'un-mount' :'mount'}</button>
        <div className="container">
            {transition((style,item)=>
                item?<animated.div style={style} className='Rectangle5'/>:''
            )}
        </div>
    </>
  )
}

export default AnimatedCards