import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2>Job Opnings</h2>
        <p>List of current jobs Opnings</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout