import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProfileAbout from "../components/profile-about/ProfileAbout";
import ProfileHead from "../components/profile-head/ProfileHead";
import students from "../data";
import "./StudentDetails.css";

function StudentDetails() {
  const { id } = useParams();
  const [name, setName] = useState("default name");
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
        <ProfileHead />
        <ProfileAbout />
      </div>
    </div>
  );
}

export default StudentDetails;
