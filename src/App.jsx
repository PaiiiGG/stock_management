import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import InfoOne from './components/InfoOne'
import InfoTwo from './components/InfoTwo'
import CTA from './components/CTA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <InfoOne/>
      <InfoTwo/>
      <CTA/>
    </>
  )
}

export default App
