import React from 'react'
import './profileabout.css'

function ProfileAbout(props) {
  return (
    <div className="profile-about">
      <div className="glass-div">
        <h3 className="glass-h3">Haqqımda</h3>
        <p className="user-about">{props.about}</p>
      </div>
    </div>
  )
}

export default ProfileAbout
