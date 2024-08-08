    import { useState, useEffect } from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import img from '../assets/FioCodeTech.jpg'

const Navbar = () => {
    const [isNavbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledDown = currentScrollPos > 50; 
            setNavbarVisible(isScrolledDown);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div>
             <nav
            className={`navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn ${
                isNavbarVisible ? 'visible' : 'hidden'
            }`}
            data-wow-delay="0.1s"
        >
            <a href="index.html" className="navbar-brand d-block d-lg-none">
            <img src={img} alt="" width={100} />
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/About" className="nav-item nav-link">About</Link>
                    <Link to="/Skills" className="nav-item nav-link">Skills</Link>
                    
                </div>
                <a href="/" className="navbar-brand bg-primary py-3 px-4 mx-3 d-none d-lg-block">
                   <img src={img} alt="" width={100} />
                </a>
                <div className="navbar-nav me-auto py-0">
               
                    <Link to="/Services" className="nav-item nav-link">Services</Link>
                    <Link to="/projects" className="nav-item nav-link">Projects</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
               
                </div>
            </div>
        </nav>


      
    </div>
  )
}

export default Navbar
