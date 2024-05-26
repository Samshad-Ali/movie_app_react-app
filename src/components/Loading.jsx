import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='border-b-4 p-4 border-bgPrimaryClr rounded-full transition-all animate-spin'></div>
    </div>
  )
}

export default Loading