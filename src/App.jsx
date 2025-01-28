import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Mainimg from './components/Mainimg'

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <Mainimg />
    </>
  )
}

export default App
