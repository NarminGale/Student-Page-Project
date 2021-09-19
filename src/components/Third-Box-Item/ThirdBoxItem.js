import React from 'react'
import './style.css'

import EditButton from '../Buttons/EditButton'
function ThirdBoxItem(props) {
  return (
    <>
      <div className="contact">
        <div className="contact-left">
          <div className="contact-icon">
            <i class={props.icon}></i>
          </div>
          <p>
            <a href="#"> {props.path}</a>
          </p>
        </div>
        <div className="contact-right">{props.children}</div>
      </div>
    </>
  )
}

export default ThirdBoxItem
