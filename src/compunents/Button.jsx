import React, { useContext } from 'react'
import UserContext from "../context/UserContext"


export default function Button(props) {
  
  const weather = useContext(UserContext)


  return (
    <button
     onClick={weather.fetchData}
     className='bg-white text-black font-semibold w-20 h-10 rounded-xl'>
      
      {props.value}
      </button>
  )
}
