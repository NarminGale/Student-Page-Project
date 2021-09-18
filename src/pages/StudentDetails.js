import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import students from '../data'
import './StudentDetails.css'

function StudentDetails() {
  const { id } = useParams()
  const [name, setName] = useState('default name')
  const [job, setJob] = useState('')
  const [image, setImage] = useState(null)
  const [about, setAbout] = useState('')

  useEffect(() => {
    const newPerson = students.find((student) => student.id === parseInt(id))
    console.log(id)
    // console.log(student.id)
    setName(newPerson.name)
    setJob(newPerson.job)
    setImage(newPerson.image)
    setAbout(newPerson.text)
  }, [])

  return (
    <>
      <section className="container">
        <h1>{name}</h1>
      </section>
    </>
  )
}

export default StudentDetails
