import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
const error =  useRouteError()

const navigate = useNavigate()

  return (
    <div className='text-center'>
        <h3>An Error occurred.</h3>

<p>{error.message}</p>
<button onClick={()=>navigate("/")} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 mt-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105'>Go to Homepage</button>
    </div>
  )
}

export default Error