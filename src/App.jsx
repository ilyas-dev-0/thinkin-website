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


function App() {

  return (
    <>
    <Router>
      <NavBlackTheme />
      <Routes>
        <Route path="/" element={<Home />} />
        
      <Route path="/schools" element={<School/>}/>
      <Route path="/schoolc" element={<Sch/>}/>
    
      <Route path="/colleges" element={<College/>}/>
      

        {/* Add other routes here */}
      </Routes>
    </Router>
    </>
  )
}

export default App
