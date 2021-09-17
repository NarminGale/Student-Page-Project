import React from 'react'
import Header from '../components/Header/Header'
import Student from '../components/Student/Student'
import students from '../data'
import { v4 as uuid } from 'uuid'

function Students() {
  return (
    <>
      <Header />
      <section className="students-container">
        {students.map((student) => (
          <Student
            key={uuid()}
            id={student.id}
            img={student.image}
            name={student.name}
            job={student.job}
            text={student.text}
          />
        ))}
      </section>
    </>
  )
}

export default Students
