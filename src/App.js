import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from './pages/MovieList'
import FavouriteList from './pages/FavouriteList'
import Header from './components/Header'
import { routes } from './utils/constants'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster/>
      <Header/>
    <Routes>
      <Route path={routes.home} element={<MovieList/>} />
      <Route path={routes.favouritePage} element={<FavouriteList/>} />
    </Routes>
    </>
  )
}

export default App

