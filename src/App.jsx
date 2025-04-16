import React from 'react'
// import Qus from './Pages/qus'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import ResumeButton from './Components/ResumeButton'



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
   
      <Footer/>
    </div>
  )
}

export default App
