import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProfileAbout from '../components/Profile-About/ProfileAbout'
import ProfileHead from '../components/Profile-Head/ProfileHead'
import FirstBox from '../components/First-Box/FirstBox'
import FirstBoxItem from '../components/First-Box-Item/FirstBoxItem'
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
            <FirstBoxItem />
            <FirstBoxItem />
            <FirstBoxItem />
          </FirstBox>
          <FirstBox title="Təhsil ">
            <FirstBoxItem />
            <FirstBoxItem />
          </FirstBox>
          <FirstBox title="Bacarıqlar">
            <SecondBoxItem text="UI dizayn" />
            <SecondBoxItem text="HTML5" />
            <SecondBoxItem text="CSS3" />
          </FirstBox>
          <FirstBox title="Digər biliklər">
            <SecondBoxItem text="Ingilis dili" />
            <SecondBoxItem text="Azərbaycan dili" />
            <SecondBoxItem text="Rus dili" />
          </FirstBox>
          <FirstBox title="Sosial media hesabları və portfolio">
            <ThirdBoxItem icon="fas fa-globe" path="fullName" />
            <ThirdBoxItem icon="fab fa-behance" path="www.fullname.com" />
            <ThirdBoxItem icon="fab fa-facebook-f" path="fullName" />
            <ThirdBoxItem icon="fab fa-instagram" path="fullName" />
            <ThirdBoxItem icon="fab fa-twitter" path="fullName" />
          </FirstBox>
          <FirstBox title="Əlaqə">
            <ThirdBoxItem icon="fas fa-phone-alt" path="+994 12 123 12 12" />
            <ThirdBoxItem icon="far fa-envelope" path="name@gmail.com" />
            <ThirdBoxItem icon="fab fa-whatsapp" path="+994 11 123 11 11" />
          </FirstBox>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
