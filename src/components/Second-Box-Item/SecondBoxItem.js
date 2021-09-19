import React from 'react'
import './style.css'

import EditButton from '../Buttons/EditButton'
function SecondBoxItem(props) {
  return (
    <div className="second-box">
      <p className="second-box-item">{props.text}</p>
      {props.children}
    </div>
  )
}

export default SecondBoxItem
