import React from 'react'
import './profilehead.css'

function ProfileHead(props) {
  return (
    <div className="profile-head">
      <div className="head-left">
        <div className="img-div">
          <img className="user-photo" src={props.image} />
        </div>
      </div>
      <div className="head-right">
        <h3 className="fullname">{props.name}</h3>
        <h4 className="user-job">{props.job}</h4>
      </div>
    </div>
  )
}

export default ProfileHead
