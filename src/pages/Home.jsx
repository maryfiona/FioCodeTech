import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import SkillsAndExperience from '../components/SkillsAndExperience.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/> 
        <SkillsAndExperience/>
        <Contact/>
        
      
    </div>
  )
}

export default Home
