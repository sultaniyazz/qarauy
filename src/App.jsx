import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllDestData } from './api/request'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Destinations from './pages/Destinations'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDestData('https://travel-data-base.onrender.com/destinations'))
  })

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
