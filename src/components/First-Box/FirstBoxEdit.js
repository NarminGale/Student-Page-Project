import React from 'react'
import './style.css'

import AddButton from '../Buttons/AddButton'
function FirstBoxEdit(props) {
  return (
    <>
      <div className="first-box glass-div">
        <div className="box-title">
          <h4>{props.title}</h4>
          <AddButton />
        </div>
        <div className="box-content">{props.children}</div>
      </div>
    </>
  )
}

export default FirstBoxEdit
