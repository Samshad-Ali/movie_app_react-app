import React from 'react'
import { LuHeartOff } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";

import movieImage from '../assets/avatar-img.avif';
import { useDispatch } from 'react-redux';
import { addFavouriteMovie, removeFavouriteMovie } from '../lib/redux/movieSlice';
const MovieCard = ({data,isAdded}) => {
  const dispatch = useDispatch();
  const favouriteBtnHandler=(id)=>{
    dispatch(addFavouriteMovie(id));
  }
  const unfavouriteBtnHandler=(id)=>{
    dispatch(removeFavouriteMovie(id));
  }
  return (
   <div
   className='w-[310px] flex flex-col justify-center gap-2 p-4 bg-black shadow-sm shadow-bgPrimaryClr rounded-sm text-white hover:scale-105 transition-all'
   >
    <img className='rounded-sm' src={movieImage} alt="photo" />
    <p className='line-clamp-1 text-sm font-semibold'>{data?.movie}</p>
    <div className='flex justify-between items-center'>
        <span className='text-xs text-orange-600'> Rating : {data?.rating} / 10</span>
       
       <div className='flex gap-4 items-center'>
         <span className='cursor-pointer' 
        onClick={()=>{favouriteBtnHandler(data?.id)}}
        > <FaHeart className={`${isAdded?'text-red-600':'text-white'}`}  size={20} /> </span>
        <span className='cursor-pointer'
         onClick={()=>{unfavouriteBtnHandler(data?.id)}}
        >
          <LuHeartOff size={20}/>
        </span>
        </div>
    </div>
    <a className='bg-orange-500 hover:bg-orange-600 transition-all px-8 p-2 w-fit text-sm self-center rounded-sm mt-4'  href={data?.imdb_url} target='_blank'>View More...</a>
   </div>
  )
}

export default MovieCard;