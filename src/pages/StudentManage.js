import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProfileAbout from "../components/Profile-About/ProfileAbout";
import ProfileHead from "../components/Profile-Head/ProfileHead";
import FirstBoxEdit from "../components/First-Box/FirstBoxEdit";
import ExperienceBoxItem from "../components/Experience-Box-Item/ExperienceBoxItem";
import EducationBoxItem from "../components/Education-Box-Item/EducationBoxItem";
import SecondBoxItem from "../components/Second-Box-Item/SecondBoxItem";
import ThirdBoxItem from "../components/Third-Box-Item/ThirdBoxItem";

import EditButton from "../components/Buttons/EditButton";
import AddButton from "../components/Buttons/AddButton";
import TrashButton from "../components/Buttons/TrashButton";
import UserEditButton from "../components/Buttons/UserEditButton";
import students from "../data";
import "./StudentDetails.css";

function StudentManage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState(null);
  const [about, setAbout] = useState("");

  useEffect(() => {
    const newPerson = students.find((student) => student.id === parseInt(id));
    console.log(id);
    // console.log(student.id)
    setName(newPerson.name);
    setJob(newPerson.job);
    setImage(newPerson.image);
    setAbout(newPerson.text);
  }, []);

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
          <FirstBoxEdit title="İş təcrübəsi">
            <ExperienceBoxItem workTime="Full-time" duration="2 ay">
              <EditButton />
              <TrashButton />
            </ExperienceBoxItem>
          </FirstBoxEdit>
          <FirstBoxEdit title="Təhsil ">
            <EducationBoxItem speciality="Computer Engineering">
              <EditButton />
              <TrashButton />
            </EducationBoxItem>
          </FirstBoxEdit>
          <FirstBoxEdit title="Bacarıqlar">
            <SecondBoxItem text="UI dizayn">
              <TrashButton />
            </SecondBoxItem>
            <SecondBoxItem text="HTML5">
              <TrashButton />
            </SecondBoxItem>
          </FirstBoxEdit>
          <FirstBoxEdit title="Digər biliklər">
            <SecondBoxItem text="Ingilis dili">
              <TrashButton />
            </SecondBoxItem>
          </FirstBoxEdit>
          <FirstBoxEdit title="Sosial media hesabları və portfolio">
            <ThirdBoxItem icon="fas fa-globe" path="fullName">
              <EditButton />
              <TrashButton />
            </ThirdBoxItem>
            <ThirdBoxItem icon="fab fa-behance" path="www.fullname.com">
              <EditButton />
              <TrashButton />
            </ThirdBoxItem>
          </FirstBoxEdit>
          <FirstBoxEdit title="Əlaqə">
            <ThirdBoxItem icon="fas fa-phone-alt" path="+994 12 123 12 12">
              <EditButton />
              <TrashButton />
            </ThirdBoxItem>
          </FirstBoxEdit>
        </div>
      </div>
    </div>
  );
}

export default StudentManage;
