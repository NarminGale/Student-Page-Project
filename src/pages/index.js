import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Students from './Students'
import StudentDetails from './StudentDetails'
import StudentManage from './StudentManage'
import Error from './Error'
function ReactRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Students />
        </Route>
        <Route exact path="/student/:id" children={<StudentDetails />}></Route>
        <Route exact path="/student/:id/edit">
          <StudentManage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouter
