import React from "react";
import UserContext from "./UserContext";
import { getWeatherData, getWeatherDataForLocation } from "../api";

const UserContextProvider = ({ children }) => {
  const [searchCity, setSearchCity] = React.useState(null);
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    const response = await getWeatherData(searchCity);
    setData(response);
    setSearchCity("");
  };

  const fetchDataForLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <UserContext.Provider
      value={{
        searchCity,
        setSearchCity,
        fetchData,
        data,
        fetchDataForLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
