import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import SkillsAndExperience from '../components/SkillsAndExperience.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'

const Home = () => {
 

  return (
    <div>
        <Header/>
        <About/> 
        <SkillsAndExperience/>
        <Services/>
        <Projects />
        <Contact/>
        
      
    </div>
  )
}

export default Home
