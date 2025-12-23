import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from './components/Navigation'
import Hero from './components/section/Hero'
import About from './components/section/About'
import Philosophy from './components/section/Philosophy'
import TrainWithUs from './components/section/TrainWithUs'
import CTA from './components/section/CTA'
import Footer from './components/section/Footer'
import './App.css'

function App() {
  const mode = useSelector((state) => state.theme.mode)

  useEffect(() => {
    AOS.init({
      duration: 1000,
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
    <div className="min-h-screen w-full flex flex-col items-center justify-start transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />

      <Hero />
      <About />
      <Philosophy />
      <TrainWithUs />
      <CTA />
      <Footer />

    </div>
  )
}

export default App
