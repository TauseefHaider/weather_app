import { useEffect } from "react";
import bg from "./assets/ass.jpg";
import Button from "./compunents/Button";
import Input from "./compunents/Input";
import BottomDiv from "./compunents/BottomDiv";
import UserContext from "./context/UserContext";
import { useContext } from "react";

function App() {
  const weather = useContext(UserContext);
  console.log("weather", weather);

  useEffect(() => {
    weather.fetchDataForLocation();
  }, []);

  return (
    <div className="h-lvh ">
      <div className="absolute w-full">
        <img src={bg} alt="" className="h-lvh w-full" />
      </div>
      <div className="relative flex flex-col justify-between h-lvh px-14 py-6  ">
        <div className="flex flex-col gap-28">
          <div>
            <div className=" flex items-center justify-center w-full gap-2 ">
              <div className="bg-gray-900 flex gap-4 w-[550px] justify-center items-center h-[90px] rounded-2xl bg-opacity-20 backdrop-filter backdrop-blur-lg">
                <Input />

                <Button value="Search" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-5xl mb-1">
              {weather?.data?.current?.temp_c}° C
            </h1>
            <p className="font-semibold text-white">
              {weather?.data?.location?.name}, {weather?.data?.location?.region}{" "}
              {weather?.data?.location?.country}
            </p>
          </div>
        </div>

        <BottomDiv />
      </div>
    </div>
  );
}

export default App;
