import React from 'react'
import './profileabout.css'

function ProfileAbout(props) {
  return (
    <div className="profile-about">
      <div className="glass-div">
        <div className="about-title">
          <h3 className="glass-h3">Haqqımda</h3>
          {props.children}
        </div>
        <p className="user-about">{props.about}</p>
      </div>
    </div>
  )
}

export default ProfileAbout
