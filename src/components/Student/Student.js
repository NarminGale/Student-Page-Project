import React from 'react'
import './style.css'

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
      </article>
    </>
  )
}

export default Student
