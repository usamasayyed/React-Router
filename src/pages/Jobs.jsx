import React from 'react'

const Jobs = () => {
  return (
    <div>

    </div>
  )
}

export default Jobs

export  const JobsLoader = async()=>{

const res = await fetch ("http://localhost:50000/jobs")
return res.json();

}