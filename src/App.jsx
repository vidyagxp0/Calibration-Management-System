import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import ScheduleUnderExecution from './Dashboard/ScheduleUnderExecution'
import ExecutionUnderReviewer from './Dashboard/ExecutionUnderReviewer'


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='/p' element={<Dashboard/>}/>
     <Route path='/schedule-under-executon' element={<ScheduleUnderExecution/>}/>
     <Route path='/execution-under-reviewer' element={<ExecutionUnderReviewer/>}/>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
