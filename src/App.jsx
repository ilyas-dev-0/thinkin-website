import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free';
import Home from './pages/Home'
import NavBlackTheme from './components/NavBlackTheme'
import School from './pages/School'
import College from './pages/College'
import Footer from './components/Footer'
import Sch from './pages/School copy'
import ScrollToTop from './components/newrout';


function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <NavBlackTheme />
      <Routes>
        <Route path="/" element={<Home />} />
        
      <Route path="/schools" element={<School/>}/>
      <Route path="/schoolc" element={<Sch/>}/>
      

        {/* Add other routes here */}
      </Routes>
    </Router>
    </>
  )
}

export default App
