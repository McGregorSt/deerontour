import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutUs from './views/AboutUs'
import Home from './views/Homepage'
import Cooperation from './views/Cooperation'
import Contact from './views/Contact'
import DetailsView from './views/Tour'
import Tours from './components/organisms/Tours'
import SelectedTours from './components/organisms/SelectedTours'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter basename='/'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          {/* <Route
            path='/tours/*'
            element={<RecentPosts />}
          /> */}
          <Route
            path='/tours'
            element={<Tours />}
          />
          <Route
            path='/tours/continent/:continent'
            element={<SelectedTours />}
          />
          <Route
            path='/tours/details/:country'
            element={<DetailsView />}
          />
          <Route
            path='/cooperation'
            element={<Cooperation />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/about-us'
            element={<AboutUs />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
