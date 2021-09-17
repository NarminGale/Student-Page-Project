import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import students from '../data'

function StudentDetails() {
  const { id } = useParams()
  const [name, setName] = useState('default name')

  useEffect(() => {
    const newPerson = students.find((student) => student.id === parseInt(id))
    console.log(id)
    // console.log(student.id)
    setName(newPerson.name)
  }, [])
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default StudentDetails
