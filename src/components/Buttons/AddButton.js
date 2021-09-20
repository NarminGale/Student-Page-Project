import React, { useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

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
  height: 'fitheight',
}

export default function AddButton(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button type="button" className="add-button" onClick={handleOpen}>
        <i className="fas fa-plus"></i>
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
              <h4>{props.title}</h4>
              <button
                type="button"
                className="add-button"
                onClick={handleClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-box-content">
              <form>
                {/* modal title */}
                {props.children}
                {/* input text title*/}
                {/* form select */}
                {/* company name */}
                {/* form check */}
                {/* start date */}
                {/* end date */}

                <div className="d-flex justify-content-space-between">
                  <button className="btn-form-save right">Save</button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
