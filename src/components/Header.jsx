import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../css/Header.css'
import woman from '../assets/woman1.png'

const Header = () => {
  
        useEffect(() => {
          const options = {
            strings: [ "Front End Developer"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
          };
      
          const typed = new Typed('.typed-text-output', options);
      
          return () => {
           
            typed.destroy();
          };
        }, []);
  return (
    <div>
        
        <div className="container-fluid  my-6 mt-0" id="home">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                        <h3 className="text-primary mb-3">I'm</h3>
                        <h1 className="display-3 mb-3">Agu Chidimma MaryFiona</h1>
                        <h2 className="typed-text-output d-inline"></h2>
                       
                        <div className="d-flex align-items-center pt-5">
                            <a href="" className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                            
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid"src={woman} alt="" />
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Header
