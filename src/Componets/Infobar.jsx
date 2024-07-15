import React from 'react'
import './infobar.css'

function Infobar({ room }) {
  return (
    
    <div className="infobar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">Leave Room</a>
    </div>
  </div>
    
  )
}

export default Infobar
