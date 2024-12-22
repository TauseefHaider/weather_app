import React, { useContext } from 'react'
import UserContext from "../context/UserContext"

export default function Input() {

  const weather = useContext(UserContext)


  return (
    <div>
        <input placeholder='Search City'
         value={weather.searchCity}
         onChange={(e)=>weather.setSearchCity(e.target.value)}
         className='rounded-xl text-white placeholder-gray-300 focus:border-white focus:border-solid focus:outline-none p-4 h-11 bg-gray-900 bg-opacity-20 backdrop-filter backdrop-blur-lg w-[300px]'  />
    </div>
  )
}
