import React from 'react'
import './style.css'

function FirstBox(props) {
  return (
    <>
      <div className="first-box glass-div">
        <div className="box-title">
          <h4>{props.title}</h4>
        </div>
        <div className="box-content">{props.children}</div>
      </div>
    </>
  )
}

export default FirstBox
