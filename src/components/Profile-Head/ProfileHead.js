import React from 'react'
import './profilehead.css'

function ProfileHead(props) {
  return (
    <div className="profile-head">
      <div className="head-left">
        <div className="head-img">
          <img className="user-photo" src={props.image} />
        </div>
        <div className="head-text">
          <h3 className="fullname">{props.name}</h3>
          <h4 className="user-job">{props.job}</h4>
        </div>
      </div>
      <div className="head-right">{props.children}</div>
    </div>
  )
}

export default ProfileHead
