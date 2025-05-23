import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { ClubsPage, } from './pages/Club'
import { UserPage } from './pages/DiscoverStudents'
import ProfileEdit from './pages/ProfileEdit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Connect } from './pages/Connect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
         
        <Route path="/Clubs" element={<ClubsPage />} />
        <Route path="/edit" element={<ProfileEdit />} />
        <Route path="/discover" element={<UserPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Connect />} />
      </Routes>
    </Router>
     

        
    </>
  )
}

export default App
