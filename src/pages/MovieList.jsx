import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../lib/redux/movieSlice';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const {data,error,loading} = useSelector(state=>state.movie);
  console.log(error,loading)
  console.log(data)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getData())
  },[])
  if(loading) return <Loading/>
  return (
    <div className='w-full h-[calc(100vh-64px)] overflow-y-auto flex flex-wrap justify-center items-center gap-4 p-4'>
      {
        data?.map(item=><MovieCard key={item?.id} data={item} />)
      }
    </div>
  )
}

export default MovieList