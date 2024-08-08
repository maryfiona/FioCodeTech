
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import yourGif from '../assets/mobile1.gif';
import Gif from '../assets/mobile2.gif';
import realVideo from '../assets/realVideo.gif'
import realPhone from '../assets/realphone.jpg'
const Projects = () => {
  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0 text-primary">My Projects</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <li className="mx-3 active" data-filter="*">
                All Projects
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6 col-md-12 portfolio-item first">
            <img src={yourGif} alt="Video Placeholder" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 portfolio-item second">
            <img src={project1} alt="Project 1" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 portfolio-item third">
            <img src={project2} alt="Project 2" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 portfolio-item fourth">
            <img src={Gif} alt="Project 3" className="img-fluid" />
          </div>
      
          <div className="col-lg-6 col-md-6 portfolio-item third">
            <img src={realVideo} alt="Project 2" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 portfolio-item fourth">
            <img src={realPhone} alt="Project 3" className="img-fluid" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
