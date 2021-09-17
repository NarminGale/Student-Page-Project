import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'

function Student(props) {
  return (
    <>
      <article>
        <a href="#" className="student-image">
          <img src={props.img} />
          <img src="./elshad-agayevs-school-logo.png" className="image-logo" />
        </a>
        <div className="student-info">
          <h4 className="student-name">{props.name}</h4>
          <span className="student-job">{props.job}</span>
          <p className="student-about">{props.text}</p>
        </div>
        <Link to={`student-details/${props.id}`} className="open-btn">
          open profile
        </Link>
      </article>
    </>
  )
}

export default Student
