import React from 'react'

// import EditButton from '../Buttons/EditButton'

function EducationBoxItem(props) {
  return (
    <div className="first-box-item">
      <div className="first-box-left">
        <div className="item-image">
          <img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" />
        </div>
        <div className="item-right">
          <h5>UX/UI dizayner</h5>
          <p>
            Udemy , <span>{props.speciality}</span>
          </p>
          <p>Avq 2020 - May 2021</p>
        </div>
      </div>
      <div className="first-box-right">{props.children}</div>
    </div>
  )
}

export default EducationBoxItem
