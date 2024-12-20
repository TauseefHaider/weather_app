import { useState } from 'react'
import bg from "../public/a1.jpg"
import Button from './compunents/Button'
import Input from './compunents/Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-lvh '>
      <div className='absolute w-full'>
      <img src={bg} alt="" className='h-lvh w-full'  />
      </div>
      <div className="relative flex flex-col justify-between h-lvh px-14 pt-6  ">
        <div className='flex flex-col gap-28'>
      <div className=' flex items-center justify-center w-full gap-2 '>
        <div className='bg-gray-900 flex gap-4 w-[550px] justify-center items-center h-[90px] rounded-2xl bg-opacity-20 backdrop-filter backdrop-blur-lg'>
        <Input/>
        <Button value="Search"/>
        </div>
        </div>
        <div className='flex flex-col gap-1'>
          <img src="haj" alt="hdcb" />
      <h1 className='text-white font-bold text-5xl'>79 F</h1>
      <p className='font-semibold text-white'>Multan, Punjab Pakistan</p>
      </div>
      </div>
      
      <div>
        <h1>Card</h1>
      </div>
      </div>
     
    </div>
  )
}

export default App
