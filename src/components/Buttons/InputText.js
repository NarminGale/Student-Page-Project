import React from 'react'

function InputText(props) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">{props.text}*</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder={`Ex: ${props.placeHolder}`}
        />
      </div>
    </div>
  )
}

export default InputText
