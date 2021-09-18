import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import students from "../../data";
import "./profileabout.css";

function ProfileAbout() {
  const { id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    const newPerson = students.find((student) => student.id === parseInt(id));
    console.log(id);
    setText(newPerson.text);
  }, []);

  return (
    <div className="profile-about">
      <div className="glass-div">
        <h3 className="glass-h3">Haqqımda</h3>
        <p className="user-about">{text}</p>
      </div>
    </div>
  );
}

export default ProfileAbout;
