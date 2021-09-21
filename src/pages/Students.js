import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Student from '../components/Student/Student'
import students from '../data'
import { v4 as uuid } from 'uuid'

import axios from 'axios'

function Students() {
  const [data, setData] = useState(null)

  // axios
  //   .get('http://localhost:5500/findall')
  //   .then((res) => {
  //     setData(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  useEffect(() => {
    axios
      .get('http://localhost:5500/findall')
      .then((response) => setData(response))
  }, [])

  console.log(data)

  return (
    <>
      <Header />
      <section className="students-container">
        {/* {result.map((student) => (
          <Student
            key={uuid()}
            id={student._id}
            img={student.profile_picture}
            name={student.name}
            job={student.status}
            text={student.summary}
          />
        ))} */}
      </section>
    </>
  )
}

export default Students
