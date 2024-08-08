import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [counting, setCounting] = useState(true);

  const handleEnd = () => {
    setCounting(false);
    setTimeout(() => {
      setCounting(true);
    }, 1000); 
  };

 

  return (
    <div className="container-xxl py-6 text-center bg-dark text-light" id="about">
    <h2 className="mb-4 text-primary">ABOUT US</h2>
    <div className="container">
      <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-down">
            <div className="d-flex align-items-center mb-5">
              <div className="years flex-shrink-0 text-center me-4">
                <h1 className="display-1 mb-0" >5</h1>
                <h5 className="mb-0">Year</h5>
              </div>
              <h3 className="lh-base mb-0 fs-5">of experience as a Frontend developer</h3>
            </div>
            <p className="mb-4 fs-5">
              With a solid year of hands-on experience in Frontend Development, I have passionately contributed to
               the creation of visually stunning and highly functional web applications.
                Proficient in HTML, CSS, and JavaScript,
                 I have embraced modern frameworks such as React.js
                 , ensuring seamless and responsive user interfaces.
                  Collaborating seamlessly with cross-functional teams, I have delivered solutions that not only meet but exceed client expectations. My commitment to continuous learning keeps me at the forefront of industry trends, and I look forward to leveraging my skills in future projects.
            </p>

            <a className="btn btn-primary py-3 px-5 mb-5" href="#read-more">
              Read More
            </a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <img className="img-fluid rounded" src={client1} alt="" />
              </div>
              <div className="col-sm-6">
                <img className="img-fluid rounded" src={client2} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center mb-3" data-aos="fade-left">
              <h5 className="border-end pe-3 me-3 mb-0 fs-5">Happy Clients</h5>
              <h2 className="text-primary fw-bold mb-0 counter fs-5" data-toggle="counter-up">
                <CountUp end={counting ? 100000000000 : 0} duration={2} onStart={() => setCounting(true)} onEnd={handleEnd} />
              </h2>
            </div>
            <p className="mb-4 fs-5" data-aos="fade-right">
              While my journey is just beginning, I am excited about the prospect of working with you and future clients. At FioCodeTech, we are committed to building lasting relationships based on trust, innovation, and a shared vision for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
