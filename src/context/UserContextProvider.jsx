import React from 'react'
import UserContext from './UserContext'
import {getWeatherData} from "../api";

const UserContextProvider = ({children}) => {
    const [searchCity, setSearchCity] = React.useState(null)
    const [data, setData] = React.useState(null)

    

   const fetchData = async () =>{
    const response = await getWeatherData(searchCity)
    setData(response)
    setSearchCity("")
   }




  return (
    <UserContext.Provider value={{searchCity, setSearchCity, fetchData, data}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider