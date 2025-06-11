import './App.css'
import { LandingPage } from './assets/components/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Locations from './pages/Locations'


function App() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
        />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
    
  )
}

export default App
