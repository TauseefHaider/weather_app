import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function BottomDiv() {
  const weather = useContext(UserContext);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-gray-400 flex w-[540px] justify-between items-center h-[90px] rounded-2xl bg-opacity-50 backdrop-filter backdrop-blur-sm">
        <div className="flex text-white flex-col items-center justify-center h-[65px] w-[180px] gap-2 text-lg font-semibold">
          <p>{weather?.data?.current?.feelslike_c}° C</p>

          <p>Feel Like</p>
        </div>
        <div className="flex flex-col text-white items-center justify-center h-[65px] w-[180px] gap-2 text-lg font-semibold border-x border-solid border-white">
          <p>{weather?.data?.current?.humidity}%</p>

          <p>Humidity</p>
        </div>
        <div className="flex flex-col text-white items-center justify-center h-[65px] w-[180px] gap-2 text-lg font-semibold">
          <p>{weather?.data?.current?.wind_mph}MPH</p>

          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}
