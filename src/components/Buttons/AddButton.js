import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// import Input from '../Input/Input'

import './style.css'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid transparent',
  borderRadius: 2,
  boxShadow: 24,
  height: 400,
}

export default function AddButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button type="button" className="add-button" onClick={handleOpen}>
        <i class="fas fa-plus"></i>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={modalStyle}>
            <div className="modal-title">
              <h4>Add experience</h4>
              <button
                type="button"
                className="add-button"
                onClick={handleClose}>
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-box-content">
              <h6>Where do you currently work?</h6>
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Title*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Ex: Front-end Developer"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Employment type</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Please select</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Company name*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Ex: Google"
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Currently working
                  </label>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
