import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/SkillsAndExperience.css';

const SkillsAndExperience = () => {
    
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-4 mb-5" data-aos="fade-right">Skills</h1>
            <p className="lead mb-4" data-aos="fade-left">
            I excel in crafting immersive and responsive user interfaces, leveraging my expertise in HTML, CSS, and JavaScript.
              Proficient in modern frontend frameworks like React.js, I bring designs to life with precision and creativity.
              Passionate about delivering seamless user experiences, I continuously stay updated on the latest trends and technologies in frontend development.
              My skills extend beyond code; I am committed to turning visions into captivating digital realities.
            </p>
            <h3 className="mb-4 " data-aos="fade-down"> My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-6 " data-aos="fade-up">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold">HTML</h6>
                    <span className="badge bg-primary rounded-pill">95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold">CSS</h6>
                    <span className="badge bg-warning rounded-pill">85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Bootstrap</h6>
                    <span className="badge bg-danger rounded-pill">90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 " data-aos="fade-down">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold">JavaScript</h6>
                    <span className="badge bg-danger rounded-pill">90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold">React</h6>
                    <span className="badge bg-dark rounded-pill">95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold">Tailwind CSS</h6>
                    <span className="badge bg-info rounded-pill">50%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">
                  Experience
                </button>
              </li>
              <li className="nav-item w-50">
                <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">
                  Education
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                {/* Placeholder for Experience section */}
                <p className="mb-4">
                 
                </p>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                {/* Placeholder for Education section */}
                <p className="mb-4">
               
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;