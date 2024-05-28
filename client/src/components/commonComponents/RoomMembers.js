import React from 'react'

export const RoomMembers = ({name,active=false}) => {
  return (
    <div className='px-4 mt-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
        <img src='https://ik.imagekit.io/demo/img/image4.jpeg' alt='Profile' loading='lazy' className='w-6 h-6 rounded-full'/>
        <h4>{name}</h4>
        </div>
        <div className={`${active ? 'bg-green-700' :'bg-red-700'} w-2 h-2 rounded-full`}></div>
    </div>
  )
}
