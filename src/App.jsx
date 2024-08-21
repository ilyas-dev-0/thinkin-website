import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free';
import Home from './pages/Home'
import NavBlackTheme from './components/NavBlackTheme'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavBlackTheme />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </>
  )
}

export default App
