
import { useEffect } from 'react';
import '../css/Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/bg-icon.png'
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    const bgIconStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '70px', 
        height: '50px', 
      };
  return (
    <div className="container-fluid bg-light my-5 py-6  bg-dark" id="service" data-aos="fade-down-right">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-12 text-center">
            <h1 className=" mb-4 text-primary  p-5">My Services</h1>
            <a className="btn btn-primary py-3 px-5" href="/contact">Hire Me</a>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icon flex-shrink-0 mb-3" style={bgIconStyle}>
      <FontAwesomeIcon icon={faCode} className="fa-3x text-dark" />
    </div>
              <div className="ms-sm-4">
                <h3 className="mb-3">Frontend Development</h3>
                <h6> Elevate your digital presence with our expert frontend development services. 
  We specialize in crafting engaging and responsive interfaces that captivate 
  your audience. Our dedicated team of frontend developers is committed to 
  delivering modern, user-friendly designs that not only meet but exceed your 
  expectations. From visually stunning websites to seamless user experiences, 
  we bring your ideas to life. Partner with us to create a compelling online 
  presence that leaves a lasting impression on your users.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
