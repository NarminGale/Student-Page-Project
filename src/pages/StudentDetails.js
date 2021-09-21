import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProfileAbout from '../components/Profile-About/ProfileAbout'
import ProfileHead from '../components/Profile-Head/ProfileHead'
import FirstBox from '../components/First-Box/FirstBox'
import ExperienceBoxItem from '../components/Experience-Box-Item/ExperienceBoxItem'
import EducationBoxItem from '../components/Education-Box-Item/EducationBoxItem'
import SecondBoxItem from '../components/Second-Box-Item/SecondBoxItem'
import ThirdBoxItem from '../components/Third-Box-Item/ThirdBoxItem'

import students from '../data'
import './StudentDetails.css'

function StudentDetails() {
  const { id } = useParams()
  const [name, setName] = useState('')
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
    <div className="student-details">
      <div className="container">
        <ProfileHead name={name} job={job} image={image} />
        <ProfileAbout about={about} />
        <div className="boxes">
          <FirstBox title="İş təcrübəsi">
            <ExperienceBoxItem workTime="Full-time" duration="2 ay" />
          </FirstBox>
          <FirstBox title="Təhsil ">
            <EducationBoxItem speciality="Computer Engineering"></EducationBoxItem>
          </FirstBox>
          <FirstBox title="Bacarıqlar">
            <SecondBoxItem text="UI dizayn"></SecondBoxItem>
          </FirstBox>
          <FirstBox title="Digər biliklər">
            <SecondBoxItem text="Ingilis dili"></SecondBoxItem>
          </FirstBox>
          <FirstBox title="Sosial media hesabları və portfolio">
            <ThirdBoxItem icon="fas fa-globe" path="fullName"></ThirdBoxItem>
          </FirstBox>
          <FirstBox title="Əlaqə">
            <ThirdBoxItem
              icon="fas fa-phone-alt"
              path="+994 12 123 12 12"></ThirdBoxItem>
          </FirstBox>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
