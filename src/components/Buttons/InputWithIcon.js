import React from 'react'

function InputWithIcon(props) {
  return (
    <>
      <label htmlFor="formGroupExampleInput" style={{ marginBottom: '0.4rem' }}>
        {props.text}
      </label>
      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span
            class="input-group-text"
            id="basic-addon1"
            style={{ height: '2.4rem' }}>
            <i className={props.icon}></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  )
}

export default InputWithIcon
