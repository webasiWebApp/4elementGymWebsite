import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import TrainWithJustin from './pages/TrainWithJustin'
import './App.css'

function App() {
  const mode = useSelector((state) => state.theme.mode)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation happens only once
    })
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col items-center justify-start transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/train-with-justin" element={<TrainWithJustin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
