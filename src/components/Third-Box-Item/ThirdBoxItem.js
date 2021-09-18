import React from 'react'
import './style.css'
function ThirdBoxItem(props) {
  return (
    <>
      <div className="contact">
        <div className="contact-icon">
          <i class={props.icon}></i>
        </div>
        <p>
          <a href="#"> {props.path}</a>
        </p>
      </div>
    </>
  )
}

export default ThirdBoxItem
