import React from 'react';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import Contact from '../components/Contact';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Home from '../pages/Home.jsx'
import SkillsAndExperience from '../components/SkillsAndExperience.jsx';
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx'

const HomePage = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/" element={<Header />} />
              <Route path="/About" element={<About />} />
               <Route path="/Skills" element={<SkillsAndExperience/>} />
               <Route path="/Services" element={<Services/>} />
               <Route path="/Projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact />} />
              


    </Routes>
    {/* <Footer/> */}
    
    </div>

    </Router>
  );
};

export default HomePage;
