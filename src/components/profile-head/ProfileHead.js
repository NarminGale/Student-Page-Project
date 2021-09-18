import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import students from "../../data";
import "./profilehead.css";

function ProfileHead() {
  const { id } = useParams();
  const [name, setName] = useState("default name");
  const [job, setJob] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const newPerson = students.find((student) => student.id === parseInt(id));
    setName(newPerson.name);
    setJob(newPerson.job);
    setImage(newPerson.image);
  }, []);

  return (
    <div className="profile-head">
      <div className="head-left">
        <div className="img-div">
          <img className="user-photo" src={image} />
        </div>
      </div>
      <div className="head-right">
        <h3 className="fullname">{name}</h3>
        <h4 className="user-job">{job}</h4>
      </div>
    </div>
  );
}

export default ProfileHead;
