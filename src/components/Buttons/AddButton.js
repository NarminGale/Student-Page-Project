import React, {useEffect} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// import Input from '../Input/Input'

import "./style.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid transparent",
  borderRadius: 2,
  boxShadow: 24,
  minHeight: 400,
};

export default function AddButton() {
  const [disable, setDisable] = React.useState(false);
  const handleDisable = () => disable? setDisable(false) : setDisable(true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <div className="modal-title">
              <h4>Add experience</h4>
              <button
                type="button"
                className="add-button"
                onClick={handleClose}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-box-content">
              <h6>Where do you currently work?</h6>
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Title*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Ex: Front-end Developer"
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Company name*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Ex: Google"
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="formGroupStartDateMonthYear">Start date*</label>
                  <div className="d-flex">
                    <select
                      className="form-control"
                      id="formGroupStartDateMonthYear"
                      style={{ marginRight: "5px" }}
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                      <option value="2">Febuary</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <select
                      className="form-control"
                      id="formGroupStartDateMonthYear"
                      style={{ marginLeft: "5px" }}
                    >
                      <option value="">Year</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupEndDateMonthYear">End date*</label>
                  <div className="d-flex">
                    <select
                      className="form-control"
                      id="formGroupEndDateMonthYear"
                      style={{ marginRight: "5px" }}
                      disabled={disable}
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                      <option value="2">Febuary</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <select
                      className="form-control"
                      id="formGroupEndDateMonthYear"
                      style={{ marginLeft: "5px" }}
                      disabled={disable}
                    >
                      <option value="">Year</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex justify-content-space-between">
                  <button className="btn-form-save right">Save</button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
