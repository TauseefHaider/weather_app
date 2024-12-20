import React from 'react'

export default function Button(props) {
  return (
    <button className='bg-white text-black font-semibold w-20 h-10 rounded-xl'>{props.value}</button>
  )
}
