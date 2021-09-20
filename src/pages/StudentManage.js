import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProfileAbout from '../components/Profile-About/ProfileAbout'
import ProfileHead from '../components/Profile-Head/ProfileHead'
import FirstBoxEdit from '../components/First-Box/FirstBoxEdit'
import ExperienceBoxItem from '../components/Experience-Box-Item/ExperienceBoxItem'
import EducationBoxItem from '../components/Education-Box-Item/EducationBoxItem'
import SecondBoxItem from '../components/Second-Box-Item/SecondBoxItem'
import ThirdBoxItem from '../components/Third-Box-Item/ThirdBoxItem'

import EditButton from '../components/Buttons/EditButton'
import AddButton from '../components/Buttons/AddButton'
import TrashButton from '../components/Buttons/TrashButton'
import UserEditButton from '../components/Buttons/UserEditButton'
import InputText from '../components/Buttons/InputText'
import ModalTitle from '../components/Buttons/ModalTitle'
import FormSelect from '../components/Buttons/FormSelect'
import FormCheck from '../components/Buttons/FormCheck'
import StartDate from '../components/Buttons/StartDate'
import EndDate from '../components/Buttons/EndDate'
import InputWithIcon from '../components/Buttons/InputWithIcon'
import students from '../data'
import './StudentDetails.css'

function StudentManage() {
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
        <ProfileHead name={name} job={job} image={image}>
          <UserEditButton />
        </ProfileHead>
        <ProfileAbout about={about}>
          <EditButton />
        </ProfileAbout>
        <div className="boxes">
          <FirstBoxEdit title="İş təcrübəsi" modalTitle="Add experience">
            <div>
              <ModalTitle />
              <InputText text="Title" placeHolder="Frontend Developer" />
              <FormSelect />
              <InputText
                text="Company name"
                placeHolder="Deivlon Technologies"
              />
              <FormCheck />
              <StartDate />
              <EndDate />
            </div>
            <div>
              <ExperienceBoxItem workTime="Full-time" duration="2 ay">
                <EditButton />
                <TrashButton />
              </ExperienceBoxItem>
            </div>
          </FirstBoxEdit>
          <FirstBoxEdit title="Təhsil " modalTitle="Add education">
            <div>
              <InputText text="School" placeHolder="ASOIU" />
              <InputText text="Degree" placeHolder="Bachelor's" />
              <InputText
                text="Field of study"
                placeHolder="Computer Engineering"
              />
              <StartDate />
              <EndDate />
            </div>
            <div>
              <EducationBoxItem speciality="Computer Engineering">
                <EditButton />
                <TrashButton />
              </EducationBoxItem>
            </div>
          </FirstBoxEdit>
          <FirstBoxEdit title="Bacarıqlar" modalTitle="Add skills">
            <div>
              <InputText text="Skill" placeHolder="HTML5" />
            </div>
            <div>
              <SecondBoxItem text="UI dizayn">
                <TrashButton />
              </SecondBoxItem>
              <SecondBoxItem text="HTML5">
                <TrashButton />
              </SecondBoxItem>
            </div>
          </FirstBoxEdit>
          <FirstBoxEdit title="Digər biliklər" modalTitle="Add accomplishments">
            <div>
              <InputText text="Accomplishment" placeHolder="English" />
            </div>
            <div>
              <SecondBoxItem text="Ingilis dili">
                <TrashButton />
              </SecondBoxItem>
            </div>
          </FirstBoxEdit>
          <FirstBoxEdit
            title="Sosial media hesabları və portfolio"
            modalTitle="Add social media and portfolio">
            <div>
              <InputWithIcon icon="fas fa-globe" text="Website / Portfolio" />
              <InputWithIcon icon="fab fa-github" text="Github" />
              <InputWithIcon icon="fab fa-linkedin" text="Linkedin" />
              <InputWithIcon icon="fab fa-hackerrank" text="Hackerrank" />
              <InputWithIcon
                icon="fab fa-stack-overflow"
                text="Stack-overflow"
              />
            </div>
            <div>
              <ThirdBoxItem icon="fas fa-globe" path="fullName">
                <EditButton />
                <TrashButton />
              </ThirdBoxItem>
              <ThirdBoxItem icon="fab fa-linkedin" path="www.fullname.com">
                <EditButton />
                <TrashButton />
              </ThirdBoxItem>
            </div>
          </FirstBoxEdit>
          <FirstBoxEdit title="Əlaqə" modalTitle="Add contact">
            <div>
              <InputWithIcon icon="fas fa-phone-alt" text="Phone number" />
              <InputWithIcon icon="fas fa-envelope" text="Gmail" />
              <InputWithIcon icon="fab fa-whatsapp" text="Whatsapp" />
            </div>
            <div>
              <ThirdBoxItem icon="fas fa-phone-alt" path="+994 12 123 12 12">
                <EditButton />
                <TrashButton />
              </ThirdBoxItem>
            </div>
          </FirstBoxEdit>
        </div>
      </div>
    </div>
  )
}

export default StudentManage
