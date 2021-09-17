import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Student from './components/Student/Student'
import students from './data'
import { v4 as uuid } from 'uuid'
const id = uuid()
console.log(id)
function App() {
  return (
    <React.StrictMode>
      <Header />
      <section className="students-container">
        {students.map((student) => (
          <Student
            key={id}
            img={student.image}
            info={student.info}
            name={student.name}
            job={student.job}
            text={student.text}
          />
        ))}
      </section>
    </React.StrictMode>
  )
}

export default App
