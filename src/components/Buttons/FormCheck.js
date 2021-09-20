import React from 'react'

export default function FormCheck() {
  const [disable, setDisable] = React.useState(false)
  const handleDisable = () => (disable ? setDisable(false) : setDisable(true))
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        defaultChecked={false}
        onChange={handleDisable}
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Currently working
      </label>
    </div>
  )
}
