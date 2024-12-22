
const baseURL = "https://api.weatherapi.com/v1/current.json?key=a1b32c8ee2cf4efaaf592612242012"

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
     return  await response.json()
    
};