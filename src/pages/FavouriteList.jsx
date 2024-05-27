import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard';

const FavouriteList = () => {
  const {favouriteMovieList,isAdded} = useSelector(state=>state.movie);

  return (
    <div className='w-full h-[calc(100vh-64px)] overflow-y-auto flex flex-wrap justify-center items-center gap-4 p-2 sm:p-4 sm:px-8'>
      {
        favouriteMovieList?.length > 0 ?
        favouriteMovieList?.map(item=><MovieCard isAdded={isAdded} key={item?.id} data={item} />) : <p>No Favourite Movie Added.</p>
      }
    </div>
  )
}

export default FavouriteList