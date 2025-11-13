import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2 className='text-2xl text-center'>Job Opnings</h2>
        <p className='text-xl text-center'>List of current jobs Opnings</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout