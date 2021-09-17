import React from 'react'
import './style.css'

function Student(props) {
  return (
    <>
      <article>
        <div className="student-image">
          <img src={props.img} />
        </div>
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
