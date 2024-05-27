import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/constants'

const Header = () => {
  return (
    <div className='w-full h-16  p-2 sm:p-4 sm:px-8 flex items-center justify-between bg-bgPrimaryClr text-white shadow-sm shadow-black'>
        <h2 className='font-semibold bg-orange-500 rounded-sm px-2 p-1 sm:px-4 sm:p-2'>Moviehub</h2>
        <ul className='flex gap-2 text-sm sm:text-base sm:gap-8 items-center'>
            <Link className='px-2 sm:px-4 p-1 rounded-sm transition-all hover:bg-white hover:text-bgPrimaryClr ' to={routes.home}>Home</Link>
            <Link className='px-2 sm:px-4 p-1 rounded-sm transition-all hover:bg-white hover:text-bgPrimaryClr ' to={routes.favouritePage}>Favourite</Link>
        </ul>
    </div>
  )
}

export default Header