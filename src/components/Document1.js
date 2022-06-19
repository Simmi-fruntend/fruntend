import React, { useState } from 'react'

const Document1 = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };
  return (
    <div>
        <div onClick={toggleClass()} className={isActive?"invisible":"visible"}></div>
    </div>
  )
}

export default Document1