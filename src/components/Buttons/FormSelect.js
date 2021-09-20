import React from 'react'

function FormSelect() {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Employment type</label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>Please select</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Freelance</option>
        <option>Internship</option>
      </select>
    </div>
  )
}

export default FormSelect
